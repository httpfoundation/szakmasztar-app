"use client";

import { forwardRef, Ref } from "react";
import NextLink, { LinkProps } from "next/link";
import createTheme from "@mui/material/styles/createTheme";
import { Variant } from "@/types/types";

const LinkBehaviour = forwardRef(function LinkBehaviour(
  props: LinkProps,
  ref: Ref<HTMLAnchorElement>
) {
  return <NextLink ref={ref} {...props} />;
});

declare module "@mui/material/styles" {
  interface Palette {
    gradient: string[];
    night: Palette["primary"];
    wshu: Palette["primary"];
    osztv: Palette["primary"];
    nak: Palette["primary"];
    other: Palette["primary"];
    sponsor: Palette["primary"];
  }
  interface PaletteOptions {
    gradient?: string[];
    night?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
    wshu?: PaletteOptions["primary"];
    osztv?: PaletteOptions["primary"];
    nak?: PaletteOptions["primary"];
    other?: PaletteOptions["primary"];
    sponsor?: PaletteOptions["primary"];
  }
}

const szakmaSztarYellow = "#F4B02A";
const szakmaSztarOrange = "rgba(234,90,50)";
export const szakmaSztarRed = "rgba(207,82,62)";
export const szakmaSztarPurple = "#350F38";
const szakmaSztarBlack = "rgba(0,0,0)";
export const osztvMain = "#71376A";
export const wshuMain = "#93415A";
export const nakMain = "#703346";
export const sponsorMain = "#904E96";
const lightContrast = "#f5f5f5";

// const szakmaSztarGrey = "#cec6ce";
export const szakmaSztarDarkGrey = "#120e12";
export const szakmaSztarMustard = "#F4B02A";

export const variantColors: Record<
  Variant,
  { menuTextColor: string; activeButtonBgColor: string; menuBgColor: string }
> = {
  gradient: { menuTextColor: "#553125", activeButtonBgColor: "#55312510", menuBgColor: "#EEB31A" },
  light: { menuTextColor: "black", activeButtonBgColor: "#C3BBC2", menuBgColor: "#C3BBC2" },
};

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        LinkComponent: LinkBehaviour,
        disableElevation: true,
        style: { textTransform: "unset", borderRadius: "999px" },
      },
    },
    MuiLink: { defaultProps: { component: LinkBehaviour } },
    MuiMenuItem: { defaultProps: { LinkComponent: LinkBehaviour } },
    MuiStack: { defaultProps: { useFlexGap: true } },
    MuiCollapse: { defaultProps: { unmountOnExit: true } },
    MuiChip: { defaultProps: { color: "primary" } },
  },
  palette: {
    primary: {
      main: szakmaSztarPurple,
      contrastText: "#fff",
      light: "#71376A",
    },
    secondary: {
      main: "#793840",
      contrastText: "#fff",
    },
    info: {
      main: "#fff",
      dark: "#eee",
      contrastText: "#000",
    },
    success: {
      main: szakmaSztarYellow,
      contrastText: szakmaSztarPurple,
      dark: "#E9A112",
    },
    warning: {
      main: szakmaSztarRed,
      contrastText: "#fff",
    },
    night: {
      main: szakmaSztarDarkGrey,
      contrastText: "#fff",
    },
    gradient: [
      szakmaSztarYellow,
      szakmaSztarOrange,
      szakmaSztarRed,
      szakmaSztarPurple,
      szakmaSztarBlack,
    ],
    text: {
      primary: "#fff",
    },
    wshu: {
      main: wshuMain,
      contrastText: lightContrast,
    },
    osztv: {
      main: osztvMain,
      contrastText: lightContrast,
    },
    nak: {
      main: nakMain,
      contrastText: lightContrast,
    },
    other: {
      main: sponsorMain,
      contrastText: szakmaSztarPurple,
    },
    sponsor: {
      main: sponsorMain,
      contrastText: lightContrast,
    },
  },
  typography: {
    body1: {
      fontSize: 16,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 14,
    },
    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.4rem",
      lineHeight: 1.3,
      fontWeight: "600",
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: 28,
      fontWeight: "bold",
    },
    h6: {
      fontSize: 16,
      lineHeight: 1.2,
      fontWeight: "bold",
    },
  },
});
