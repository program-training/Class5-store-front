import { FieldValues } from "react-hook-form";
import { CartItemFromClientInterface } from "../../../order/interfaces/CartItemsInterfaces";
import { productInCart } from "../../../order/types/types";
import axios from "axios";
import { checkCart } from "../../../order/utils/utils";
import { ResultCalculation } from "./ResultCalculation";
import { jwtDecode } from "jwt-decode";
import { TokenType } from "../../layout/types/token";
import { BASE_URL } from "../../../App";
export const convertToCartItem = (
  cart: productInCart[]
): CartItemFromClientInterface[] => {
  return cart.map((item) => {
    return {
      productId: item.productId,
      description: item.description,
      name: item.name,
      salePrice: item.salePrice.toString(),
      quantity: item.requiredQuantity,
    };
  });
};

export const convertToCartItemShipping = (
  cart: CartItemFromClientInterface[],
  details: FieldValues,
  sum: number,
  userId: string
) => {
  const shippingDetails = {
    address: details.address,
    contactNumber: details.contactNumber,
    userId: userId,
    orderType: "standard",
  };
  const orderFromClint = {
    cartItems: cart,
    email: details.email,
    price: sum,
    shippingDetails: shippingDetails,
  };
  return orderFromClint;
};

export const onSubmitHelper = async (
  cart: productInCart[],
  values: FieldValues,
  sum: number
) => {
  try {
    const { email } = values;
    const { data } = await axios.post(`${BASE_URL}/api/users/user`, {
      email,
    });

    const decodedToken = jwtDecode(data) as TokenType;
    console.log(decodedToken);
    const checkCartRes = await checkCart(cart);
    if (checkCartRes.notInStock.length) {
      const updatedNotInStock = await ResultCalculation(
        checkCartRes.notInStock
      );
      return updatedNotInStock;
    }
    const converted = convertToCartItem(cart);
    const deliveryFormToSend = convertToCartItemShipping(
      converted,
      values,
      sum,
      decodedToken._id
    );
    console.log(deliveryFormToSend);

    const order = await axios.post(
      "http://localhost:3000/api/orders",
      deliveryFormToSend
    );
    return order.data;
  } catch (error) {
    console.log(error);
  }
};
