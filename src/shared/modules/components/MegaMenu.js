import { Backdrop, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const MegaMenu = ({ pages }) => {
  const sxBox = { flexGrow: 1 };

  const sxBackdrop = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: (theme) => theme.zIndex.drawer + 1,
  };

  const sxMenu = {
    display: "grid",
    gap: 5,
    gridTemplateColumns: "repeat(2, 1fr)",
  };

  const sxItem = {
    fontFamily: "monospace",
    fontWeight: 600,
    letterSpacing: ".2rem",
    color: "white",
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
      <Button
        onClick={handleToggle}
        sx={{
          color: "white",
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: ".15rem",
          mt: 0.5,
        }}
      >
        Menu
      </Button>
      <Backdrop sx={sxBackdrop} open={open} onClick={handleClose}>
        <Box sx={sxMenu}>
          {pages.map((page) => (
            <Link key={page.name} to={page.link} onClick={handleClose}>
              <Typography variant="h6" textAlign="center" sx={sxItem}>
                {page.name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Backdrop>
    </Box>
  );
};

export default MegaMenu;
