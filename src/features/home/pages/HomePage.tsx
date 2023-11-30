import { Box, Container, CssBaseline } from "@mui/material";
import ProductsPage from "../../products/pages/ProductsPage";
import Banner from "../../banners/Banner";
import { useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";
const HomePage = () => {
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
  }, [ides, sale]);

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
          <Banner id={6} />
        </Box>
        <Box
          sx={{
            position: "fixed",
            top: "100px",
            left: "20px",
          }}
        >
          <Banner id={6} />
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
