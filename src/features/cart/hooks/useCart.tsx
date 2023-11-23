import { useAppSelector } from "../../../store/hooks";

const useCart = () => {
  const productsInCart = useAppSelector((state) => state.cart.cart);
  return productsInCart;
};

export default useCart;
