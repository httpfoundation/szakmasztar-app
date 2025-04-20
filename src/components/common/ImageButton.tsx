import { ReactNode } from "react";
import Link from "next/link";
import { Button, IconButton, SxProps, Typography } from "@mui/material";

interface ImageButtonProps {
  href: string;
  text: ReactNode;
  icon: React.ReactNode;
  sx?: SxProps;
  iconSx?: SxProps;
  bgcolor?: string;
}

export default function ImageButton({
  href,
  text,
  icon,
  sx,
  iconSx,
  bgcolor = "primary.light",
}: ImageButtonProps) {
  return (
    <Button
      role="button"
      component={Link}
      href={href}
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: 3,
        px: 1,
        py: 1.5,
        backgroundColor: bgcolor,
        textDecoration: "none",
        textTransform: "none",
        "&:hover,&:focus": {
          backgroundColor: bgcolor,
        },
        ...sx,
      }}
      style={{
        borderRadius: "8px",
      }}
    >
      <IconButton
        disableRipple
        sx={{
          mr: 1,
          color: "white !important",
          "& > svg": {
            fontSize: "2.25rem",
          },
          ...iconSx,
        }}
      >
        {icon}
      </IconButton>

      <Typography
        variant="h6"
        component="span"
        sx={{
          color: "white",
          alignSelf: "center",
          fontSize: 14,
          fontWeight: 600,
          width: "fit-content",
          display: "inline",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
}
