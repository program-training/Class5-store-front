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
import { countAmount, sumCartItem } from "../utils/functions";
import ProductInCart from "./ProductInCart";
import EmptyCart from "./EmptyCart";
import { LocalCartType } from "../../../order/types/types";
import { useCart, useIcon } from "../hooks/useCart";
const Cart = () => {
  const cart = useCart();
  const [iconOpen] = useIcon();
  const [open, setOpen] = useState(false);
  const [localCart, setLocalCart] = useState<LocalCartType[]>([]);
  const [amount, setAmount] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (!open) return;
    setTimeout(() => {
      sumCartItem(localCart, cart).then((res) => {
        setLocalCart(res.newLocalCart);
        setSum(res.sumAndAmount.sum);
      });
    }, 1000);
  }, [open, cart]);

  useEffect(() => {
    setAmount(countAmount(cart));
  }, [cart]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") return;
      setOpen(open);
    };
  return (
    <Box>
      <Box
        component={Button}
        onClick={() => setOpen(true)}
        variant="outlined"
        disabled={iconOpen === false}
      >
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
