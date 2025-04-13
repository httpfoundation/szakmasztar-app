import { ReactNode } from "react";
import { Stack } from "@mui/material";
import GradientTitle from "../ui/GradientTitle";

interface MapPageContainerProps {
  title: string;
  children: ReactNode;
}

const MapPageContainer = ({ title, children }: MapPageContainerProps) => {
  return (
    <Stack
      sx={{
        userSelect: "none",
        width: "100%",
        height: { xs: "calc(100vh - 56px - 56px)", md: "calc(100vh - 64px - 56px)" },
        // border: "1px solid white",
      }}
    >
      <GradientTitle>{title}</GradientTitle>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default MapPageContainer;
