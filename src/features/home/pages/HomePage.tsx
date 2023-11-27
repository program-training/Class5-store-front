import { Box, Container, CssBaseline, Modal, Typography } from "@mui/material";
import ProductsPage from "../../products/pages/ProductsPage";
import Banner from "../../baners/Banner";
const HomePage = () => {
  return (
    <>
      <Container>
        {/* <CssBaseline /> */}
        <Typography
          variant="h3"
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