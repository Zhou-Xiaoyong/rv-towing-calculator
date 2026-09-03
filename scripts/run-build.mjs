/**
 * Runs `next build` and captures combined stdout/stderr to build-out.log.
 * Needed because the sandbox shell sometimes swallows child-process output.
 *
 * Usage: node scripts/run-build.mjs
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const logFile = path.join(ROOT, "build-out.log");
const node = process.execPath;
const nextBin = path.join(ROOT, "node_modules", "next", "dist", "bin", "next");

const env = { ...process.env };
delete env.NODE_OPTIONS;

const child = spawn(node, [nextBin, "build"], {
  cwd: ROOT,
  env,
  stdio: ["ignore", "pipe", "pipe"],
});

let buf = "";
child.stdout.on("data", (d) => {
  buf += d.toString();
  fs.writeFileSync(logFile, buf);
});
child.stderr.on("data", (d) => {
  buf += d.toString();
  fs.writeFileSync(logFile, buf);
});

child.on("close", (code) => {
  buf += `\n\nEXIT_CODE=${code}\n`;
  fs.writeFileSync(logFile, buf);
  process.exit(code ?? 0);
});
