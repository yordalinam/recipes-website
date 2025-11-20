import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables once
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Export a function to load Swagger spec asynchronously
export async function loadSwaggerSpec() {
  const swaggerPath = path.join(__dirname, "swagger.json");
  const fileContent = await readFile(swaggerPath);
  return JSON.parse(fileContent);
}
