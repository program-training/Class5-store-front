// import axios, { AxiosResponse } from "axios";
import { productInCart } from "../../../order/types/types";
import { ProductsCardInterface } from "../../products/interfaces/ProductCardInterface";
// import { BASE_URL } from "../../../App";

export const handelCart = (
  newItem: ProductsCardInterface,
  cart: productInCart[]
): productInCart[] => {
  if (!cart.length)
    return [
      {
        product: newItem,
        requiredQuantity: 1,
        sumProductInCart: +newItem.salePrice,
      },
    ];
  const index = cart.findIndex((i) => i.product.id === newItem.id);
  if (index !== -1) {
    cart[index].requiredQuantity += 1;
  } else {
    cart.push({
      product: newItem,
      requiredQuantity: 1,
      sumProductInCart: +newItem.salePrice,
    });
  }
  return [...cart];
};

export const handelAddOne = (id: number, cart: productInCart[]) => {
  const index = cart.findIndex((i) => i.product.id === id);
  cart[index].requiredQuantity += 1;
  const priceAfterDiscount =
    +cart[index].product.salePrice -
    (+cart[index].product.salePrice * cart[index].product.discountPercentage) /
      100;
  cart[index].sumProductInCart += priceAfterDiscount;
  return [...cart];
};

export const handelSubOne = (
  id: number,
  cart: productInCart[],
  amountToRemove?: number
) => {
  const index = cart.findIndex((i) => i.product.id === id);
  if (cart[index].requiredQuantity === 1) {
    const newCart = cart.filter((i) => i.product.id !== id);
    return [...newCart];
  } else {
    cart[index].requiredQuantity -= 1;
    let priceAfterDiscount =
      +cart[index].product.salePrice -
      (+cart[index].product.salePrice *
        cart[index].product.discountPercentage) /
        100;
    amountToRemove
      ? (priceAfterDiscount *= amountToRemove)
      : (priceAfterDiscount *= 1);
    cart[index].sumProductInCart -= priceAfterDiscount;
    return [...cart];
  }
};

export const removeItemFromCart = (id: number, cart: productInCart[]) => {
  const newCart = cart.filter((i) => i.product.id !== id);
  return [...newCart];
};

// export const addToLocalStorage = ({
//   productId,
//   name,
//   description,
//   quantity,
//   salePrice,
// }: CartItemFromClientInterface) => {};

// export const sumCartItem = async (
//   localCart: LocalCartType[],
//   cart: productInCart[]
// ) => {
//   const newLocalCart: LocalCartType[] = [];
//   const sumAndAmount = { sum: 0, amount: 0 };
//   const promises: Promise<AxiosResponse | void>[] = [];
//   cart.forEach((product) => {
//     return promises.push(
//       axios
//         .get(`${BASE_URL}/api/products/${product.product.id}`)
//         .then((newProduct) => {
//           const updatedProduct = newProduct.data;
//           const index = newLocalCart.findIndex(
//             (item) => item.product.id === updatedProduct.id
//           );
//           if (index !== -1) {
//             localCart[index].requiredQuantity = product.requiredQuantity;
//             localCart[index].sum =
//               +product.product.salePrice * product.requiredQuantity;
//           } else {
//             const priceAfterDiscount =
//               +product.product.salePrice -
//               (+product.product.salePrice * updatedProduct.discountPercentage) /
//                 100;
//             const newItem = {
//               product: updatedProduct,
//               sum: priceAfterDiscount * product.requiredQuantity,
//               requiredQuantity: product.requiredQuantity,
//             };
//             newLocalCart.push(newItem);
//           }
//         })
//     );
//   });
//   await Promise.all(promises);
//   newLocalCart.forEach((val) => {
//     sumAndAmount.amount += val.requiredQuantity;
//     sumAndAmount.sum += val.sum;
//   });
//   return { newLocalCart: [...newLocalCart], sumAndAmount };
// };

export const countAmount = (cart: productInCart[]) => {
  let amount = 0;
  cart.forEach((product) => {
    amount += product.requiredQuantity;
  });
  return amount;
};

export const sumCart = (cart: productInCart[]) => {
  let sum = 0;
  cart.forEach((product) => {
    sum += product.sumProductInCart;
  });
  return sum;
};
