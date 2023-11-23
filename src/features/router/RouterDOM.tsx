import { Routes, Route } from "react-router-dom";
import SignInPage from "../users/pages/SignInPage";
import SignUpPage from "../users/pages/SignUpPage";
import HomePage from "../home/pages/HomePage";
import CategoriesPage from "../categories/pages/CategoriesPage";
import ProductsPage from "../products/pages/ProductsPage";
import CategoryPage from "../categories/pages/CategoryPage";
import ProductDetailsPage from "../products/pages/ProductDetailsPage";
import StorePage from "../maps/pages/StorePage";
import NotFoundPage from "../layout/NotFoundPage/NotFoundPage";
import OrderDetails from "../orderDetails/pages/OrderDetails";
import Payment from "../../order/pages/Payment";
import GetUsers from "../users/pages/GetUsers";
import ButtonDelete from "../cart/missingProduct/ButtonDeleteProduct";
const RouterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home/categories" element={<CategoriesPage />} />
      <Route path="/home/categories/:category" element={<CategoryPage />} />
      <Route
        path="/home/categories/category/:productId"
        element={<ProductDetailsPage />}
      />
      <Route path="/home/products" element={<ProductsPage />} />
      <Route path="/home/store/map" element={<StorePage />} />
      <Route path="/order-details/:userId" element={<OrderDetails />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/getUsers" element={<GetUsers />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/missingProduct" element={<ButtonDelete />} />
    </Routes>
  );
};
export default RouterDom;
