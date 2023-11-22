import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useState } from "react";
import DeliveryFrom from "../../Deliveryform/components/DeliveryFrom";

const Checkout = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        sx={{ mb: 1 }}
        onClick={handleClickOpen}
      >
        <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> Checkout
      </Button>
      <DeliveryFrom open={open} onClose={handleClose} />
    </>
  );
};
export default Checkout;
