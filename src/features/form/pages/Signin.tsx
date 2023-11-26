import { Avatar, Box, Button, Typography } from "@mui/material";
import useFormSignin from "../hooks/useFormSignin";
import DisplayFormContext from "../components/DisplayForm";
import { FieldValues } from "react-hook-form";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SignInUpLink from "../components/SignUpLink";

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useFormSignin();
  const formValues = ["email", "password"];
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
      <Typography component={"h1"}>Sign in</Typography>
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
          disabled={!isValid || !isDirty}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
        <SignInUpLink text="signup"/>
      </Box>
    </Box>
  );
};

export default SignIn