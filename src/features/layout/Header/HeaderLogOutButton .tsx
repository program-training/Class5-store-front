import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../form/services/localStorageService";
import { setDecodedToken } from "../../token/tokenSlice";
import { useAppDispatch } from "../../../store/hooks";

const HeaderLogOutButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Button
      color="inherit"
      onClick={() => {
        navigate("/store/home");
        removeToken();
        dispatch(setDecodedToken(null));
      }}
      sx={{ marginLeft: "auto" }}
    >
      Logout
    </Button>
  );
};

export default HeaderLogOutButton;
