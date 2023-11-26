import "./App.css";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import Footer from "./features/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { Box, Container, CssBaseline } from "@mui/material";
import { pullFromLocalStorage } from "./features/cart/cartSlice";
import Hostages from "./features/layout/war/Hostages";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();
  dispatch(pullFromLocalStorage());

  return (
    <>
      <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <Container>
          <CssBaseline />
          <Header />
          <Box flexGrow={1}>
            <Hostages />
            <RouterDOM />
          </Box>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
