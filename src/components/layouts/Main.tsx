import { ReactNode } from "react";
import { Stack } from "@mui/material";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <Stack
      component="main"
      sx={{
        flexGrow: 1,
        mt: { xs: "56px", md: "64px" },
        mb: "calc(64px + env(safe-area-inset-bottom))",
        width: "100%",
      }}
    >
      {children}
    </Stack>
  );
};

export default Main;
