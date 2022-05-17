import React from "react";
import Typography from "@mui/material/Typography";
import JavascriptRoundedIcon from "@mui/icons-material/JavascriptRounded";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = ({ xs, md, flexGrow }) => {
  const sxBox = { display: { xs: xs, md: md }, flexGrow: flexGrow };
  const sxTypography = {
    mr: 0,
    fontFamily: "monospace",
    fontWeight: 600,
    letterSpacing: ".2rem",
    color: "white",
  };
  const sxJsIcon = { mr: 2.5, fontSize: 30, color: "white" };

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

// Logo.defaultProp = {
//   xs: "none",
//   md: "flex",
//   flexGrow: "0",
// };

export default Logo;
