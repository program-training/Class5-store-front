import { FieldValues } from "react-hook-form";
import { CartItemFromClientInterface } from "../../../order/interfaces/CartItemsInterfaces";
import { productInCart } from "../../../order/types/types";

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

("nj@gmail.com");
// {
//     email: string;
//     price: number;
//     cartItems: CartItemFromClientInterface[];
//     shippingDetails: ShippingDetailsInterface;
//   }

// export interface ShippingDetailsInterface {
//     address: string;
//     contactNumber: string;
//     userId: string;
//     orderType: "standard" | "express" | "pickup";
//   }
