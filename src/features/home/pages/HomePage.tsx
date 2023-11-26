import { Box, Container, CssBaseline, Modal, Typography } from "@mui/material";
import ProductsPage from "../../products/pages/ProductsPage";
import { useEffect, useState } from "react";
import { styleModal } from "../../layout/war/styleModal";
import CenteredMessage from "../../layout/war/Massage";
const HomePage = () => {
  const [open, setOPen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOPen(true);
    }, 2000);
  }, []);
  return (
    <>
      <Modal open={open}>
        <Box sx={styleModal}>
          <CenteredMessage setModal={setOPen} />
        </Box>
      </Modal>
      <Container>
        {/* <CssBaseline /> */}
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
