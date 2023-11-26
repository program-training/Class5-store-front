import { useForm as useFormHook} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../utils/signinValidation";

import { FormValues } from "../types/FieldProps";

const useFormSignin = () => {
  const {
    control,
    handleSubmit,
    formState,
  } = useFormHook<FormValues>({
    mode: "all",
    resolver: yupResolver<FormValues>(schema),
  });
  
  return {
    handleSubmit,
    control,
    formState,
  };
};

export default useFormSignin;
