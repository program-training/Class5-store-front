import { Grid, TextField } from "@mui/material";
import { FC } from "react";
import { ConfirmPasswordProps } from "../interfaces/confirmPasswordInterface";

const ConformPasswordInput: FC<ConfirmPasswordProps> = ({
  register,
  confirmPasswordValidate,
  errors,
}) => {
  const validateConfirmPassword = (value: string) => {
    return confirmPasswordValidate.validate(value);
  };
  return (
    <>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          {...register("confirmPassword", {
            ...confirmPasswordValidate,
            validate: validateConfirmPassword,
          })}
          helperText={errors.confirmPassword?.message?.toString()}
          error={errors.confirmPassword ? true : false}
        />
      </Grid>
    </>
  );
};

export default ConformPasswordInput;
