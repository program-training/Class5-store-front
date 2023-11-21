import { Box, Container, CssBaseline, Typography } from "@mui/material";
import ProductsPage from "../../products/pages/ProductsPage";
const HomePage = () => {
  return (
    <>
      <Container>
        <CssBaseline />
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
            maxWidth: "700px",
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
