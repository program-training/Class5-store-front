import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface ConfirmPasswordProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  confirmPasswordValidate: {
    required: string;
    validate: (value: string) => boolean | string;
    message: string;
  };
  passwordValue: string;
}
