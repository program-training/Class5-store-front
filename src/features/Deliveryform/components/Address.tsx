import { TextField, Grid } from "@mui/material";
import { houseInput, nameInput } from "../types/propInput";
import { FC } from "react";

type PropAddress = {
  name: nameInput;
  house: houseInput;
};

const Address: FC<PropAddress> = ({ name, house }) => {
  const { nameValidet, nameerrors, nameregister } = name;
  const { houseValidet, houseerrors, houseregister } = house;
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm({ mode: "onChange" });
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            id="house"
            label="House number"
            autoComplete="house"
            autoFocus
            {...houseregister("house", houseValidet)}
            helperText={houseerrors.house?.message?.toString()}
            error={houseerrors.house ? true : false}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            id="street"
            label="Street"
            autoComplete="street"
            autoFocus
            {...nameregister("street", nameValidet)}
            helperText={nameerrors.street?.message?.toString()}
            error={nameerrors.street ? true : false}
          />
        </Grid>
      </Grid>
      <Grid>
        <TextField
          margin="normal"
          required
          fullWidth
          variant="standard"
          id="city"
          label="City"
          autoComplete="city"
          autoFocus
          {...nameregister("city", nameValidet)}
          helperText={nameerrors.city?.message?.toString()}
          error={nameerrors.city ? true : false}
        />
      </Grid>
    </>
  );
};
export default Address;
