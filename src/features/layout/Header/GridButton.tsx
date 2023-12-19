import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import { Box, IconButton } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";

const GridButton = () => {
  const navigate = useNavigate();
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);

  return (
    <Box>
      <IconButton
        sx={{ ml: 1, mr: 1 }}
        onClick={() => {
          navigate("/store/home/grid");
        }}
        color="inherit"
      >
        {themeMode ? <BarChartRoundedIcon /> : <BarChartRoundedIcon />}
      </IconButton>
    </Box>
  );
};

export default GridButton;
