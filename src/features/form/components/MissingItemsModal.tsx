import { FC, useState } from "react";
import CheckExist from "../../cart/components/CheckModal";
import { Box, Modal } from "@mui/material";
import { styleModalCheck } from "../../layout/war/styleModal";
import { NotInStockApterSub } from "../../../order/types/types";
type MissingItemsModalProps = {
  list: NotInStockApterSub[];
};
const MissingItemsModal: FC<MissingItemsModalProps> = ({ list }) => {
  const [openMissing, setOpenMissing] = useState(true);
  return (
    <Box>
      <Modal open={openMissing}>
        <Box sx={styleModalCheck}>
          <CheckExist products={list} setModal={setOpenMissing} />
        </Box>
      </Modal>
    </Box>
  );
};

export default MissingItemsModal;
