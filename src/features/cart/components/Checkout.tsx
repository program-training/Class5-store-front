import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router";

const Checkout = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/delivery");
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
