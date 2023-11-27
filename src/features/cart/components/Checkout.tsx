import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router";
// import { useAppSelector } from "../../../store/hooks";
// import { checkCart } from "../utils/checkCart";

const Checkout = () => {
  // const cart = useAppSelector((store) => store.cart.cart);
  // const [openMissing, setOpenMissing] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        sx={{ mb: 1 }}
        onClick={() => navigate("/delivery")}
      >
        <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> Checkout
      </Button>
    </>
  );
};
export default Checkout;
