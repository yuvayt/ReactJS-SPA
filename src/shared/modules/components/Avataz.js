import { Avatar, IconButton, Tooltip } from "@mui/material";

const Avataz = ({ onClick }) => {
  return (
    <Tooltip title="User settings">
      <IconButton onClick={onClick} sx={{ p: 0 }}>
        <Avatar sx={{ width: 25, height: 25 }} />
      </IconButton>
    </Tooltip>
  );
};

export default Avataz;
