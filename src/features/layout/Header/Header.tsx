import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AdbIcon from "@mui/icons-material/Adb";
import { Typography, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cart from "../../cart/components/Cart";
import HeaderSignInButton from "./HeaderSignInButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setThemeMode } from "../../themes/themeModeSlice";
import ShowOrdersHistory from "../HeaderLoggedIn/ShowOrdersHistory";
import HeaderLogOutButton from "./HeaderLogOutButton ";
import { setDecodedToken } from "../../token/tokenSlice";
import { jwtDecode } from "jwt-decode";
import { TokenType } from "../types/token";
import { useEffect } from "react";
import GridButton from "./GridButton";

const Header = () => {
  const navigate = useNavigate();
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const { decodedToken } = useAppSelector((store) => store.token);
  const { token } = useAppSelector((store) => store.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (token) {
      dispatch(setDecodedToken(jwtDecode(token) as TokenType));
    } else {
      dispatch(setDecodedToken(null));
    }
  }, [token]);
  return (
    <AppBar position="fixed" sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex" }}>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            {decodedToken && <ShowOrdersHistory />}
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => {
                navigate("/store/home");
              }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
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
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          ></Box>
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            {decodedToken === null ? (
              <HeaderSignInButton />
            ) : (
              <HeaderLogOutButton />
            )}
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                dispatch(setThemeMode(!themeMode));
              }}
              color="inherit"
            >
              {themeMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            <GridButton />
            <Cart />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
