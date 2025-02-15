import {
  Event as EventIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Map as MapIcon,
  Work as WorkIcon,
} from "@mui/icons-material";

export const menuItems = [
  { text: "Kezdőlap", icon: <HomeIcon />, slug: "/" },
  { text: "Szakmák", icon: <WorkIcon />, slug: "/szakmak" },
  { text: "Térkép", icon: <MapIcon />, slug: "/terkep" },
  { text: "Programok", icon: <EventIcon />, slug: "/programok" },
  { text: "Információ", icon: <InfoIcon />, slug: "/informacio" },
];
