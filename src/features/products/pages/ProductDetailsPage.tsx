import ProductDetailsCard from "../components/ProductDetails/ProductDetailsCard";
import { useNavigate, useParams } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { ProductsCardInterface } from "../interfaces/ProductCardInterface";
import Banner from "../../banners/Banner";
import SpinnerComponent from "../../form/components/WaitingComponent";
// import useFetch from "../../hooks/useFetch";
import NotFoundError from "../../router/NotFoundError";
// import { BASE_URL } from "../../../App";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { QUERY_PRODUCT } from "../../../services/apollo/queries";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  // const [pending, error, product] = useFetch<ProductsCardInterface>(
  //   `${BASE_URL}/products/${productId}`
  // );
  const { loading, error, data } = useQuery(QUERY_PRODUCT, {
    variables: {
      getProductId: productId,
    },
  });
  const [product, setProduct] = useState<ProductsCardInterface>();

  useEffect(() => {
    if (data) setProduct(data.getProduct);
  }, [data]);
  if (loading) return <SpinnerComponent />;
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
