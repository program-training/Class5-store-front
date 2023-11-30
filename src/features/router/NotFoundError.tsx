import { CssBaseline, Typography } from "@mui/material";
import { FC } from "react";

type NotFoundErrorProps = {message  :string};

const NotFoundError: FC<NotFoundErrorProps> = ({message}) => {
  return <>
  <CssBaseline />
  <Typography variant="h5">{message}</Typography>
  </>;
};

export default NotFoundError;