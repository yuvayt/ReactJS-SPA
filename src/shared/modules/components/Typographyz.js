import { Typography } from "@mui/material";

const Typographyz = ({ text, textTransform, color, fontSize }) => {
  const sxTypo = {
    color: color ? color : "white",
    fontFamily: "monospace",
    fontWeight: 600,
    letterSpacing: ".15rem",
    fontSize: fontSize ? fontSize : "17.5px",
  };

  return (
    <Typography variant="h6" sx={sxTypo} textTransform={textTransform}>
      {text}
    </Typography>
  );
};

export default Typographyz;
