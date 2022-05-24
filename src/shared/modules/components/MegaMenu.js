import { Backdrop, Box, Button } from "@mui/material";
import { useState } from "react";
import MenuItems from "./MenuItems";
import Typographyz from "./Typographyz";

const pages = [
  { name: "Posts", link: "posts" },
  { name: "Lorem", link: "/" },
  { name: "Ipsum", link: "/" },
];

const MegaMenu = () => {
  const sxBox = { flexGrow: 1 };

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
    <Box sx={sxBox}>
      <Button onClick={handleToggle}>
        <Typographyz text="Menu" />
      </Button>
      <Backdrop sx={sxBackdrop} open={open} onClick={handleClose}>
        <MenuItems items={pages} />
      </Backdrop>
    </Box>
  );
};

export default MegaMenu;
