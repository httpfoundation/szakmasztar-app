import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type AppHeaderProps = {
  onMenuClick: () => void;
};

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={onMenuClick} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Szakma Sztár Fesztivál 2025
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
