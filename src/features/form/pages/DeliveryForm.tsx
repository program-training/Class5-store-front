import useForm from "../hooks/useForm";
import { FieldValues } from "react-hook-form";
import deliveryValidation from "../models/deliveryValidation";
import DisplayFormContext from "../components/DisplayForm";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { formStyle } from "../styles/formStyle";
import axios from "axios";
import { useAppSelector } from "../../../store/hooks";
import {
  convertToCartItem,
  convertToCartItemShipping,
} from "../utils/convertToCartItem";
type DeliveryFormProps = {
  sum: number;
};
const DeliveryForm = ({ sum }: DeliveryFormProps) => {
  const cart = useAppSelector((store) => store.cart.cart);
  const onSubmit = async (values: FieldValues) => {
    try {
      const { email } = values;
      const { data } = await axios.post(
        "http://localhost:3000/api/users/user",
        {
          email,
        }
      );
      const converted = convertToCartItem(cart);
      const deliveryFormToSend = convertToCartItemShipping(
        converted,
        values,
        sum,
        data.id
      );
      const order = await axios.post(
        "http://localhost:3000/api/orders",
        deliveryFormToSend
      );
      console.log(order.data);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm(deliveryValidation, onSubmit);
  const formValues = ["address", "contactNumber", "email", "note"];
  return (
    <Box sx={formStyle}>
      <CssBaseline />
      <Typography>Your details</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ width: "100%", mt: "2rem" }}
      >
        <DisplayFormContext
          control={control}
          errors={errors}
          formValues={formValues}
        />
        <Button
          disabled={!isValid || !isDirty}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
};

export default DeliveryForm;
