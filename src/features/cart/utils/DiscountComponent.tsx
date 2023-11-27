import { Grid, Typography } from "@mui/material";
import { FC } from "react";

type DiscountComponentProps = { salePrice: number; discountPercentage: number };

const DiscountComponent: FC<DiscountComponentProps> = ({
  salePrice,
  discountPercentage,
}) => {
  return (
    <Grid>
      {discountPercentage && discountPercentage > 0 ? (
        <>
          <Typography
            variant="body1"
            sx={{ display: "inline", margin: 1, fontSize: "1.25rem" }}
          >
            {parseFloat(
              (salePrice - (salePrice * discountPercentage) / 100).toFixed(2)
            )}
            $
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: "line-through", display: "inline" }}
          >
            {salePrice}$
          </Typography>
        </>
      ) : (
        <Typography
          variant="body1"
          sx={{ display: "inline", fontSize: "1.25rem" }}
        >
          {salePrice}$
        </Typography>
      )}
    </Grid>
  );
};

export default DiscountComponent;
