import { Metadata } from "next";
import { getMapItems } from "@/actions/articles/articles";
import YellowTitle from "@/components/ui/YellowTitle";
import InteractiveMap from "./_components/InteractiveMap";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Térképek",
};

const MapPage = async () => {
  const mapItems = await getMapItems();

  return (
    <>
      <YellowTitle>Térkép</YellowTitle>
      <InteractiveMap mapItems={mapItems} />
    </>
  );
};

export default MapPage;
