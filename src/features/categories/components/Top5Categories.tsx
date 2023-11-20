import { Box, Container, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Top5Categories = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const navigate = useNavigate();
  const categories = useAppSelector((store) => store.categories.categories);
  const sortedCategories = [...categories].sort((a, b) => b.clicks - a.clicks);
  const top5Categories = sortedCategories.slice(0, 5);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "50px",
      }}
    >
      <Typography variant="h4">Top 5 Categories</Typography>
      {top5Categories.map((category, i) => {
        return (
          <Box key={i} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h5"
              sx={{ color: themeMode ? "black" : "yellow" }}
            >
              {`${i + 1}. ` + category.category_name}
            </Typography>
            <Box
              key={i}
              sx={{
                opacity: 0.7,
                width: "500px",
                height: "200px",
                border: "none",
                borderRadius: "5%",
                backgroundImage: `url(${category.image})`,
                backgroundSize: "cover",
                margin: "10px",
                display: "flex",
                justifyContent: "center",
                transition:
                  "transform 0.3s ease, opacity 0.3s ease, rotate 0.3s ease",
                alignItems: "center",
                ":hover": {
                  transform: "scale(1.1)",
                  rotate: "-1deg",
                  opacity: 1,
                },
              }}
              onClick={() => {
                navigate(`/home/categories/${category.category_name}`);
                const clicks = category.clicks;
                const updatedData = {
                  clicks: clicks + 1,
                };
                axios
                  .put(
                    `http://localhost:3333/api/categories/${category.category_name}`,
                    updatedData
                  )
                  .then((res) => console.log(res.data))
                  .catch((error) => console.log(error));
              }}
            ></Box>
          </Box>
        );
      })}
    </Container>
  );
};

export default Top5Categories;
