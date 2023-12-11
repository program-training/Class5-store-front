import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../form/services/localStorageService";

const HeaderLogOutButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      color="inherit"
      onClick={() => {
        navigate("/store/");
        removeToken();
      }}
      sx={{ marginLeft: "auto" }}
    >
      Logout
    </Button>
  );
};

export default HeaderLogOutButton;
