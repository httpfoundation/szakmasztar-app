import Image from "next/image";
import { Stack } from "@mui/material";
import etelcsomagIcon from "@/assets/images/icons/etelcsomag-icon.svg";
import foodIcon from "@/assets/images/icons/food-icon.svg";
import helloPayIcon from "@/assets/images/icons/hello-pay-icon.svg";
import szigetIcon from "@/assets/images/icons/sziget.svg";
import wcIcon from "@/assets/images/icons/wc-icon.svg";
import SectionContainer from "../layouts/SectionContainer";
import { MapLegendItem } from "./MapLegend";

const legendItems1 = [
  {
    icon: <Image src={wcIcon} alt="WC" style={{ width: "32px", height: "32px" }} />,
    text: "WC",
  },
  {
    icon: <Image src={etelcsomagIcon} alt="Ételcsomag" style={{ width: "32px", height: "32px" }} />,
    text: "Ételcsomag",
  },
  {
    icon: <Image src={foodIcon} alt="Étterem / Büfé" style={{ width: "32px", height: "32px" }} />,
    text: "Étterem / Büfé",
  },
];

const legendItems2 = [
  {
    icon: (
      <Image
        src={helloPayIcon}
        alt="Hello Pay feltöltő pont"
        style={{ width: "28px", height: "28px" }}
      />
    ),
    text: "Hello Pay feltöltő pont",
  },
  {
    icon: (
      <Image src={szigetIcon} alt="Szakma Sztár Sziget" style={{ width: "28px", height: "28px" }} />
    ),
    text: "Szakma Sztár Sziget",
  },
];

const MapSymbolLegend = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        bgcolor: "success.dark",
        boxShadow: "0 -4px 8px rgba(0,0,0,.2)",
        zIndex: 2,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <SectionContainer padding={1} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          sx={{ justifyContent: "space-around", width: "100%" }}
        >
          {legendItems1.map((item, index) => (
            <MapLegendItem key={index} {...item} />
          ))}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          sx={{ justifyContent: "space-around", width: "100%" }}
        >
          {legendItems2.map((item, index) => (
            <MapLegendItem key={index} {...item} />
          ))}
        </Stack>
      </SectionContainer>
    </Stack>
  );
};

export default MapSymbolLegend;
