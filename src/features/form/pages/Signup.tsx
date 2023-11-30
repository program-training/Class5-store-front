import { Box, Button, CssBaseline } from "@mui/material";
import useForm from "../hooks/useForm";
import DisplayFormContext from "../components/DisplayForm";
import { FieldValues } from "react-hook-form";
import SignInUpLink from "../components/SignUpLink";
import signupValidation from "../models/signupValidation";
import Icon from "../components/Icon";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { SignUpRequest } from "../services/usersRequests";
import UserInterface from "../../users/interfaces/UserInterface";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values: FieldValues) => {
     const { confirmPassword, ...value } = values;
    dispatch(SignUpRequest(value as UserInterface));
    navigate("/store/signin");
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm(signupValidation, onSubmit);
  const formValues = [
    "email",
    "initialPassword",
    "password",
    "confirmPassword",
  ];

  return (
    <Box
      sx={{
        mt: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "550px",
      }}
    >
      <CssBaseline />
      <Icon text="Signup" />
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "100%", mt: "2rem" }}
      >
        <DisplayFormContext
          control={control}
          errors={errors}
          formValues={formValues}
        />
        <Button
          disabled={!isDirty || !isValid}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
        <SignInUpLink text="signin" />
      </Box>
    </Box>
  );
};

export default SignUp;
