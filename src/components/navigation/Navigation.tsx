"use client";

import { useState } from "react";
import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";
import SideDrawer from "./SideDrawer";

export default function Navigation({ title }: { title: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppHeader onMenuClick={handleDrawerToggle} title={title} />
      <SideDrawer open={mobileOpen} onClose={handleDrawerToggle} />
      <BottomNav />
    </>
  );
}

