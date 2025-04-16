import { Box, SxProps, Typography } from "@mui/material";

interface PageTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  sx?: SxProps;
  color?: string;
}

export default function PageTitle({
  children,
  icon,
  sx,
  color = "primary.contrastText",
}: PageTitleProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {icon && (
        <Box
          sx={{
            display: "flex",
            color: "primary.contrastText",
            "& > svg": {
              fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.4rem" },
            },
          }}
        >
          {icon}
        </Box>
      )}
      <Typography
        variant="h1"
        component="h1"
        color={color}
        lang="hu"
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.4rem" },
          fontWeight: "bold",
          textTransform: "uppercase",
          wordBreak: "break-word",
          lineHeight: 1.2,
          hyphens: "auto",
          ...sx,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
