import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "./components/Logo";
import MegaMenu from "./components/MegaMenu";
import UserMenu from "./components/UserMenu";
import MapItems from "./components/MapItems";

const pages = [
  { name: "Posts", link: "posts" },
  { name: "Lorem", link: "/" },
  { name: "Ipsum", link: "/" },
];

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#212121", mb: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo xs="none" md="flex" />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MapItems items={pages} />
          </Box>

          <MegaMenu />

          <Logo xs="flex" md="none" flexGrow={1} />

          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
