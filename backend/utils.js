import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);

export const getRootDirectory = () => path.dirname(__filename);
