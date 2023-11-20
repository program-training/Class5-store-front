import "./App.css";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import { GetProducts } from "./features/products/utils/GetProducts";
import Footer from "./features/layout/Footer";
import { GetCategories } from "./features/categories/utils/GetCategories";
import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";
import { pullFromLocalStorage } from "./features/cart/cartSlice";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();
  dispatch(pullFromLocalStorage());
  GetProducts();
  GetCategories();
  return (
    <>
      <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <CssBaseline />
        <Header />
        <RouterDOM />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
