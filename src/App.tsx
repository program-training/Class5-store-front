import "./App.css";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import Footer from "./features/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { Box, Container } from "@mui/material";
import { pullFromLocalStorage } from "./features/cart/cartSlice";

export const BASE_URL = import meta.env.VITE_BASE_URL || "http://localhost:3000";
export const BNR_URL = import meta.env.VITE_BNR_URL || "https://sparkly-souffle-e37dff.netlify.app";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();
  dispatch(pullFromLocalStorage());

  return (
    <>
      <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Header />
          <Box
            className="product-grid"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "90%",
              justifyContent: "center",
            }}
          >
            <RouterDOM />
          </Box>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
