import { Box } from "@mui/material";
import MapItems from "./MapItems";

const MenuItems = ({ items }) => {
  const sx = {
    display: "grid",
    gap: 5,
    gridTemplateColumns: "repeat(2, 1fr)",
  };

  return (
    <Box sx={sx}>
      <MapItems items={items} />
    </Box>
  );
};

export default MenuItems;
