import { Box, Button, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router";
import { FC } from "react";
import Shipping from "./Shipping";
import { useAppSelector } from "../../../store/hooks";
// import { ShippingType } from "../types/types";
// import { useAppDispatch } from "../../../store/hooks";
// import { setShippingDetails } from "../../../order/orderSlice";

type CheckoutProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Checkout: FC<CheckoutProps> = ({ setOpen }) => {
  const total = useAppSelector((store) => store.order.total);
  // const [shipping, setShipping] = useState<ShippingType>("standard");
  // const dispatch = useAppDispatch();
  // dispatch(setShippingDetails(shipping));

  const navigate = useNavigate();
  const handelClick = () => {
    setOpen(false);
    navigate(`/store/delivery`, { state: total });
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
      <Shipping />
      <Typography variant="h5" sx={{ color: "white", textAlign: "center" }}>
        Total cost: {total.toFixed(2)}$
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
