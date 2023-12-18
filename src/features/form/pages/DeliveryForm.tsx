import useForm from "../hooks/useForm";
import { FieldValues } from "react-hook-form";
import deliveryValidation from "../models/deliveryValidation";
import DisplayFormContext from "../components/DisplayForm";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { formStyle } from "../styles/formStyle";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setOpen } from "../../cart/cartSlice";
const DeliveryForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const orderType = useAppSelector((state) => state.order.orderType);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const total = useAppSelector((state) => state.order.total);
  const onSubmit = async (values: FieldValues) => {
    const newOrder = {
      email: values.email,
      price: total.toString(),
      cartItems,
      shippingDetails: {
        address: values.address,
        contactNumber: values.contactNumber,
        orderType,
      },
    };
    console.log(newOrder);
    navigate(`/store/home`);
    dispatch(setOpen(true));
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm(deliveryValidation, onSubmit);
  const formValues = ["address", "contactNumber", "email", "note"];
  return (
    <Box sx={formStyle}>
      <CssBaseline /> <Typography>Your details</Typography>
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
