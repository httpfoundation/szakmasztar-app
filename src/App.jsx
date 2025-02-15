import { useState } from "react";
import {
  Event as EventIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Map as MapIcon,
  Menu as MenuIcon,
  Work as WorkIcon,
} from "@mui/icons-material";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Kezdőlap", icon: <HomeIcon /> },
    { text: "Szakmák", icon: <WorkIcon /> },
    { text: "Térkép", icon: <MapIcon /> },
    { text: "Programok", icon: <EventIcon /> },
    { text: "Információ", icon: <InfoIcon /> },
  ];

  const drawer = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Szakma Sztár Fesztivál 2025
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Jobb teljesítmény mobile-on
        }}
        sx={{
          "& .MuiDrawer-paper": { width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: "64px", // AppBar magassága
          mb: "56px", // BottomNavigation magassága
        }}
      >
        {/* Itt lesz majd a tartalom */}
        <Typography paragraph>Üdvözöljük a Szakma Sztár Fesztiválon!</Typography>
      </Box>

      {/* Bottom navigation */}
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Kezdőlap" icon={<HomeIcon />} />
          <BottomNavigationAction label="Szakmák" icon={<WorkIcon />} />
          <BottomNavigationAction label="Térkép" icon={<MapIcon />} />
          <BottomNavigationAction label="Programok" icon={<EventIcon />} />
          <BottomNavigationAction label="Információ" icon={<InfoIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default App;
