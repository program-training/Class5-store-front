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
