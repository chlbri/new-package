import { copyFile } from "node:fs/promises";

const shellPath = new URL("../dist/client/_shell.html", import.meta.url);
const indexPath = new URL("../dist/client/index.html", import.meta.url);

await copyFile(shellPath, indexPath);
