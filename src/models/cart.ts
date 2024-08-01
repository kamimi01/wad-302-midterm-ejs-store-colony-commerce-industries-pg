export type CartItem = {
  userId: string;
  productId: number;
  quantity: number;
  createdDate: number;
};

export let cartItems: CartItem[] = [];

const findBy = (userId: string): CartItem[] | null => {
  // find cart items by user id
  return cartItems.filter((cartItem) => cartItem.userId === userId) || null;
};

const create = (userId: string, productId: number, quantity: number): CartItem => {
  // find cart item by user id and product id
  const existingCartItem =
    cartItems.find((cartItem) => cartItem.userId === userId && cartItem.productId === productId) ||
    null;

  // update cart item if exists
  if (existingCartItem) {
    existingCartItem.quantity = quantity;
    return existingCartItem;
  }

  // create new cart item if not exists
  const newCartItem: CartItem = {
    userId,
    productId,
    quantity,
    createdDate: Date.now()
  };

  cartItems.push(newCartItem);

  return newCartItem;
};

const deleteCart = (userId: string, productId: number): void => {
  // find index of cart item by user id and product id
  const index = cartItems.findIndex(
    (cartItem) => cartItem.userId === userId && cartItem.productId === productId
  );

  // remove cart item from cart items
  cartItems.splice(index, 1);
};

const deleteAllCart = (userId: string): void => {
  // filter out cart items by user id
  cartItems = cartItems.filter((cartItem) => cartItem.userId !== userId);

  console.log(cartItems);
};

export const CartModel = { findBy, create, deleteCart, deleteAllCart };
