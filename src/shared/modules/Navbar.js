import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Logo from "./components/Logo";
import MegaMenu from "./components/MegaMenu";
import Avataz from "./components/Avataz";

const pages = [
  { name: "Posts", link: "posts" },
  { name: "Lorem", link: "/" },
  { name: "Ipsum", link: "/" },
];
const settings = [
  { name: "Profile", link: "profile" },
  { name: "User", link: "profile" },
];

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo xs="none" md="flex" />

          <Box
            sx={{ mt: 0.5, flexGrow: 0, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Link key={page.name} to={page.link}>
                <Button
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontFamily: "monospace",
                    letterSpacing: ".15rem",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <MegaMenu pages={pages} />
          <Logo xs="flex" md="none" flexGrow={1} />
          <Avataz settings={settings} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
