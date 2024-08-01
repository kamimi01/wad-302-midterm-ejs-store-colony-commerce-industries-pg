import { config } from "dotenv";
import path from "path";

export const ENV = process.env.NODE_ENV || "development";
export const PATH = path.join(__dirname, `../.env.${ENV}`);

config({ path: PATH });

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || "localhost";

export const SESSIONKEY = "c7b4290161f6f3c13073d8604be3ccbf5cb27db311a78d8cd0eeb452ff519c44";
