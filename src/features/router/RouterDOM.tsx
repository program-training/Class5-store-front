import { Routes, Route } from "react-router-dom";
// import SignInPage from "../users/pages/SignInPage";
// import SignUpPage from "../users/pages/SignUpPage";
import HomePage from "../home/pages/HomePage";
import ProductsPage from "../products/pages/ProductsPage";
import ProductDetailsPage from "../products/pages/ProductDetailsPage";
import StorePage from "../maps/pages/StorePage";
import NotFoundPage from "../layout/NotFoundPage/NotFoundPage";
import OrderDetails from "../orderDetails/pages/OrderDetails";
import Payment from "../../order/pages/Payment";
import GetUsers from "../users/pages/GetUsers";
import SignIn from "../form/pages/Signin";
import SignUp from "../form/pages/Signup";
import NavigateCheckout from "../form/components/NavigateCheckout";
import DeliveryForm from "../form/pages/DeliveryForm";
const RouterDom = () => {
  return (
    <Routes>
      <Route path="/store" element={<HomePage />} />
      <Route path="/store/home" element={<HomePage />} />
      <Route path="/store/signin" element={<SignIn />} />
      <Route path="/store/signup" element={<SignUp />} />
      <Route
        path="/store/home/products/:productId"
        element={<ProductDetailsPage />}
      />
      <Route path="/store/home/products" element={<ProductsPage />} />
      <Route path="/store/home/store/map" element={<StorePage />} />
      <Route path="/store/order-details/:userId" element={<OrderDetails />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/store/getUsers" element={<GetUsers />} />
      <Route path="/store/payment" element={<Payment />} />
      <Route path="/store/delivery" element={<NavigateCheckout />} />
      <Route path="/store/checkout" element={<NavigateCheckout />} />
    </Routes>
  );
};
export default RouterDom;
