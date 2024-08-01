import crypto from "crypto";

type User = {
  id: string;
  email: string;
  password: string;
};

export const users: User[] = [
  {
    id: "1",
    email: "a@a",
    password: "a"
  }
];

const findBy = (email: string): User | null => {
  // get user with email
  return users.find((user) => user.email === email) || null;
};

const findByID = (id: string): User | null => {
  // get user with id
  return users.find((user) => user.id === id) || null;
};

const create = (email: string, password: string): User => {
  // create user
  const newUser: User = {
    id: crypto.randomUUID(),
    email,
    password
  };

  users.push(newUser);

  return newUser;
};

export const UserModel = { findBy, findByID, create };
