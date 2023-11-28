import { Box, Container } from "@mui/material";
import ProductsPage from "../../products/pages/ProductsPage";
import Banner from "../../baners/Banner";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
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
    }, 10000);
  }, [ides]);
  return (
    <>
      <Container>
        <Box
          sx={{
            position: "fixed",
            top: "100px",
            right: "20px",
          }}
        >
          <Banner id={ides[0] || sale[0]} />
        </Box>
        <Box
          sx={{
            position: "fixed",
            top: "100px",
            left: "20px",
          }}
        >
          <Banner id={ides[1] || sale[2]} />
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
