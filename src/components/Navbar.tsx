"use client";
import { NavLinks } from "@/constants";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const Navbar = () => {
  const user = null;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          {/* SideBar Menu */}
          {/* Menu Icon */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            color="inherit"
            sx={{ display: { sm: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Menu List */}
          <Menu
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            keepMounted={false}
            sx={{ display: { sm: "block", md: "none" } }}
            anchorEl={anchorEl}
          >
            {NavLinks.map((item) => (
              <MenuItem key={item.text}>
                <Typography>{item.text}</Typography>
              </MenuItem>
            ))}
          </Menu>
          {/* end SideBar Menu */}

          {/* Logo */}
          <Box sx={{ px: 2, flexGrow: 1 }}>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={100} height={70} />
            </Link>
          </Box>

          {/* Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            {NavLinks.map((item) => (
              <Link href="/" key={item.text}>
                <Typography variant="button" sx={{ px: 2, my: 0, py: 0 }}>
                  {item.text}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* Button */}
          <Box>
            {user ? (
              <IconButton size="large">
                <PersonPinIcon fontSize="large" />
              </IconButton>
            ) : (
              <Button color="error" size="small" variant="outlined">
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
