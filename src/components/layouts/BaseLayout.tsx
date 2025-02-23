import { ReactNode } from "react";
import { Box } from "@mui/material";
import Navigation from "@/components/navigation/Navigation";

export default function BaseLayout({ children, title }: { children: ReactNode; title: string }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navigation title={title} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: "64px",
          mb: "56px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

