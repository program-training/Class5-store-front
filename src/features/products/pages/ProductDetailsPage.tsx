import ProductDetailsCard from "../components/ProductDetails/ProductDetailsCard";
import { useNavigate, useParams } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { ProductsCardInterface } from "../interfaces/ProductCardInterface";
import Banner from "../../banners/Banner";
import SpinnerComponent from "../../form/components/WaitingComponent";
import useFetch from "../../hooks/useFetch";
import NotFoundError from "../../router/NotFoundError";
import { BASE_URL } from "../../../App";
const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [pending, error, product] = useFetch<ProductsCardInterface>(
    `${BASE_URL}/products/${productId}`
  );

  if (pending) return <SpinnerComponent />;
  if (!product) return <NotFoundError message="product in not found" />;
  if (error) navigate("/store/notFound");
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          top: "100px",
          right: "20px",
        }}
      >
        <Banner id={24} />
      </Box>
      <ProductDetailsCard product={product} />;
    </>
  );
};
export default ProductDetailsPage;
