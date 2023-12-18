import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const useRedux = () => {
  const dispatch = useDispatch();
  return {
    cartItems: useSelector((store) => store.cart.cartItems),
  };
};
export default useRedux;
