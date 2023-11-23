import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

interface BannerProps {
  onClose: () => void;
}

const BannerRightSide: React.FC<BannerProps> = ({ onClose }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "#f0f0f0",
        padding: "16px",
        width: "250px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1">Your Banner Content</Typography>
        <IconButton size="small" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="body2">Additional content goes here...</Typography>
    </Box>
  );
};

export default BannerRightSide;
