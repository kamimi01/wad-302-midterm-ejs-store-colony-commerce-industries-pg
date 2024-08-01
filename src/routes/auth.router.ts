import { Router } from "express";
import {
  login,
  logout,
  register,
  renderLogin,
  renderRegister
} from "../controllers/auth.controller";

export const router = Router();

router.get("/login", renderLogin);
router.post("/login", login);

router.get("/register", renderRegister);
router.post("/register", register);

router.post("/logout", logout);
