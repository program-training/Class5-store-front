import axios, { AxiosResponse } from "axios";
import { LocalCartType, productInCart } from "../../../order/types/types";

export const handelCart = (newItemId: number, cart: productInCart[]) => {
  if (!cart.length) return [{ productId: newItemId, requiredQuantity: 1 }];
  const index = cart.findIndex((i) => i.productId === newItemId);
  if (index !== -1) {
    cart[index].requiredQuantity += 1;
  } else {
    cart.push({
      productId: newItemId,
      requiredQuantity: 1,
    });
  }
  return [...cart];
};

export const handelAddOne = (id: number, cart: productInCart[]) => {
  const index = cart.findIndex((i) => i.productId === id);
  cart[index].requiredQuantity += 1;
  return [...cart];
};

export const handelSubOne = (id: number, cart: productInCart[]) => {
  const index = cart.findIndex((i) => i.productId === id);
  if (cart[index].requiredQuantity === 1) {
    const newCart = cart.filter((i) => i.productId !== id);
    return [...newCart];
  } else {
    cart[index].requiredQuantity -= 1;
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
        .get(`http://localhost:3000/api/products/${product.productId}`)
        .then((newProduct) => {
          const updatedProduct = newProduct.data;
          const index = newLocalCart.findIndex(
            (item) => item.product.id === updatedProduct.id
          );
          if (index !== -1) {
            localCart[index].requiredQuantity = product.requiredQuantity;
            localCart[index].sum =
              updatedProduct.salePrice * product.requiredQuantity;
          } else {
            const priceAfterDiscount =
              updatedProduct.salePrice -
              (updatedProduct.salePrice * updatedProduct.discountPercentage) /
                100;
            const newItem = {
              product: updatedProduct,
              sum: priceAfterDiscount * product.requiredQuantity,
              requiredQuantity: product.requiredQuantity,
            };
            newLocalCart.push(newItem);
          }
        })
    );
  });
  await Promise.all(promises);
  newLocalCart.forEach((val) => {
    sumAndAmount.amount += val.requiredQuantity;
    sumAndAmount.sum += val.sum;
  });
  return { newLocalCart: [...newLocalCart], sumAndAmount };
};

export const countAmount = (cart: productInCart[]) => {
  let amount = 0;
  cart.forEach((product) => {
    amount += product.requiredQuantity;
  });
  return amount;
};
