"use client";

import { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HamburgerButton from "../navigation/HamburgerButton";
import SideDrawer from "../navigation/SideDrawer";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        component="header"
        elevation={0}
        sx={{
          background: (theme) => theme.palette.primary.main,
        }}
      >
        <Toolbar>
          <HamburgerButton onClick={handleDrawerToggle} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <SideDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
