"use client";

import { usePathname } from "next/navigation";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import Link from "@/components/common/Link";
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
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <BottomNavigation
        value={currentIndex}
        showLabels
        sx={{ bgcolor: "transparent", height: "64px" }}
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
              gap: 0.5,
              px: 0,
              minWidth: "auto",
              textAlign: "center !important",
              color: "white",
              opacity: 0.8,
              "&.Mui-selected": {
                color: "white",
                bgcolor: "#ffffff15",
                opacity: 1,
              },
              "&.Mui-selected .MuiBottomNavigationAction-label": {
                fontWeight: 700,
              },
              "& .MuiBottomNavigationAction-label": {
                fontSize: "0.7rem",
                textAlign: "center !important",
                lineHeight: 1.2,
                color: "white",
                fontWeight: 600,
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
