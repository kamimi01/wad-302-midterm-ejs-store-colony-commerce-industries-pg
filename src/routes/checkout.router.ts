import { Router } from "express";
import { renderCheckout, checkout } from "../controllers/checkout.controller";

export const router = Router();

router.get("/", renderCheckout);
router.post("/", checkout);
