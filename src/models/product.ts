import path from "path";
import { promises } from "fs";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

const findBy = async (productId: number) => {
  const filePath = path.join(__dirname, "../public/items.json");
  const data = await promises.readFile(filePath, "utf8");
  const products: Product[] = JSON.parse(data);

  // find product by product id
  return products.find((product) => product.id === productId) || null;
};


export const ProductModel = { findBy };
