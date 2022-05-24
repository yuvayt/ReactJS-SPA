import { Button } from "@mui/material";
import Typographyz from "./Typographyz";

const ButtonEndIcon = ({ text, endIcon, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Typographyz text={text} />
      {endIcon}
    </Button>
  );
};

export default ButtonEndIcon;
