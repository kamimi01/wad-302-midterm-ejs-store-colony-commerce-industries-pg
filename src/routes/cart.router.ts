import { Router } from "express";
import { renderCart, updateCart, deleteCartItem } from "../controllers/cart.controller";

export const router = Router();

router.get("/", renderCart);
router.post("/", updateCart);
router.delete("/:productId", deleteCartItem);
