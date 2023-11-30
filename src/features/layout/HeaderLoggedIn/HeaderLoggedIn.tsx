import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import HeaderLogo from "./HeaderLogo";

const HeaderLoggedIn = () => {
  return (
    <AppBar position="fixed" style={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderLogo />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderLoggedIn;
