import {
  SwipeableDrawer,
  Button,
  Box,
  Divider,
  List,
  Typography,
  Badge,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductInCart from "./ProductInCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../../../store/hooks";
import { productInCart } from "../types/productInCart";
import Checkout from "./Checkout";
const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const [open, setOpen] = useState(false);
  const [localCart, setLocalCart] = useState<productInCart[]>([]);
  const [sumAndAmount, setSumAndAmount] = useState({ sum: 0, amount: 0 });
  useEffect(() => {
    setLocalCart(cart);
    const sumAndAmount2 = { sum: 0, amount: 0 };
    localCart.forEach((element) => {
      sumAndAmount2.sum += element.sum;
      sumAndAmount2.amount += element.amount;
    });
    setSumAndAmount(sumAndAmount2);
  }, [cart, localCart]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") return;
      setOpen(open);
    };

  return (
    <Box>
      <Box component={Button} onClick={toggleDrawer(true)} variant="outlined">
        <Badge badgeContent={sumAndAmount.amount} color="primary">
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
                Total cost: {sumAndAmount.sum}$
              </Typography>
              {localCart.map((productOnCart: productInCart) => (
                <React.Fragment key={productOnCart.product.title}>
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
