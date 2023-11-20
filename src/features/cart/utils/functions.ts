import { ProductCardInterface } from "../../products/interfaces/ProductCardInterface";
import { productInCart } from "../types/productInCart";

export const handelCart = (
  item: ProductCardInterface,
  cart: productInCart[]
) => {
  if (!cart.length) return [{ product: item, amount: 1, sum: item.price }];
  const index = cart.findIndex((i) => i.product._id === item._id);
  if (index !== -1) {
    cart[index].amount += 1;
    cart[index].sum += cart[index].product.price;
  } else {
    cart.push({
      product: item,
      amount: 1,
      sum: item.price,
    });
  }
  return [...cart];
};

export const handelAddOne = (id: string, cart: productInCart[]) => {
  const index = cart.findIndex((i) => i.product._id === id);
  cart[index].amount += 1;
  cart[index].sum += cart[index].product.price;
  return [...cart];
};

export const handelSubOne = (id: string, cart: productInCart[]) => {
  const index = cart.findIndex((i) => i.product._id === id);
  if (cart[index].amount === 1) {
    const newCart = cart.filter((i) => i.product._id !== id);
    return [...newCart];
  } else {
    cart[index].amount -= 1;
    cart[index].sum -= cart[index].product.price;
    return [...cart];
  }
};

export const removeItemFromCart = (id: string, cart: productInCart[]) => {
  const newCart = cart.filter((i) => i.product._id !== id);
  return [...newCart];
};

export const sumCartItem = (item: ProductCardInterface, amount: number) => {
  return {
    id: item._id,
    product: item,
    sum: item.price * amount,
    amount,
  };
};
