import { spawn } from "node:child_process";
const port = process.env.TEST_PORT || "3101";
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "--port",
    port,
    "--hostname",
    "127.0.0.1",
  ],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let checking = false;
const timeout = setTimeout(() => {
  server.kill();
  process.exitCode = 1;
}, 30000);
server.stdout.on("data", (chunk) => {
  if (checking || !chunk.toString().includes("Ready")) return;
  checking = true;
  const checks = spawn(process.execPath, ["tests/http.mjs"], {
    stdio: "inherit",
    env: { ...process.env, TEST_BASE_URL: `http://127.0.0.1:${port}` },
  });
  checks.on("exit", (code) => {
    clearTimeout(timeout);
    server.kill();
    process.exitCode = code ?? 1;
  });
});
server.stderr.pipe(process.stderr);
server.on("exit", (code) => {
  if (!checking) {
    clearTimeout(timeout);
    process.exitCode = code || 1;
  }
});
