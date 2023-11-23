import { TextField, Grid } from "@mui/material";
import { nameInput } from "../types/propInput";
import { FC } from "react";

type PropPersonal = {
  name: nameInput;
};

const PersonalDetails: FC<PropPersonal> = ({ name }) => {
  const { nameValidet, nameerrors, nameregister } = name;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            fullWidth
            id="fullName"
            label="Full Name"
            variant="standard"
            autoFocus
            {...nameregister("fullName", nameValidet)}
            helperText={nameerrors.fullName?.message?.toString()}
            error={nameerrors.fullName ? true : false}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default PersonalDetails;
