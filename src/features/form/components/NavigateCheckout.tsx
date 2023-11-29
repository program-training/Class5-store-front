import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { checkCart } from "../../../order/utils/utils";
import WaitingComponent from "./WaitingComponent";
import { localCheckCartType } from "../../cart/types/types";
import CheckExist from "../../cart/components/CheckModal";
import { Box, Modal } from "@mui/material";
import { styleModalCheck } from "../../layout/war/styleModal";
import DeliveryForm from "../pages/DeliveryForm";
const NavigateCheckout = () => {
  const cart = useAppSelector((store) => store.cart.cart);
  const [localCheckCart, setCheckCart] = useState<localCheckCartType | null>(
    null
  );
  const [openMissing, setOpenMissing] = useState(false);

  useEffect(() => {
    checkCart(cart)
      .then((res) => {
        setTimeout(() => {
          setCheckCart(res);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (localCheckCart?.notInStock.length) setOpenMissing(true);
  }, [localCheckCart]);

  if (!localCheckCart) return <WaitingComponent />;
  return (
    <Box>
      <Modal open={openMissing}>
        <Box sx={styleModalCheck}>
          <CheckExist
            products={localCheckCart.notInStock}
            setModal={setOpenMissing}
          />
        </Box>
      </Modal>
      !localCheckCart.notInStock && <DeliveryForm />
    </Box>
  );
};

export default NavigateCheckout;
