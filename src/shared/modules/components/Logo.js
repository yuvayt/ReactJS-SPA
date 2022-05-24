import React from "react";
import Typography from "@mui/material/Typography";
import JavascriptRoundedIcon from "@mui/icons-material/JavascriptRounded";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = ({ xs, md, flexGrow }) => {
  const sxBox = { mr: 2, display: { xs: xs, md: md }, flexGrow: flexGrow };

  const sxTypography = {
    fontFamily: "monospace",
    fontWeight: 600,
    letterSpacing: ".2rem",
    color: "white",
  };

  const sxJsIcon = { fontSize: 30, color: "white" };

  return (
    <Box sx={sxBox}>
      <Link to="/">
        <Typography variant="h5" noWrap sx={sxTypography}>
          REACT
        </Typography>
      </Link>
      <JavascriptRoundedIcon sx={sxJsIcon} />
    </Box>
  );
};

export default Logo;
