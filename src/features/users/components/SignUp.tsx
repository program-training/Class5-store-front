import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  confirmPasswordValidate,
  emailValidate,
  passwordValidate,
} from "../../products/helpers/validation";
import { FieldValues, useForm } from "react-hook-form";
import SignInUpLink from "./SignInUpLink";
import SignInUpButton from "./SignInUpButton";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import ConformPasswordInput from "./confirmPasswordInput";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({ mode: "onChange" });
  const onSubmit = (event: FieldValues) => {
    const { email } = event;
    console.log(email);

    event.preventDefault();
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <EmailInput
              register={register}
              errors={errors}
              emailValidet={emailValidate}
            />
            <PasswordInput
              register={register}
              errors={errors}
              passwordValidet={passwordValidate}
            />
            <ConformPasswordInput
              register={register}
              errors={errors}
              confirmPasswordValidate={{
                required: "⚠ Required field",
                validate: (value: string) =>
                  confirmPasswordValidate.validate(
                    value,
                    getValues("password")
                  ),
                message: "⚠ Passwords do not match",
              }}
              passwordValue={getValues("password")}
            />
          </Grid>
          <SignInUpButton text="Sign Up" isValid={isValid} />
          <SignInUpLink text="signin" />
        </Box>
      </Box>
    </Container>
  );
};
