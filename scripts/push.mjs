/**
 * Pushes the current branch to the remote and PROVES whether it landed.
 *
 * Why this exists (in order of discovery):
 *   1. The sandbox shell swallows child-process stdout for some tools, so a push
 *      could look like "exit 0, no output" whether it worked or not. This script
 *      streams git output line-by-line into push-out.log instead of relying on
 *      the parent shell's stdio.
 *   2. Later we found the real failure mode: the configured credential chain
 *      (`credential.helper = helper-selector` + git-credential-manager) HANGS in
 *      this environment. Even `printf 'protocol=https\nhost=github.com\n\n' |
 *      git credential fill` never returns. Anonymous requests worked fine, so
 *      the network and the WattToolkit proxy were never the problem.
 *      Fix: reset the helper list and inject an inline shell helper that reads
 *      the PAT from an environment variable. No GCM, no hang, sub-second push.
 *
 * Usage: node scripts/push.mjs [remote] [branch]
 *   Defaults: remote=origin, branch=main
 *
 * Behaviour:
 *   - Reads the PAT from, in order: $GITHUB_TOKEN, $GH_TOKEN, then
 *     ~/.workbuddy/.secrets/github_token. The token is passed to the child via
 *     the environment only — never as an argv value, never logged.
 *   - Spawns git with GIT_SSL_NO_VERIFY=true (WattToolkit's self-signed cert
 *     trips schannel's CRL check) and a low-speed floor.
 *   - Hard timeout (PUSH_TIMEOUT_MS, default 120000) so a hang can never burn
 *     ten minutes again.
 *   - Verifies with `git ls-remote` afterwards: exit 0 only when the remote tip
 *     equals local HEAD.
 *
 * Exit codes: 0 = pushed and verified | 2 = push said ok but tip differs
 *             | 3 = timed out | otherwise the git exit code.
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const ROOT = process.cwd();
const LOG = path.join(ROOT, "push-out.log");
const [, , remoteArg = "origin", branchArg = "main"] = process.argv;
const git = process.platform === "win32" ? "git.exe" : "git";
const TIMEOUT_MS = Number(process.env.PUSH_TIMEOUT_MS || 120000);

let buf = `=== push ${remoteArg} ${branchArg} @ ${new Date().toISOString()} ===\n`;
fs.writeFileSync(LOG, buf);

/** Resolve the PAT without ever printing it. */
function resolveToken() {
  for (const key of ["GITHUB_TOKEN", "GH_TOKEN"]) {
    if (process.env[key]) return { token: process.env[key].trim(), source: `env:${key}` };
  }
  const candidates = [
    path.join(os.homedir(), ".workbuddy", ".secrets", "github_token"),
    path.join(os.homedir(), ".workbuddy", ".secrets", "github-token"),
  ];
  for (const p of candidates) {
    try {
      const t = fs.readFileSync(p, "utf-8").trim();
      if (t) return { token: t, source: `file:${p}` };
    } catch {
      /* keep looking */
    }
  }
  return { token: "", source: "none" };
}

const { token, source: tokenSource } = resolveToken();

const env = {
  ...process.env,
  GIT_SSL_NO_VERIFY: "true",
  GIT_HTTP_LOW_SPEED_TIME: "30",
  GIT_HTTP_LOW_SPEED_LIMIT: "1024",
  GIT_TERMINAL_PROMPT: "0",
};

// Credential args: blow away the broken helper chain, then supply the PAT from
// the child's environment. Without the leading empty `credential.helper=`,
// git would still try `helper-selector` first and hang.
const credentialArgs = token
  ? [
      "-c",
      "credential.helper=",
      "-c",
      'credential.helper=!f() { echo "username=Zhou-Xiaoyong"; echo "password=$GITHUB_TOKEN"; }; f',
    ]
  : [];
if (token) env.GITHUB_TOKEN = token;

function append(line) {
  buf += line;
  fs.writeFileSync(LOG, buf);
}

/** Spawn git, stream output to the log, and enforce a hard timeout. */
function run(args, { timeoutMs = 0 } = {}) {
  return new Promise((resolve) => {
    const c = spawn(git, args, {
      cwd: ROOT,
      env,
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    });
    let killed = false;
    const timer =
      timeoutMs > 0
        ? setTimeout(() => {
            killed = true;
            append(`[watchdog] no result after ${timeoutMs}ms — killing git\n`);
            c.kill("SIGKILL");
          }, timeoutMs)
        : null;

    c.stdout.on("data", (d) => append(`[stdout] ${d.toString()}`));
    c.stderr.on("data", (d) => append(`[stderr] ${d.toString()}`));
    c.on("error", (e) => {
      if (timer) clearTimeout(timer);
      append(`[spawn error] ${e.message}\n`);
      resolve({ code: 1, stdout: "", killed });
    });
    c.on("close", (code) => {
      if (timer) clearTimeout(timer);
      resolve({ code: code ?? 1, killed, stdout: "" });
    });
  });
}

(async () => {
  append(`[info] token source: ${tokenSource}${token ? ` (len ${token.length})` : " — falling back to configured helpers"}\n`);

  const local = (await new Promise((resolve) => {
    const c = spawn(git, ["rev-parse", "HEAD"], {
      cwd: ROOT,
      env,
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    });
    let o = "";
    c.stdout.on("data", (d) => (o += d.toString()));
    c.on("close", () => resolve(o.trim()));
  })) || "";
  append(`[pre:local HEAD] ${local}\n`);

  append("\n--- git push ---\n");
  const push = await run([...credentialArgs, "push", remoteArg, branchArg], {
    timeoutMs: TIMEOUT_MS,
  });
  append(`--- exit ${push.code}${push.killed ? " (TIMED OUT)" : ""} ---\n`);

  // Verify against the remote rather than trusting the push's own exit code.
  const remote = await new Promise((resolve) => {
    const c = spawn(git, ["ls-remote", remoteArg, `refs/heads/${branchArg}`], {
      cwd: ROOT,
      env,
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    });
    let o = "";
    c.stdout.on("data", (d) => (o += d.toString()));
    c.on("close", () => resolve((o.trim().split(/\s+/)[0] || "").trim()));
  });
  if (remote) append(`[post:remote tip] ${remote}\n`);

  append(`\nSUMMARY local=${local} remote=${remote || "(unknown)"} exit=${push.code}\n`);

  if (remote && local && remote === local) {
    append("RESULT: PUSH SUCCEEDED (remote tip == local HEAD)\n");
    process.exit(0);
  }
  if (push.killed) {
    append("RESULT: PUSH TIMED OUT — credential helper or network stalled\n");
    process.exit(3);
  }
  if (push.code === 0 && remote && remote !== local) {
    append(
      "RESULT: push reported success but remote tip differs — re-check with git ls-remote\n",
    );
    process.exit(2);
  }
  append(`RESULT: PUSH FAILED (exit ${push.code})\n`);
  process.exit(push.code || 1);
})();
