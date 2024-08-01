import { Client, Pool } from "pg";

export const client = new Client({
  host: "localhost",
  port: 5432,
  user: "mikaurakawa",
  password: "",
  database: "e_commerce_colony"
});

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "mikaurakawa",
  password: "",
  database: "e_commerce_colony"
});
