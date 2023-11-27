import { Box } from "@mui/material";
import { formStyle } from "../styles/formStyle";

const WaitingComponent = () => {
  return ((
    <Box sx={formStyle}>
      <Box component="img" src="https://i.gifer.com/1LBN.gif" />
    </Box>
  ));
};

export default WaitingComponent;