import { useAppSelector } from "../../../store/hooks";

export const useCart = () => {
  const productsInCart = useAppSelector((state) => state.cart.cart);
  return productsInCart;
};
