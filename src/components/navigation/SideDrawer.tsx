"use client";

import { usePathname } from "next/navigation";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "@/components/common/Link";
import { menuItems } from "./NavigationConfig";

interface SideDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function SideDrawer({ open, onClose }: SideDrawerProps) {
  const handleItemClick = () => {
    onClose();
  };

  const pathname = usePathname();

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": { width: 240, bgcolor: "primary.main" },
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              href={item.slug}
              onClick={handleItemClick}
              selected={item.slug === pathname}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white", mr: -2 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
