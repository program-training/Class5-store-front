import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";
type CloseProps = {
  setModal: Dispatch<SetStateAction<boolean>>;
};
const CloseModalIcon = ({ setModal }: CloseProps) => {
  return (
    <Button
      sx={{
        position: "absolute",
        top: "5px",
        right: "5px",
        color: "black",
        fontSize: "xx-large",
      }}
      onClick={() => setModal(false)}
    >
      <CloseIcon />
    </Button>
  );
};
export default CloseModalIcon;
