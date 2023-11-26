import axios, { AxiosResponse } from "axios";
import { LocalCartType, productInCart } from "../types/productInCart";

export const handelCart = (newItemId: number, cart: productInCart[]) => {
  if (!cart.length) return [{ productId: newItemId, amount: 1 }];
  const index = cart.findIndex((i) => i.productId === newItemId);
  if (index !== -1) {
    cart[index].amount += 1;
  } else {
    cart.push({
      productId: newItemId,
      amount: 1,
    });
  }
  return [...cart];
};

export const handelAddOne = (id: number, cart: productInCart[]) => {
  const index = cart.findIndex((i) => i.productId === id);
  cart[index].amount += 1;
  return [...cart];
};

export const handelSubOne = (id: number, cart: productInCart[]) => {
  const index = cart.findIndex((i) => i.productId === id);
  if (cart[index].amount === 1) {
    const newCart = cart.filter((i) => i.productId !== id);
    return [...newCart];
  } else {
    cart[index].amount -= 1;
    return [...cart];
  }
};

export const removeItemFromCart = (id: number, cart: productInCart[]) => {
  const newCart = cart.filter((i) => i.productId !== id);
  return [...newCart];
};

export const sumCartItem = async (
  localCart: LocalCartType[],
  cart: productInCart[]
) => {
  const newLocalCart: LocalCartType[] = [];
  const sumAndAmount = { sum: 0, amount: 0 };
  const promises: Promise<AxiosResponse | void>[] = [];
  cart.forEach((product) => {
    return promises.push(
      axios
        .get(`https://app-store-server1.onrender.com/api/products/${product.productId}`)
        .then((newProduct) => {
          const updatedProduct = newProduct.data;
          const index = newLocalCart.findIndex(
            (item) => item.product.id === updatedProduct.id
          );
          if (index !== -1) {
            localCart[index].amount = product.amount;
            localCart[index].sum = updatedProduct.salePrice * product.amount;
          } else {
            const priceAfterDiscount =
              updatedProduct.salePrice -
              (updatedProduct.salePrice * updatedProduct.discountPercentage) /
                100;
            const newItem = {
              product: updatedProduct,
              sum: priceAfterDiscount * product.amount,
              amount: product.amount,
            };
            newLocalCart.push(newItem);
          }
        })
    );
  });
  await Promise.all(promises);
  newLocalCart.forEach((val) => {
    sumAndAmount.amount += val.amount;
    sumAndAmount.sum += val.sum;
  });
  return { newLocalCart: [...newLocalCart], sumAndAmount };
};
