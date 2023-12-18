import { ResultCalculation } from "../form/utils/ResultCalculation";
import {
  convertToCartItem,
  convertToCartItemShipping,
} from "../form/utils/convertToCartItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { FieldValues } from "react-hook-form";
import checkProductsInStock from "../products/services/checkProductsInStock";
import registerOrder from "../../order/services/registerOrder";

const useGraphql = () => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((store) => store.cart.cartItems);
  const checkProducts = useAppSelector(
    (store) => store.products.availabilityStatusProductsStock
  );
  const dataRegisterOrder = useAppSelector(
    (store) => store.order.registerOrder
  );

  const onSubmitHelper = async (values: FieldValues, sum: number) => {
    try {
      const checkCart = cartList.map((item) => {
        return {
          productId: item.product.id,
          requiredQuantity: item.requiredQuantity,
        };
      });
      dispatch(checkProductsInStock(checkCart));
      console.log(checkProducts);

      if (checkProducts && checkProducts.notInStock.length) {
        const updatedNotInStock = ResultCalculation(checkProducts.notInStock);
        return updatedNotInStock;
      }
      const converted = convertToCartItem(cartList);
      const deliveryFormToSend = convertToCartItemShipping(
        converted,
        values,
        sum
      );

      dispatch(registerOrder(deliveryFormToSend));
      return dataRegisterOrder;
    } catch (error) {
      console.log(error);
    }
  };
  return { onSubmitHelper };
};
export default useGraphql;
