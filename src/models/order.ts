type Order = {
  userId: string;
  products: {
    productId: number;
    quantity: number;
  }[];
  createdDate?: number;
};

export const orders: Order[] = [];

const findBy = (userId: string): Order[] | null => {
  // find orders by user id
  return orders.filter((order) => order.userId === userId) || null;
};

const create = (userId: string, products: { productId: number; quantity: number }[]): Order => {
  // create new order
  const newOrder: Order = {
    userId,
    products,
    createdDate: Date.now()
  };

  orders.push(newOrder);

  return newOrder;
};

export const OrderModel = { findBy, create };
