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
        borderRadius: 4,
        p: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <IconButton
        sx={{
          p: 1,
          mr: 2,
          color: "white",
          "& > svg": {
            fontSize: "2.5rem",
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
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
