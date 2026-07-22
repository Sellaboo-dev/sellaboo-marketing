import { promises as fs } from "node:fs";
import path from "node:path";

const LEGAL_DIRECTORY = path.join(process.cwd(), "content", "legal");

export async function readLegalDocument(
  filename: string,
): Promise<string> {
  const filePath = path.join(LEGAL_DIRECTORY, filename);

  return fs.readFile(filePath, "utf8");
}
