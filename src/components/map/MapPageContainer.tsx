import { ReactNode } from "react";
import { Stack } from "@mui/material";
import YellowTitle from "../ui/YellowTitle";
import MapLegend from "./MapLegend";
import MapSymbolLegend from "./MapSymbolLegend";

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
        height: { xs: "calc(100vh - 56px - 80px)", md: "calc(100vh - 64px - 64px)" },
        position: "relative",
      }}
    >
      <YellowTitle>{title}</YellowTitle>
      <MapLegend sx={{ top: "52px" }} />
      <MapSymbolLegend />
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
