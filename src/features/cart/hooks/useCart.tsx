import { useAppSelector } from "../../../store/hooks";

export const useCart = () => {
  const productsInCart = useAppSelector((state) => state.cart.cart);
  return productsInCart;
};

export const useIcon = () => {
  const iconButton = useAppSelector((store) => store.cart.iconButton);
  return [iconButton];
};

export const useCartState = () => {
  const state = useAppSelector((store) => store.cart);
  return [state.cart, state.iconButton];
};
