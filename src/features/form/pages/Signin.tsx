import { Box, Button} from "@mui/material";
import useForm from "../hooks/useForm";
import DisplayFormContext from "../components/DisplayForm";
import { FieldValues } from "react-hook-form";
import SignInUpLink from "../components/SignUpLink";
import axios from "axios";
import signinValidation from "../models/signinValidation";
import Icon from "../components/Icon";
const SignIn = () => {
  const onSubmit = async (values: FieldValues) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/users/signIn",
        values
      );
      console.log(JSON.stringify(values));
      console.log(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
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
      }}
    >
      <Icon text="Signin"/>
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
