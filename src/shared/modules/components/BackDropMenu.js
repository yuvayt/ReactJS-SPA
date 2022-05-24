import { Backdrop, Box } from "@mui/material";
import { useState } from "react";

const BackDropMenu = ({ items, ToggleButton, MenuBody }) => {
  const sxBackdrop = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: (theme) => theme.zIndex.drawer + 1,
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <ToggleButton onClick={handleToggle} />
      <Backdrop sx={sxBackdrop} open={open} onClick={handleClose}>
        <MenuBody items={items} />
      </Backdrop>
    </Box>
  );
};

export default BackDropMenu;
