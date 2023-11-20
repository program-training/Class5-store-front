import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

export interface EmailInput {
  emailregister: UseFormRegister<FieldValues>;
  emailerrors: FieldErrors<FieldValues>;
  emailValidet: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
export interface PasswordInput {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  passwordValidet: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
export interface nameInput {
  nameregister: UseFormRegister<FieldValues>;
  nameerrors: FieldErrors<FieldValues>;
  nameValidet: {
    required: string;
    minLength: {
      value: number;
      message: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
export interface middelNameInput {
  middelregister: UseFormRegister<FieldValues>;
  middelerrors: FieldErrors<FieldValues>;
  middelName: {
    minLength: {
      value: number;
      message: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
export interface phoneInput {
  phoneregister: UseFormRegister<FieldValues>;
  phoneerrors: FieldErrors<FieldValues>;
  phoneValidet: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
export interface requiredInput {
  requiredregister: UseFormRegister<FieldValues>;
  requirederrors: FieldErrors<FieldValues>;
  requiredValidet: {
    required: string;
  };
}
export interface houseInput {
  houseregister: UseFormRegister<FieldValues>;
  houseerrors: FieldErrors<FieldValues>;
  houseValidet: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
export interface idInput {
  idregister: UseFormRegister<FieldValues>;
  iderrors: FieldErrors<FieldValues>;
  idValidet: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
