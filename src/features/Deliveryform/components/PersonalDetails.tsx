import { TextField, Grid } from "@mui/material";
import { idInput, middelNameInput, nameInput } from "../types/propInput";
import { FC } from "react";

type PropPersonal = {
  id: idInput;
  name: nameInput;
  middel: middelNameInput;
};

const PersonalDetails: FC<PropPersonal> = ({ id, name, middel }) => {
  const { idValidet, iderrors, idregister } = id;
  const { nameValidet, nameerrors, nameregister } = name;
  const { middelName, middelerrors, middelregister } = middel;

  return (
    <>
      <TextField
        autoComplete="given-name"
        fullWidth
        id="personal_id"
        label="Personal ID"
        variant="standard"
        autoFocus
        {...idregister("personal_id", idValidet)}
        helperText={iderrors.personal_id?.message?.toString()}
        error={iderrors.personal_id ? true : false}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            fullWidth
            id="firstName"
            label="First Name"
            variant="standard"
            autoFocus
            {...nameregister("firstName", nameValidet)}
            helperText={nameerrors.firstName?.message?.toString()}
            error={nameerrors.firstName ? true : false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            autoFocus
            variant="standard"
            id="middle_name"
            label="Middel Name"
            autoComplete="middle_name"
            {...middelregister("middle_name", middelName)}
            helperText={middelerrors.middle_name?.message?.toString()}
            error={middelerrors.middle_name ? true : false}
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        autoFocus
        required
        variant="standard"
        id="lastName"
        label="Last Name"
        autoComplete="lastName"
        {...nameregister("lastName", nameValidet)}
        helperText={nameerrors.lastName?.message?.toString()}
        error={nameerrors.lastName ? true : false}
      />
    </>
  );
};
export default PersonalDetails;
