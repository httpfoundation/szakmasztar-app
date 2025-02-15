"use client";

import { useState } from "react";
import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";
import SideDrawer from "./SideDrawer";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppHeader onMenuClick={handleDrawerToggle} />
      <SideDrawer open={mobileOpen} onClose={handleDrawerToggle} />
      <BottomNav
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
}
