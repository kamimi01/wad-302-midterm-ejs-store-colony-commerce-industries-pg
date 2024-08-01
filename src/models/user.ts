import crypto from "crypto";
import { pool } from "../db";

type User = {
  id: string;
  email: string;
  password: string;
};

const findBy = async (email: string) => {
  // get user with email
  const data = await pool.query<User>("SELECT * FROM users WHERE email = $1", [email]);
  return data.rows[0] || null;
};

const findByID = async (id: string) => {
  // get user with id
  const data = await pool.query<User>("SELECT * FROM users WHERE id = $1", [id]);
  return data.rows[0] || null;
};

const create = async (email: string, password: string) => {
  // create user
  const newUser: User = {
    id: crypto.randomUUID(),
    email,
    password
  };

  const data = await pool.query(
    `
    INSERT INTO users (id, email, password) values ($1, $2, $3)
    `,
    [newUser.id, newUser.email, newUser.password]
  );

  return data.rows[0];
};

export const UserModel = { findBy, findByID, create };
