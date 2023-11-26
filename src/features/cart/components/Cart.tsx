import {
  SwipeableDrawer,
  Button,
  Box,
  // Divider,
  // List,
  Typography,
  Badge,
  List,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../../../store/hooks";
import Checkout from "./Checkout";
import { sumCartItem } from "../utils/functions";
import { LocalCartType } from "../types/productInCart";
import ProductInCart from "./ProductInCart";
const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const [open, setOpen] = useState(false);
  const [localCart, setLocalCart] = useState<LocalCartType[]>([]);
  const [amount, setAmount] = useState(0);
  const [sum, setSum] = useState(0);

  // useEffect(() => {
  //   sumCartItem(localCart, cart).then((res) => {
  //     setLocalCart(res.localCart);
  //     sumAndAmount.sum = res.sumAndAmount.sum;
  //     sumAndAmount.amount = res.sumAndAmount.amount;
  //   });
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      sumCartItem(localCart, cart).then((res) => {
        setLocalCart(res.newLocalCart);
        setAmount(res.sumAndAmount.amount);
        setSum(res.sumAndAmount.sum);
      });
    }, 1000);
  }, [cart]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") return;
      setOpen(open);
    };
  return (
    <Box>
      <Box component={Button} onClick={toggleDrawer(true)} variant="outlined">
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
          <Box role="presentation">
            <Typography
              variant="h6"
              align="center"
              sx={{
                fontWeight: "bold",
                color: "",
                mb: 4,
              }}
            >
              Your Cart is Empty
              <Box
                sx={{
                  width: 260,
                  height: 260,
                  backgroundImage: `url("https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png")`,
                  backgroundSize: "cover", // Set the background size
                  backgroundPosition: "center",
                  mb: 4,
                }}
              />
            </Typography>
          </Box>
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
            <Checkout />
          </>
        )}
      </SwipeableDrawer>
    </Box>
  );
};
export default Cart;
