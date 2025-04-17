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
        background: "linear-gradient(to right, #FFDF12 -20%, #EA5A32, #B14A4D,  #71376A 105%)",
      }}
    >
      <BottomNavigation
        value={currentIndex}
        showLabels
        sx={{ bgcolor: "transparent", height: "80px" }}
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
                minHeight: "30px",
                height: "30px",
                fontWeight: 600,
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
