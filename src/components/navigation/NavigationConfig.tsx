import Link from "next/link";
import {
  Event as EventIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Map as MapIcon,
  Newspaper as NewsIcon,
  Quiz as QuizIcon,
  Work as WorkIcon,
} from "@mui/icons-material";

type MenuItem = {
  text: string;
  icon: React.ReactNode;
  slug: string;
  link: React.ReactNode;
  showInBottomNav: boolean;
};

export const menuItems: MenuItem[] = [
  {
    text: "Kezdőlap",
    icon: <HomeIcon />,
    slug: "/",
    link: <Link href="/">{<HomeIcon />}</Link>,
    showInBottomNav: true,
  },
  {
    text: "Szakmai programok",
    icon: <WorkIcon />,
    slug: "/szakmai-programok",
    link: <Link href="/szakmai-programok">{<WorkIcon />}</Link>,
    showInBottomNav: true,
  },
  {
    text: "Térkép",
    icon: <MapIcon />,
    slug: "/terkep",
    link: <Link href="/terkep">{<MapIcon />}</Link>,
    showInBottomNav: true,
  },
  {
    text: "Ütemterv",
    icon: <EventIcon />,
    slug: "/utemterv",
    link: <Link href="/utemterv">{<EventIcon />}</Link>,
    showInBottomNav: true,
  },
  {
    text: "Kvízek",
    icon: <QuizIcon />,
    slug: "/kvizek",
    link: <Link href="/kvizek">{<QuizIcon />}</Link>,
    showInBottomNav: false,
  },
  {
    text: "Infók",
    icon: <InfoIcon />,
    slug: "/informaciok",
    link: <Link href="/informaciok">{<InfoIcon />}</Link>,
    showInBottomNav: true,
  },
  {
    text: "Hírek",
    icon: <NewsIcon />,
    slug: "/hirek",
    link: <Link href="/hirek">{<NewsIcon />}</Link>,
    showInBottomNav: false, // Ez csak a hamburger menüben jelenik meg
  },
];
