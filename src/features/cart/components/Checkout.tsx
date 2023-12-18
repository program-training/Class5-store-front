<<<<<<< HEAD
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router";
import { FC } from "react";
// import { useAppDispatch } from "../../../store/hooks";
// import { setOpen as setOpenMessage } from "../cartSlice";

type CheckoutProps = {
  sum: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Checkout: FC<CheckoutProps> = ({ sum, setOpen }) => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handelClick = () => {
    setOpen(false);
    navigate(`/store/delivery`, { state: sum });
    // dispatch(setOpenMessage(true));
  };

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        sx={{ mb: 1 }}
        onClick={handelClick}
      >
        <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> Checkout
      </Button>
    </>
  );
};
export default Checkout;
=======
import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router";
import { FC } from "react";
type CheckoutProps = {
  sum: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Checkout: FC<CheckoutProps> = ({ sum, setOpen }) => {
  const navigate = useNavigate();
  const handelClick = () => {
    setOpen(false);
    navigate(`/store/delivery`, { state: sum });
  };

  return (
    <Box
      sx={{
        color: "black",
        backgroundColor: "#22242d",
        padding: "10px 0",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: 350,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" sx={{ color: "white", textAlign: "center" }}>
        Total cost: {sum.toFixed(2)}$
      </Typography>
      <Button
        fullWidth
        variant="contained"
        sx={{ mb: 1, width: 250 }}
        onClick={handelClick}
      >
        <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> Checkout
      </Button>
    </Box>
  );
};
export default Checkout;
>>>>>>> acc98a17e7c3d9fdbc16a561a0b091def3e2d3d8
