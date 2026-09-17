/**
 * Generic output-capture runner for this repo.
 *
 * The sandbox shell swallows child-process stdout, so `node scripts/foo.mjs > out.log`
 * produces a 0-byte file even when the script ran fine. Spawning the child and
 * writing its piped output to disk from inside Node works, so this wrapper does
 * exactly that for any audit script.
 *
 * Usage:
 *   node scripts/run-capture.mjs <script> [logFile] [-- args...]
 *
 * Examples:
 *   node scripts/run-capture.mjs scripts/reconcile-sitemap.mjs rec-out.log
 *   node scripts/run-capture.mjs scripts/validate-sitemap.mjs validate-out.log
 *
 * Exits with the child's exit code so it stays usable in a chain.
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const argv = process.argv.slice(2);

if (argv.length === 0) {
  fs.writeFileSync(
    path.join(ROOT, "capture-usage.txt"),
    "Usage: node scripts/run-capture.mjs <script> [logFile] [-- args...]\n",
  );
  process.exit(64);
}

const target = argv[0];
const logName = argv[1] && !argv[1].startsWith("--") ? argv[1] : "capture-out.log";
const sepIndex = argv.indexOf("--");
const childArgs = sepIndex === -1 ? [] : argv.slice(sepIndex + 1);

const logFile = path.join(ROOT, logName);
const node = process.execPath;

const env = { ...process.env };
delete env.NODE_OPTIONS;

const child = spawn(node, [path.join(ROOT, target), ...childArgs], {
  cwd: ROOT,
  env,
  stdio: ["ignore", "pipe", "pipe"],
});

let buf = "";
const flush = () => fs.writeFileSync(logFile, buf);

child.stdout.on("data", (d) => {
  buf += d.toString();
  flush();
});
child.stderr.on("data", (d) => {
  buf += d.toString();
  flush();
});

child.on("close", (code) => {
  buf += `\n\nEXIT_CODE=${code}\n`;
  flush();
  process.exit(code ?? 0);
});
