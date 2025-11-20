// loadSwagger.js

import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadSwaggerSpec() {
  const swaggerPath = path.join(__dirname, "swagger.json");
  const fileContent = await readFile(swaggerPath, "utf-8");
  return JSON.parse(fileContent);
}
