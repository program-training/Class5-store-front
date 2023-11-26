import { Box, Button, Typography } from "@mui/material";
import useFormSignup from "../hooks/useFormSignup";
import DisplayFormContext from "../components/DisplayForm";
import { FieldValues } from "react-hook-form";
import SignInUpLink from "../components/SignUpLink";

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useFormSignup();
  const formValues = ["email", "password", "confirmPassword"];
  const onSubmit = (data: FieldValues) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Box
      sx={{
        mt: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component={"h1"}>Sign up</Typography>
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit(onSubmit)}
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