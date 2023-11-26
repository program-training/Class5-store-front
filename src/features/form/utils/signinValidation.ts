import * as yup from "yup"

const signinValidation = yup.object({
  email: yup.string().email("invalid email").required("email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/,
      "password must contain 8 characters one uppercase one lowercase and one special case character"
    )
    .required("Password is required")
});

export default signinValidation;
