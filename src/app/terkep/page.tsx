import { ReactNode } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { getMapItems } from "@/actions/articles/articles";
import aPavilonIcon from "@/assets/images/maps/a-pavilon-icon.svg";
import dPavilonIcon from "@/assets/images/maps/d-pavilon-icon.svg";
import hungexpoMapIcon from "@/assets/images/maps/hungexpo-icon.svg";
import ImageButton from "@/components/common/ImageButton";
import PageContainer from "@/components/layouts/PageContainer";
import Starform from "@/components/ui/Starform";
import SzakmaSztarSymbol from "@/components/ui/SzakmaSztarSymbol";
import YellowTitle from "@/components/ui/YellowTitle";
import InteractiveMap from "./_components/InteractiveMap";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Térképek",
};

const MapPage = async () => {
  const mapItems = (await getMapItems()).filter((x) => x.mapId === "a-pavilon-map");

  return (
    <>
      <YellowTitle>Térkép</YellowTitle>
      <InteractiveMap mapItems={mapItems} />
    </>
  );
};

export default MapPage;
