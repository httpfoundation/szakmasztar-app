import Link from "next/link";
import { Box, IconButton, Typography } from "@mui/material";

interface ImageButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}

export default function ImageButton({ href, text, icon }: ImageButtonProps) {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: 3,
        px: 1,
        py: 1.5,
        backgroundColor: "primary.light",
        backdropFilter: "blur(10px)",
        textDecoration: "none",
      }}
    >
      <IconButton
        sx={{
          mr: 1,
          color: "white",
          "& > svg": {
            fontSize: "2.25rem",
          },
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
          flexGrow: 1,
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

