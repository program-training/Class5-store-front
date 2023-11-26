import { Box, Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
// import { useNavigate } from "react-router-dom";
import DeliveryFrom from "../../Deliveryform/components/DeliveryFrom";
import { useState } from "react";

const Checkout = () => {
  // const navigate = useNavigate();
  const [openDeliveryFrom, setOpenDeliveryFrom] = useState(false);

  // const handleCheckout = () => {
  //   <DeliveryFrom open={openDeliveryFrom} onClose={handleCloseDeliveryFrom} />;
  //   navigate("/checkout-page");
  // };

  const handleClickOpenDeliveryFrom = () => {
    setOpenDeliveryFrom(true);
  };
  const handleCloseDeliveryFrom = () => {
    setOpenDeliveryFrom(false);
  };

  return (
    <Box>
      <Button
        fullWidth
        variant="contained"
        sx={{ mb: 1 }}
        onClick={handleClickOpenDeliveryFrom}
      >
        <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> Checkout
      </Button>
      <DeliveryFrom open={openDeliveryFrom} onClose={handleCloseDeliveryFrom} />
    </Box>
  );
};

export default Checkout;
