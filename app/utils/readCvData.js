import { promises as fs } from "fs";

export async function readCvData() {
    const file = await fs.readFile(process.cwd() + "/app/data/cv.json", "utf8");
    return JSON.parse(file);
}
