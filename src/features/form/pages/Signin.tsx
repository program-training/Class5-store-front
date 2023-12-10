import { Box, Button, CssBaseline } from "@mui/material";
import useForm from "../hooks/useForm";
import DisplayFormContext from "../components/DisplayForm";
import { FieldValues } from "react-hook-form";
import SignInUpLink from "../components/SignUpLink";
import signinValidation from "../models/signinValidation";
import Icon from "../components/Icon";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { SignInRequest } from "../services/usersRequests";
import { loginUser } from "../../users/interfaces/UserInterface";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = async (values: FieldValues) => {
    dispatch(SignInRequest(values as loginUser));
    navigate("/store/home");
  };
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm(signinValidation, onSubmit);
  const formValues = ["email", "password"];

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
      <Icon text="Signin" />
      <CssBaseline />
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
          disabled={!isValid || !isDirty}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
        <SignInUpLink text="signup" />
      </Box>
    </Box>
  );
};

export default SignIn;
