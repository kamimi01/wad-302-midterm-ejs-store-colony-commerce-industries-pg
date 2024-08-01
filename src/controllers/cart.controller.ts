import { Request, Response } from "express";
import { promises } from "fs";
import path from "path";
import { CartModel } from "../models/cart";
import { Product } from "./product.controller";

interface CartItemsInfo extends Product {
  quantity: number;
}

const fetchAllProductData = async () => {
  const filePath = path.join(__dirname, "../public/items.json");
  const data = await promises.readFile(filePath, "utf8");
  const products: Product[] = JSON.parse(data);
  return products;
};

export const renderCart = async (req: Request, res: Response) => {
  const currentUserId = (req.session as { id?: string }).id;

  try {
    let cartItemsInfo;
    if (currentUserId) {
      cartItemsInfo = await createCartItemsInfo(currentUserId);
    }
    res.render("pages/cart", {
      items: cartItemsInfo,
      route: true
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Error fetching products");
  }
};

export const createCartItemsInfo = async (currentUserId: string) => {
  const allProducts = await fetchAllProductData();
  let cartItemsOfCurrentUser;
  if (currentUserId) {
    cartItemsOfCurrentUser = CartModel.findBy(currentUserId);
  }

  const cartItemsInfo: CartItemsInfo[] = [];
  cartItemsOfCurrentUser?.forEach((cartItem) => {
    const productInfoInCart = allProducts.find((product) => product.id === cartItem.productId);
    if (productInfoInCart) {
      const cartItemsAndQuantity = {
        ...productInfoInCart,
        quantity: cartItem.quantity
      };
      cartItemsInfo.push(cartItemsAndQuantity);
    }
  });

  return cartItemsInfo;
};

export const updateCart = (req: Request, res: Response) => {
  const { productID, quantity } = req.body;
  const currentUserId = (req.session as { id?: string }).id;

  if (!currentUserId) {
    res.status(401).send("Unauthorized");
    return;
  }

  CartModel.create(currentUserId, parseInt(productID), quantity);

  res.status(200).send("Cart updated successfully");
};

export const deleteCartItem = (req: Request, res: Response) => {
  const { productId } = req.params;
  const currentUserId = (req.session as { id?: string }).id;

  if (!currentUserId) {
    res.status(401).send("Unauthorized");
    return;
  }

  CartModel.deleteCart(currentUserId, parseInt(productId));

  res.status(200).send("Cart item deleted successfully");
};
