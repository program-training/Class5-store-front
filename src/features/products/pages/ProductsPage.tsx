import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setBySale } from "../productsSlice";
import SpinnerComponent from "../../form/components/WaitingComponent";
import NotFoundPage from "../../layout/NotFoundPage/NotFoundPage";
import getAllProducts from "../services/getAllProducts";
import { TokenType } from "../../layout/types/token";
import { jwtDecode } from "jwt-decode";
import { setDecodedToken } from "../../token/tokenSlice";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { error, pending, products } = useAppSelector(
    (store) => store.products
  );
  const { token } = useAppSelector((store) => store.users);
  // const { decodedToken } = useAppSelector((store) => store.token);

  useEffect(() => {
    dispatch(getAllProducts());
    if (products) {
      const sale = products
        .filter((item) => item.discountPercentage > 0)
        .map((item) => item.id);
      dispatch(setBySale(sale));
    }
  }, [products]);
  useEffect(() => {
    if (token) {
      dispatch(setDecodedToken(jwtDecode(token) as TokenType));
    } else {
      dispatch(setDecodedToken(null));
    }
  }, [token]);

  if (pending) return <SpinnerComponent />;
  if (error) return <NotFoundPage />;
  // if (products) console.log(products);

  return (
    <>
      {/* {!decodedToken && (
        <Typography sx={{ textAlign: "center", mt: "300px" }}>
          login to enter store
        </Typography>
      )} */}

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
