import { Paper, Typography } from "@mui/material";

const CenteredMessage = () => {
  return (
    <Paper
      elevation={3}
      style={{
        width: "50%",
        margin: "auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        לקוחות יקרים!
      </Typography>
      <Typography>
        בעקבות המצב בטחוני השורר בארץ, יתכן ויחולו עיכובים במועדי אספקת המוצרים.
      </Typography>
      <Typography>תת הודעה שנייה</Typography>
    </Paper>
  );
};

export default CenteredMessage;
