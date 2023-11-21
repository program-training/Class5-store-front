import { ProductsCardInterface } from "../../products/interfaces/ProductCardInterface";
import { productInCart } from "../types/productInCart";

export const handelCart = (
  item: ProductsCardInterface,
  cart: productInCart[]
) => {
  if (!cart.length) return [{ product: item, amount: 1, sum: item.salePrice }];
  const index = cart.findIndex((i) => i.product.id === item.id);
  if (index !== -1) {
    cart[index].amount += 1;
    cart[index].sum += cart[index].product.salePrice;
  } else {
    cart.push({
      product: item,
      amount: 1,
      sum: item.salePrice,
    });
  }
  return [...cart];
};

export const handelAddOne = (id: string, cart: productInCart[]) => {
  const index = cart.findIndex((i) => i.product.id === id);
  cart[index].amount += 1;
  cart[index].sum += cart[index].product.salePrice;
  return [...cart];
};

export const handelSubOne = (id: string, cart: productInCart[]) => {
  const index = cart.findIndex((i) => i.product.id === id);
  if (cart[index].amount === 1) {
    const newCart = cart.filter((i) => i.product.id !== id);
    return [...newCart];
  } else {
    cart[index].amount -= 1;
    cart[index].sum -= cart[index].product.salePrice;
    return [...cart];
  }
};

export const removeItemFromCart = (id: string, cart: productInCart[]) => {
  const newCart = cart.filter((i) => i.product.id !== id);
  return [...newCart];
};

export const sumCartItem = (item: ProductsCardInterface, amount: number) => {
  return {
    id: item.id,
    product: item,
    sum: item.salePrice * amount,
    amount,
  };
};
