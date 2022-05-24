import { Backdrop, Box, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ButtonEndIcon from "./ButtonEndIcon";
import Avataz from "./Avataz";
import MenuItems from "./MenuItems";

const loginSettings = [
  { name: "Login", link: "login" },
  { name: "Register", link: "login" },
];

const settings = [
  { name: "Profile", link: "profile" },
  { name: "User", link: "profile" },
];

const UserMenu = () => {
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

  const { login, setLogin } = useContext(LoginContext);

  console.log("UserMenu 37: " + login);

  const logout = () => {
    setLogin(false);
    sessionStorage.clear();
  };

  return (
    <Box>
      <Avataz onClick={handleToggle} />
      <Backdrop sx={sxBackdrop} open={open} onClick={handleClose}>
        {!login ? (
          <MenuItems items={loginSettings} />
        ) : (
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2.5}
          >
            <MenuItems items={settings} />
            <ButtonEndIcon
              text="Logout"
              onClick={logout}
              endIcon={
                <LogoutRoundedIcon
                  sx={{ color: "white", fontSize: "20px", ml: "5px" }}
                />
              }
            />
          </Stack>
        )}
      </Backdrop>
    </Box>
  );
};

export default UserMenu;
