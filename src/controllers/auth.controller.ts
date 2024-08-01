import { Request, Response } from "express";
import { UserModel } from "../models/user";

export const renderLogin = (req: Request, res: Response) => {
  res.render("pages/login", {
    error: null,
    page: "Login",
    action: "login",
    htmlForLink: "Register your account <span><a href='/auth/register'>here</a></span> today!",
    route: false
  });
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existing = UserModel.findBy(email);

  if (!existing || existing.password !== password) {
    res.render("pages/login", {
      error: "Invalid Email or Password",
      page: "Login",
      action: "login",
      htmlForLink: "Register your account <span><a href='/auth/register'>here</a></span> today!",
      route: false
    });
    return;
  }

  (req.session as { id?: string }).id = existing.id;

  res.redirect("/products");
};

export const renderRegister = (req: Request, res: Response) => {
  res.render("pages/login", {
    error: null,
    page: "Register",
    action: "register",
    htmlForLink: "If you has an account, login <span><a href='/auth/login'>here</a></span>",
    route: false
  });
};

export const register = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existing = UserModel.findBy(email);

  if (existing) {
    res.render("pages/login", {
      error: "email already in use",
      page: "Register",
      action: "register",
      htmlForLink: "If you has an account, login <span><a href='/auth/login'>here</a></span>",
      route: false
    });
    return;
  }

  UserModel.create(email, password);

  res.redirect("/auth/login");
};

export const logout = (req: Request, res: Response) => {
  (req.session as { id?: string }).id = undefined;
  res.end();
};
