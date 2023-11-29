import { Box, Container, CssBaseline } from "@mui/material";
import ProductsPage from "../../products/pages/ProductsPage";
import Banner from "../../banners/Banner";
import { useCart } from "../../cart/hooks/useCart";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setIconDisabled } from "../../cart/cartSlice";
import { useEffect, useState } from "react";
const HomePage = () => {
  const dispatch = useAppDispatch();
  const cart = useCart();
  cart.length ? dispatch(setIconDisabled(true)) : false;
  const sale = useAppSelector((store) => store.products.productsBySale);
  const [ides, setIdes] = useState<number[]>([]);
  useEffect(() => {
    setTimeout(() => {
      function getTwoRandomIndexes(array: number[]) {
        const indexes: number[] = [];
        while (indexes.length < 2) {
          const randomIndex = Math.floor(Math.random() * array.length);
          if (!indexes.includes(randomIndex)) {
            indexes.push(sale[randomIndex]);
          }
        }
        return indexes;
      }
      setIdes(getTwoRandomIndexes(sale));
    }, 150000);
  }, [ides]);
  return (
    <>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            position: "fixed",
            top: "100px",
            right: "20px",
          }}
        >
          <Banner id={ides[0] || sale[5]} />
        </Box>
        <Box
          sx={{
            position: "fixed",
            top: "100px",
            left: "20px",
          }}
        >
          <Banner id={ides[0] || sale[7]} />
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "70px",
            marginTop: "60px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProductsPage />
        </Box>
      </Container>
    </>
  );
};
export default HomePage;
