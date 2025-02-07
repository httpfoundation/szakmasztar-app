"use client";

import { forwardRef, Ref } from "react";
import NextLink, { LinkProps } from "next/link";
import createTheme from "@mui/material/styles/createTheme";

const LinkBehaviour = forwardRef(function LinkBehaviour(
  props: LinkProps,
  ref: Ref<HTMLAnchorElement>
) {
  return <NextLink ref={ref} {...props} />;
});

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: { variant: "contained", LinkComponent: LinkBehaviour },
    },
    MuiLink: { defaultProps: { component: LinkBehaviour } },
    MuiStack: { defaultProps: { useFlexGap: true } },
    MuiCollapse: { defaultProps: { unmountOnExit: true } },
    MuiChip: { defaultProps: { color: "primary" } },
  },
});

