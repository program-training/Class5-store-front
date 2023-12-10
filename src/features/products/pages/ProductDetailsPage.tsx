import ProductDetailsCard from "../components/ProductDetails/ProductDetailsCard";
import { useNavigate, useParams } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Banner from "../../banners/Banner";
import SpinnerComponent from "../../form/components/WaitingComponent";
import NotFoundError from "../../router/NotFoundError";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import getProduct from "../services/GetProduct";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, pending, product } = useAppSelector((store) => store.products);

  useEffect(() => {
    dispatch(getProduct(productId as string));
  }, [product]);
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
