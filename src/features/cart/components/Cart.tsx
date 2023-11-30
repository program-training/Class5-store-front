import {
  SwipeableDrawer,
  Button,
  Box,
  Typography,
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
import { productInCart } from "../../../order/types/types";
import { useCart } from "../hooks/useCart";
const Cart = () => {
  const cart = useCart();
  const [open, setOpen] = useState(false);
  const [localCart, setLocalCart] = useState<productInCart[]>([]);
  const [amount, setAmount] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setLocalCart(cart);
  }, [open, cart]);

  useEffect(() => {
    setAmount(countAmount(cart));
    setSum(sumCart(cart));
  }, [cart]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") return;
      setOpen(open);
    };
  return (
    <Box>
      <Box component={Button} onClick={() => setOpen(true)} variant="outlined">
        <Badge badgeContent={amount} color="primary">
          <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
        </Badge>
      </Box>
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!cart.length ? (
          <EmptyCart />
        ) : (
          <>
            <Box sx={{ width: 260 }} role="presentation">
              <Typography variant="h5">
                Total cost: {sum.toFixed(2)}$
              </Typography>
              {localCart.map((productOnCart) => (
                <React.Fragment key={productOnCart.product.name}>
                  <List>
                    <ProductInCart productCart={productOnCart} />
                  </List>
                  <Divider />
                </React.Fragment>
              ))}
            </Box>
            <Checkout sum={sum} setOpen={setOpen} />
          </>
        )}
      </SwipeableDrawer>
    </Box>
  );
};
export default Cart;
