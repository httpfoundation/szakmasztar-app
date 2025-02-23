import { ReactNode } from "react";
import { Box } from "@mui/material";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        px: 1,
        pb: 3,
        mt: "56px",
        mb: "56px",
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
