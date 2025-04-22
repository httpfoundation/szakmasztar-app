import Link from "next/link";
import {
  Category as CategoryIcon,
  Event as EventIcon,
  Explore as ExploreIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Map as MapIcon,
  QrCode as QrCodeIcon,
  Quiz as QuizIcon,
  Work as WorkIcon,
} from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

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
    text: "Szakmák",
    icon: <WorkIcon />,
    slug: "/szakmai-programok",
    link: <Link href="/szakmai-programok">{<WorkIcon />}</Link>,
    showInBottomNav: true,
  },
  {
    text: "Térkép",
    icon: <ExploreIcon />,
    slug: "/terkep",
    link: <Link href="/terkep">{<MapIcon />}</Link>,
    showInBottomNav: true,
  },
  {
    text: "Programok",
    icon: <CategoryIcon />,
    slug: "/szakmai-programok/kategoriak",
    link: <Link href="/szakmai-programok/kategoriak">{<WorkIcon />}</Link>,
    showInBottomNav: true,
  },
  {
    text: "Naptár",
    icon: <EventIcon />,
    slug: "/utemterv",
    link: <Link href="/utemterv">{<EventIcon />}</Link>,
    showInBottomNav: true,
  },
  {
    text: "QR kód",
    icon: <QrCodeIcon />,
    slug: "/qrcode",
    link: <Link href="/qrcode">{<QrCodeIcon />}</Link>,
    showInBottomNav: false,
  },
  {
    text: "Kérdőívek",
    icon: <QuizIcon />,
    slug: "/kerdoivek",
    link: <Link href="/kerdoivek">{<QuizIcon />}</Link>,
    showInBottomNav: false,
  },
  {
    text: "Szakmai támogatók",
    icon: <AccountBalanceIcon />,
    slug: "/szponzorok",
    link: <Link href="/szponzorok">{<QuizIcon />}</Link>,
    showInBottomNav: false,
  },
  {
    text: "Infók",
    icon: <InfoIcon />,
    slug: "/szakmasztar",
    link: <Link href="/informaciok">{<InfoIcon />}</Link>,
    showInBottomNav: false,
  },
  // {
  //   text: "Hírek",
  //   icon: <NewsIcon />,
  //   slug: "/hirek",
  //   link: <Link href="/hirek">{<NewsIcon />}</Link>,
  //   showInBottomNav: false, // Ez csak a hamburger menüben jelenik meg
  // },
];
