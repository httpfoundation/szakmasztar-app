import localFont from "next/font/local";

export const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["Montserrat", "Arial", "sans-serif"],
  src: [
    {
      path: "../assets/fonts/montserrat/montserrat-300.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/montserrat/montserrat-500.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/montserrat/montserrat-600.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/montserrat/montserrat-700.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/montserrat/montserrat-800.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/montserrat/montserrat-900.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/montserrat/montserrat-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/montserrat/montserrat-italic.woff",
      style: "italic",
    },
  ],
});

export const montserratBold = localFont({
  variable: "--font-montserrat-bold",
  display: "swap",
  fallback: ["Montserrat", "Arial", "sans-serif"],
  src: [
    {
      path: "../assets/fonts/montserrat/montserrat-800.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

export const montserratMedium = localFont({
  variable: "--font-montserrat-medium",
  display: "swap",
  fallback: ["Montserrat", "Arial", "sans-serif"],
  src: [
    {
      path: "../assets/fonts/montserrat/montserrat-500.woff",
      weight: "500",
      style: "normal",
    },
  ],
});

export const marketCondensed = localFont({
  variable: "--font-market-condensed",
  display: "swap",
  fallback: ["Montserrat", "Arial", "sans-serif"],
  src: [
    {
      path: "../assets/fonts/MarketPro-CondMedium.woff",
      weight: "400",
      style: "normal",
    },
  ],
});
