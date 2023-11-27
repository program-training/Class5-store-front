import { Box, Button } from "@mui/material";
import useForm from "../hooks/useForm";
import DisplayFormContext from "../components/DisplayForm";
import { FieldValues } from "react-hook-form";
import SignInUpLink from "../components/SignUpLink";
import signupValidation from "../models/signupValidation";
import Icon from "../components/Icon";

const SignUp = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(JSON.stringify(data));
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm(signupValidation , onSubmit);
  const formValues = ["email","initialPassword", "password", "confirmPassword"];
  
  return (
    <Box
      sx={{
        mt: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Icon text="Signup"/>
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
        <SignInUpLink text="signin"/>
      </Box>
    </Box>
  );
};

export default SignUp