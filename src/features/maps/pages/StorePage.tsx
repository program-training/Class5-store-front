import React from "react";
import StoreMap from "../components/StoreMap";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

const StorePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        מחכים לראותכם בחנות שלנו
      </Typography>
      <StoreMap />
    </Container>
  );
};

export default StorePage;
