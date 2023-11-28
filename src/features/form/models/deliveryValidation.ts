import * as yup from "yup";

const deliveryValidation = yup.object({
  email: yup.string().email("invalid email").required("email is required"),
  contactNumber: yup
    .string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
});

export default deliveryValidation