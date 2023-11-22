import { Box, Paper, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import CloseModalIcon from "./CloseIcon";
type CloseProp = {
  setModal: Dispatch<SetStateAction<boolean>>;
};
const CenteredMessage = ({ setModal }: CloseProp) => {
  return (
    <Paper
      elevation={3}
      style={{
        margin: "auto",
        padding: "20px",
        maxWidth: "500px",
        textAlign: "center",
        direction: "rtl",
        backgroundImage: `url("https://pasteli.co.il/wp-content/uploads/2023/03/%D7%93%D7%92%D7%9C-%D7%99%D7%A9%D7%A8%D7%90%D7%9C.jpg")`,
        backgroundSize: "100% 100%",
        color: "black",
      }}
    >
      <Box>
        <CloseModalIcon setModal={setModal} />
      </Box>
      <br />
      <Typography variant="h4" gutterBottom fontWeight={700}>
        לקוחות יקרים!
      </Typography>
      <Typography variant="h6" fontWeight={700}>
        בעקבות המצב הביטחוני השורר בארץ, יתכן ויחולו עיכובים במועדי אספקת
        המוצרים.
      </Typography>
      <br />
      <Typography variant="h6" fontWeight={700}>
        ע"פ הנחיות פיקוד העורף, לא יתקיימו משלוחים ליישובי העוטף והיישובים בגבול
        הצפון.
      </Typography>
    </Paper>
  );
};

export default CenteredMessage;
