import { Router } from "express";
import { renderProductList } from "../controllers/product.controller";

export const router = Router();

router.get("/", renderProductList);
