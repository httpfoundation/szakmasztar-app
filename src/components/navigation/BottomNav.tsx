"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { menuItems } from "./NavigationConfig";

export default function BottomNav() {
  const pathname = usePathname();
  const bottomNavItems = menuItems.filter((item) => item.showInBottomNav);
  const currentIndex = bottomNavItems.findIndex((item) => item.slug === pathname);

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100000,
        p: 0,
        m: 0,
        borderRadius: 0,
        background:
          "linear-gradient(to bottom right, #FFDF12 -15%, #EA5A32, #71376A 95%, #000000 120%)",
      }}
    >
      <BottomNavigation
        value={currentIndex}
        showLabels
        sx={{ bgcolor: "transparent", height: "74px" }}
      >
        {bottomNavItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.text}
            icon={item.icon}
            component={Link}
            color="white"
            href={item.slug}
            sx={{
              gap: 1,
              px: 0,
              textAlign: "center !important",
              "&.Mui-selected": {
                color: "white",
                bgcolor: "#ffffff15",
              },
              "&.Mui-selected .MuiBottomNavigationAction-label": {
                fontSize: "0.7rem",
              },
              color: "white",
              "& .MuiBottomNavigationAction-label": {
                fontSize: "0.7rem",
                textAlign: "center !important",
                lineHeight: 1,
                color: "white",
                minHeight: "23px",
                height: "23px",
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
