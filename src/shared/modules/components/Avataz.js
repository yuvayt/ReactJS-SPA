import {
  Avatar,
  Backdrop,
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Avataz = ({ settings }) => {
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

  const { login, setLogin } = useContext(LoginContext);

  const logout = () => {
    setLogin(false);
    sessionStorage.clear();
  };

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleToggle} sx={{ p: 0 }}>
          <Avatar sx={{ width: 25, height: 25 }} />
        </IconButton>
      </Tooltip>
      <Backdrop sx={sxBackdrop} open={open} onClick={handleClose}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Box sx={sxMenu}>
            {settings.map((s) => (
              <Link key={s.name} to={s.link} onClick={handleClose}>
                <Typography variant="h6" textAlign="center" sx={sxItem}>
                  {s.name}
                </Typography>
              </Link>
            ))}
          </Box>

          <Button
            onClick={() => {
              handleClose();
              logout();
            }}
            endIcon={<LogoutRoundedIcon sx={{ color: "white" }} />}
          >
            <Typography
              variant="h6"
              textAlign="center"
              sx={sxItem}
              textTransform="capitalize"
            >
              Logout
            </Typography>
          </Button>
        </Stack>
      </Backdrop>
    </Box>
  );
};

export default Avataz;
