import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Box, CssBaseline, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setBySale } from "../productsSlice";
import SpinnerComponent from "../../form/components/WaitingComponent";
import NotFoundPage from "../../layout/NotFoundPage/NotFoundPage";
import getAllProducts from "../services/getAllProducts";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { error, pending, products } = useAppSelector(
    (store) => store.products
  );

  useEffect(() => {
    dispatch(getAllProducts());
    if (products) {
      const sale = products
        .filter((item) => item.discountPercentage > 0)
        .map((item) => item.id);
      dispatch(setBySale(sale));
    }
  }, [products]);

  if (pending) return <SpinnerComponent />;
  if (error) return <NotFoundPage />;
  // if (products) console.log(products);

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
        {products?.length &&
          products.map((product, i) => (
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
