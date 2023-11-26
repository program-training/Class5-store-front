import { Box, Container, Typography } from "@mui/material";
import ProductsPage from "../../products/pages/ProductsPage";
import Banner from "../../banners/Banner";
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
        <Typography
          variant="h3"
          sx={{
            marginTop: "60px",
            marginBottom: "10px",
          }}
        ></Typography>

        <Box
          sx={{
            display: "flex",
            marginBottom: "60px",
            marginTop: "10px",
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