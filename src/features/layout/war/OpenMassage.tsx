import { Modal } from "@mui/base";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import CenteredMessage from "./Message";
import { styleModal } from "./styleModal";

const OpenMassage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("warMassage")) return;
    setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("warMassage", "true");
    }, 2000);
  }, []);

  return (
    <Modal open={open}>
      <Box sx={styleModal}>
        <CenteredMessage setModal={setOpen} />
      </Box>
    </Modal>
  );
};

export default OpenMassage;
