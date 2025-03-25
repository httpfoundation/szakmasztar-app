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
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100000 }} elevation={3}>
      <BottomNavigation value={currentIndex} showLabels>
        {bottomNavItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.text}
            icon={item.icon}
            component={Link}
            href={item.slug}
            sx={{
              "& .MuiBottomNavigationAction-label": {
                fontSize: "0.7rem",
                lineHeight: 1,
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
