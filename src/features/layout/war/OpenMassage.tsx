import { Modal } from "@mui/base";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import CenteredMessage from "./Massage";
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

  useEffect(() => {
    const onNewTab = () => {
      setOpen(true);
    };
    window.addEventListener("storage", onNewTab);
    return () => {
      window.removeEventListener("storage", onNewTab);
    };
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
