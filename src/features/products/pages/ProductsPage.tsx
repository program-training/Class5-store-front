import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Box, CssBaseline, Typography } from "@mui/material";
import { ProductsCardInterface } from "../interfaces/ProductCardInterface";
import { useAppDispatch } from "../../../store/hooks";
import { setBySale } from "../productsSlice";
import SpinnerComponent from "../../form/components/WaitingComponent";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../../App";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [pending, error, products] = useFetch<ProductsCardInterface[]>(
    `${BASE_URL}/products`
  );

  useEffect(() => {
    if (!products) return;
    const sale = products
      .filter((item) => item.discountPercentage > 0)
      .map((item) => item.id);
    dispatch(setBySale(sale));
  }, [products]);

  if (pending) return <SpinnerComponent />;
  if (error) navigate("/store/notFound");
  return (
    <>
      <CssBaseline />
      <Typography
        sx={{ textAlign: "center", marginBottom: "30px" }}
      ></Typography>
      <Box
        className="product-grid"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "90%",
          justifyContent: "center",
        }}
      >
        {products?.map((product, i) => (
          <Box
            key={`${product.name}-${i}`}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "90%",
              justifyContent: "center",
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ProductsPage;
