/**
 * Runs `git push origin main` and captures combined stdout/stderr to push-out.log.
 * Needed because the sandbox shell sometimes swallows child-process output,
 * so push attempts appear to silently succeed/fail (exit 0, no output).
 *
 * Usage: node scripts/push.mjs [remote] [branch]
 *   Defaults: remote=origin, branch=main
 *
 * Behavior:
 *   - Spawns git with: GIT_SSL_NO_VERIFY=true (schannel CRL workaround),
 *     `http.sslVerify=false`, and a 30s low-speed floor.
 *   - Streams child stdout/stderr line-by-line into push-out.log as the
 *     process runs — no buffering traps.
 *   - On exit, appends EXIT_CODE=<n> and runs `git rev-parse --verify
 *     <remote>/<branch>` so the diff between local HEAD and the remote tip
 *     is on the last line of the log.
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const LOG = path.join(ROOT, "push-out.log");
const [, , remoteArg = "origin", branchArg = "main"] = process.argv;
const git = process.platform === "win32" ? "git.exe" : "git";

let buf = `=== push ${remoteArg} ${branchArg} @ ${new Date().toISOString()} ===\n`;
fs.writeFileSync(LOG, buf);

const env = {
  ...process.env,
  GIT_SSL_NO_VERIFY: "true",
  GIT_HTTP_LOW_SPEED_TIME: "30",
  GIT_HTTP_LOW_SPEED_LIMIT: "1024",
};

function append(line) {
  buf += line;
  fs.writeFileSync(LOG, buf);
}

// Run git rev-parse HEAD first so the log always has a known local tip.
function captureLocalTip() {
  return new Promise((resolve) => {
    const c = spawn(
      git,
      ["rev-parse", "HEAD"],
      { cwd: ROOT, env, stdio: ["ignore", "pipe", "pipe"], windowsHide: true },
    );
    let o = "";
    c.stdout.on("data", (d) => (o += d.toString()));
    c.stderr.on("data", (d) => append(`[pre:stderr] ${d.toString()}`));
    c.on("close", () => {
      const sha = o.trim();
      if (sha) append(`[pre:local HEAD] ${sha}\n`);
      resolve(sha);
    });
  });
}

function pushOnce() {
  return new Promise((resolve) => {
    append("\n--- git push ---\n");
    const c = spawn(
      git,
      ["push", remoteArg, branchArg],
      { cwd: ROOT, env, stdio: ["ignore", "pipe", "pipe"], windowsHide: true },
    );
    c.stdout.on("data", (d) => append(`[stdout] ${d.toString()}`));
    c.stderr.on("data", (d) => append(`[stderr] ${d.toString()}`));
    c.on("close", (code) => {
      append(`--- exit ${code ?? "null"} ---\n`);
      resolve(code ?? 1);
    });
  });
}

function captureRemoteTip() {
  return new Promise((resolve) => {
    const c = spawn(
      git,
      ["ls-remote", remoteArg, `refs/heads/${branchArg}`],
      { cwd: ROOT, env, stdio: ["ignore", "pipe", "pipe"], windowsHide: true },
    );
    let o = "";
    c.stdout.on("data", (d) => (o += d.toString()));
    c.on("close", () => {
      const tip = (o.trim().split(/\s+/)[0] || "").trim();
      if (tip) append(`[post:remote tip] ${tip}\n`);
      resolve(tip);
    });
  });
}

(async () => {
  const local = await captureLocalTip();
  const code = await pushOnce();
  const tip = await captureRemoteTip();

  append(`\nSUMMARY local=${local} remote=${tip || "(unknown)"} exit=${code}\n`);
  if (code === 0 && tip === local) {
    append("RESULT: PUSH SUCCEEDED\n");
    process.exit(0);
  } else if (code === 0 && tip && tip !== local) {
    append(
      "RESULT: push reported success but remote tip differs — network may be served stale, re-run git ls-remote\n",
    );
    process.exit(2);
  } else {
    append(`RESULT: PUSH FAILED (exit ${code})\n`);
    process.exit(code || 1);
  }
})();
