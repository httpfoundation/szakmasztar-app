"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HamburgerButton from "../navigation/HamburgerButton";
import SideDrawer from "../navigation/SideDrawer";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const year = title.split(" ").pop() || "";
  const titleWithoutYear = title.replace(year, "");

  return (
    <>
      <AppBar
        position="fixed"
        component="header"
        elevation={3}
        sx={{
          top: 0,
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
          height: { xs: "56px", md: "64px" },
        }}
      >
        <Toolbar>
          <HamburgerButton onClick={handleDrawerToggle} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textTransform: "uppercase",
              lineHeight: 1,
              fontWeight: 300,
              fontSize: "1.35rem",
            }}
          >
            {titleWithoutYear}
            <Typography
              component="span"
              sx={{ lineHeight: 1, fontSize: "1.35rem", fontWeight: 700 }}
            >
              {year}
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <SideDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
