import { Request, Response } from "express";
import { OrderModel } from "../models/order";
import { Product, ProductModel } from "../models/product";

interface OrderItem extends Product {
  quantity: number;
}

type OrderItems = {
  orderDate: string;
  orderItems: OrderItem[];
};

export const renderOrder = async (req: Request, res: Response) => {
  const currentUserId = (req.session as { id?: string }).id;

  let orderItems: OrderItems[] = [];
  if (!currentUserId) {
    res.render("pages/order", {
      items: orderItems,
      route: true
    });
    return;
  }

  try {
    const orders = await OrderModel.findBy(currentUserId);

    console.log("orders:", orders);

    if (!orders) {
      res.render("pages/order", {
        items: orderItems,
        route: true
      });
      return;
    }

    const itemsPromises = orders.map(async (order) => {
      const orderItems = await Promise.all(
        order.products.map(async (product) => {
          const productInfo = await ProductModel.findBy(product.productId);
          if (!productInfo) {
            return null;
          }

          const orderItem: OrderItem = {
            ...productInfo,
            quantity: product.quantity
          };

          return orderItem;
        })
      );
      let total = 0;
      orderItems.forEach((item) => {
        if (item) {
          total += item.price * item.quantity;
        }
      });
      const orderDate = formatDate(order.createdDate ?? 0);
      return {
        orderDate,
        orderItems: orderItems.filter((item): item is OrderItem => item !== null),
        totalPrice: total
      };
    });

    const allOrderItems = await Promise.all(itemsPromises);
    orderItems = allOrderItems.flat();

    res.render("pages/order", {
      items: orderItems,
      route: true
    });
  } catch (error) {
    console.error("Error fetching orders or products:", error);
    res.status(500).send("Internal Server Error");
  }
};

function formatDate(timestamp: number): string {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので+1
  const day = String(date.getDate()).padStart(2, "0");

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = String(hours % 12 || 12).padStart(2, "0"); // 12時間制に変換

  return `${year}/${month}/${day} ${formattedHours}:${minutes} ${ampm}`;
}
