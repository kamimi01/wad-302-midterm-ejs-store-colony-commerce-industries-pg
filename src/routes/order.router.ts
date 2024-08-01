import { Router } from "express";
import { renderOrder } from "../controllers/order.controller";

export const router = Router();

router.get("/", renderOrder);
