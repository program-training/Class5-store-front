import { jwtDecode } from "jwt-decode";
import { ResultCalculation } from "../form/utils/ResultCalculation";
import {
  convertToCartItem,
  convertToCartItemShipping,
} from "../form/utils/convertToCartItem";
import axios from "axios";
import { BASE_URL } from "../../App";
import { TokenType } from "../layout/types/token";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { FieldValues } from "react-hook-form";
import checkProductsInStock from "../products/services/checkProductsInStock";

const useGraphql = () => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((store) => store.cart.cart);
  const { checkProducts } = useAppSelector((store) => store.products);
  const onSubmitHelper = async (values: FieldValues, sum: number) => {
    try {
      const { email } = values;
      const { data } = await axios.post(`${BASE_URL}/users/user`, {
        email,
      });
      localStorage.setItem("token", data);
      const decodedToken = jwtDecode(data) as TokenType;
      console.log(decodedToken);

      const checkCart = cartList.map((item) => {
        return {
          productId: item.product.id,
          requiredQuantity: item.requiredQuantity,
        };
      });
      dispatch(checkProductsInStock(checkCart));
      const checkCartRes = checkProducts;
      console.log(checkCartRes);

      if (checkCartRes?.notInStock.length) {
        const updatedNotInStock = ResultCalculation(checkCartRes.notInStock);
        return updatedNotInStock;
      }
      const converted = convertToCartItem(cartList);
      const deliveryFormToSend = convertToCartItemShipping(
        converted,
        values,
        sum,
        decodedToken._id
      );
      console.log(deliveryFormToSend);

      const order = await axios.post(`${BASE_URL}/orders`, deliveryFormToSend);
      return order.data;
    } catch (error) {
      console.log(error);
    }
  };
  return { onSubmitHelper };
};
export default useGraphql;
