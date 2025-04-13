import { Box, SxProps, Typography } from "@mui/material";

interface PageTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  sx?: SxProps;
}

export default function PageTitle({ children, icon, sx }: PageTitleProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {icon && (
        <Box
          sx={{
            display: "flex",
            color: "primary.contrastText",
            "& > svg": {
              fontSize: { xs: "1.7rem", sm: "2.5rem", md: "3rem" },
            },
          }}
        >
          {icon}
        </Box>
      )}
      <Typography
        variant="h1"
        component="h1"
        color="primary.contrastText"
        lang="hu"
        sx={{
          fontSize: { xs: "1.6rem", sm: "2.5rem", md: "3rem" },
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
