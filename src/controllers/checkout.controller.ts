import { Request, Response } from "express";
import { CartModel } from "../models/cart";
import { OrderModel } from "../models/order";
import { createCartItemsInfo } from "./cart.controller";

export const renderCheckout = async (req: Request, res: Response) => {
  const currentUserId = (req.session as { id?: string }).id;

  if (currentUserId) {
    const allCartItemsByUserId = await createCartItemsInfo(currentUserId);

    res.render("pages/checkout", {
      items: allCartItemsByUserId,
      route: true
    });
  }
};

export const checkout = async (req: Request, res: Response) => {
  const currentUserId = (req.session as { id?: string }).id;

  if (!currentUserId) {
    res.status(401).send("Unauthorized");
    return;
  }

  const allCartItemsByUserId = await createCartItemsInfo(currentUserId);

  const products: { productId: number; quantity: number }[] = allCartItemsByUserId.map((item) => ({
    productId: item.id,
    quantity: item.quantity
  }));

  // Create order history
  OrderModel.create(currentUserId, products);

  // Clear the cart
  CartModel.deleteAllCart(currentUserId);

  res.status(200).send("Checkout successful");
};
