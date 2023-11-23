import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setThemeMode } from "../../themes/themeModeSlice";
import { HeaderNav } from "./HeaderNav";
import Cart from "../../cart/components/Cart";
import HeaderSignInButton from "./HeaderSignInButton";

const pages = ["Home", "Categories", "Products"];

const Header = () => {
  const navigate = useNavigate();
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();

  const handleNavigateHome = () => {
    navigate("/home");
  };

  const handleThemeModeToggle = () => {
    dispatch(setThemeMode(!themeMode));
  };

  return (
    <AppBar position="fixed" sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" onClick={handleNavigateHome}>
              <HomeIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={handleNavigateHome}
              sx={{
                ml: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              David & Teddy's class
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <HeaderNav pages={pages} />
          </Box>
          <Box
            sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
          >
            <HeaderSignInButton />
            <IconButton
              onClick={handleThemeModeToggle}
              color="inherit"
              sx={{ ml: 1 }}
            >
              {themeMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            <Cart />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
