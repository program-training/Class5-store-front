import {
  TextField,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import {
  emailValidet,
  houseValidet,
  idValidet,
  middelName,
  nameValidet,
  phoneValidet,
} from "../../products/helpers/validation";
import { FieldValues, useForm } from "react-hook-form";
import phonePrefixes from "../helpers/prefixs";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import { FC, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { useAppSelector } from "../../../store/hooks";
import { clearCart } from "../../cart/cartSlice";
import axios from "axios";
import { OrderFromClientInterface } from "../../orderDetails/interfaces/OrderDetailsInterface";
import {
  getProductInStockAndNotInStock,
  productToCheck,
} from "../helpers/helpers";
import ProductNotInStock from "./ProductNotInstockDialog";

type PropType = {
  onBuyClick: () => void;
  sum: number;
};

const InputDelivery: FC<PropType> = ({ onBuyClick, sum }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const productsToCheck: productToCheck[] = cart.map((item) => {
    return { requiredQuantity: item.amount, productId: item.product.id };
  });
  let productsNotInStock: string[] = [];
  const productsInCart = cart.map((item) => item.product);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data: FieldValues) => {
    try {
      const { email, contactNumber, address } = data;
      const res = await axios.post("http://localhost:3333/api/users", {
        email,
      });
      const {  notInStock } = getProductInStockAndNotInStock(
        productsInCart,
        productsToCheck
      );
      if (notInStock.length) {
        productsNotInStock = notInStock;
        return setOpen(true);
      }
      const order: OrderFromClientInterface = {
        price: sum,
        products: productsInCart,
        email,
        shippingDetails: { contactNumber, address },
        userId: res.data._id,
      };
      await axios.post("http://localhost:3333/api/orders", { order });
      onBuyClick();
      dispatch(clearCart());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ProductNotInStock
        open={open}
        setOpen={setOpen}
        productIds={productsNotInStock}
      />
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <PersonalDetails
          id={{ idValidet: idValidet, iderrors: errors, idregister: register }}
          name={{
            nameregister: register,
            nameerrors: errors,
            nameValidet: nameValidet,
          }}
          middel={{
            middelregister: register,
            middelerrors: errors,
            middelName: middelName,
          }}
        />
        <Address
          name={{
            nameValidet: nameValidet,
            nameregister: register,
            nameerrors: errors,
          }}
          house={{
            houseregister: register,
            houseerrors: errors,
            houseValidet: houseValidet,
          }}
        />
        <TextField
          margin="normal"
          fullWidth
          variant="standard"
          id="email"
          label="Email Address"
          autoComplete="email"
          autoFocus
          {...register("email", emailValidet)}
          helperText={errors.email?.message?.toString()}
          error={errors.email ? true : false}
        />
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3}>
            <FormControl variant="outlined" required margin="normal">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={phonePrefixes[0]}
              >
                {phonePrefixes.map((num) => (
                  <MenuItem value={num} key={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              margin="normal"
              fullWidth
              variant="standard"
              id="phone"
              label="Phone Number"
              autoComplete="phone"
              autoFocus
              {...register("phone", phoneValidet)}
              helperText={errors.phone?.message?.toString()}
              error={errors.phone ? true : false}
            />
          </Grid>
        </Grid>
        <Grid>
          <TextField
            margin="normal"
            fullWidth
            variant="standard"
            id="note"
            label="Note"
            autoComplete="note"
            autoFocus
          />
        </Grid>
        <Button type="submit" variant="contained" disabled={!isValid}>
          Buy
        </Button>
      </Box>
    </>
  );
};
export default InputDelivery;
