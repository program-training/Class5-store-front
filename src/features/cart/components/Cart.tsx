import {
  SwipeableDrawer,
  Button,
  Box,
  Badge,
  List,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import Checkout from "./Checkout";
import { countAmount, sumCart } from "../utils/functions";
import ProductInCart from "./ProductInCart";
import EmptyCart from "./EmptyCart";
import useRedux from "../../../store/useStore";
import { useAppDispatch } from "../../../store/hooks";
import { setTotal } from "../../../order/orderSlice";
const Cart = () => {
  const { cartItems } = useRedux();
  const [openCart, setOpenCart] = useState(false);
  const [amount, setAmount] = useState(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setAmount(countAmount(cartItems));
    dispatch(setTotal(sumCart(cartItems)));
  }, [cartItems]);

  const toggleOpenCart =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") return;
      setOpenCart(open);
    };

  return (
    <Box>
      <Box
        component={Button}
        onClick={() => setOpenCart(true)}
        variant="outlined"
      >
        <Badge badgeContent={amount} color="primary">
          <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
        </Badge>
      </Box>
      <SwipeableDrawer
        open={openCart}
        onClose={toggleOpenCart(false)}
        onOpen={toggleOpenCart(true)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!cartItems.length ? (
          <EmptyCart />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: 350 }} role="presentation">
              {cartItems.map((productOnCart) => (
                <React.Fragment key={productOnCart.product.name}>
                  <List>
                    <ProductInCart productCart={productOnCart} />
                  </List>
                  <Divider />
                </React.Fragment>
              ))}
            </Box>
            <Box sx={{ marginTop: 35 }}>
              <Checkout setOpen={setOpenCart} />
            </Box>
          </Box>
        )}
      </SwipeableDrawer>
    </Box>
  );
};
export default Cart;
