import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useState } from "react";
import DeliveryFrom from "../../Deliveryform/components/DeliveryFrom";

const Checkout = () => {
<<<<<<< HEAD
  const [openDeliveryFrom, setOpenDeliveryFrom] = useState(false);

  const handleClickOpenDeliveryFrom = () => {
    setOpenDeliveryFrom(true);
=======

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
>>>>>>> 22b6e38637ebb2e53198dd19227497ec751a2c37
  };

  const handleCloseDeliveryFrom = () => {
    setOpenDeliveryFrom(false);
  };

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        sx={{ mb: 1 }}
        onClick={handleClickOpenDeliveryFrom}
      >
        <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> Checkout
      </Button>
      <DeliveryFrom open={openDeliveryFrom} onClose={handleCloseDeliveryFrom} />
    </>
  );
};
export default Checkout;
