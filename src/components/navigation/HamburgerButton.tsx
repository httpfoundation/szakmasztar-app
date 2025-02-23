import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type HamburgerButtonProps = {
  onClick: () => void;
};

export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <IconButton color="inherit" edge="start" onClick={onClick} sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
  );
}
