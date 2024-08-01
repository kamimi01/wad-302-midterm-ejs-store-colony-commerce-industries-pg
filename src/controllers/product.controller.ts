import { Request, Response } from "express";
import { promises as fs } from "fs";
import path from "path";

export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
  grade: string;
  color: string;
  id: number;
}

export const renderProductList = async (req: Request, res: Response) => {
  try {
    const filePath = path.join(__dirname, "../public/items.json");
    const data = await fs.readFile(filePath, "utf8");
    const products: Product[] = JSON.parse(data);

    let filteredProducts: Product[] = products;

    const { minPrice, maxPrice, color, grade, type } = req.query;

    if (minPrice) {
      filteredProducts = filteredProducts.filter((product) => product.price >= Number(minPrice));
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter((product) => product.price <= Number(maxPrice));
    }

    if (color) {
      filteredProducts = filteredProducts.filter((product) => product.color === color);
    }

    if (grade) {
      filteredProducts = filteredProducts.filter((product) => product.grade === grade);
    }

    if (type) {
      filteredProducts = filteredProducts.filter((product) => product.type === type);
    }

    const session = req.session as { id?: string };
    if (!session || !session.id) {
      res.render("pages/productList", { products: filteredProducts, route: "notAuthenticated" });
    } else {
      res.render("pages/productList", { products: filteredProducts, route: true });
    }
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Error fetching products");
  }
};
