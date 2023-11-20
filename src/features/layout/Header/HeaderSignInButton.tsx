import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeaderSignInButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      color="inherit"
      onClick={() => {
        navigate("/signin");
      }}
      sx={{ marginLeft: "auto" }}
    >
      Sign In
    </Button>
  );
};

export default HeaderSignInButton;
