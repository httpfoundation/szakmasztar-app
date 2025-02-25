import { Box, Typography } from "@mui/material";

interface PageTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function PageTitle({ children, icon }: PageTitleProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
      {icon && (
        <Box
          sx={{
            display: "flex",
            color: "primary.contrastText",
            "& > svg": {
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
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
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          fontWeight: 500,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
