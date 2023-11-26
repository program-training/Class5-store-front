import { Box, Container, Typography } from "@mui/material";
import ProductsPage from "../../products/pages/ProductsPage";
import Banner from "../../baners/Banner";
const HomePage = () => {
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
          <Banner />
        </Box>
        <Box
          sx={{
            position: "fixed",
            top: "100px",
            left: "20px",
          }}
        >
          <Banner />
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
