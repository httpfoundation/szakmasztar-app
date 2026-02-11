import { Metadata } from "next";
import { getInteractiveMapItems, getMapItems } from "@/actions/articles/articles";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import YellowTitle from "@/components/ui/YellowTitle";
import InteractiveMap from "./_components/InteractiveMap";
import type { InteractiveMapData } from "./_components/InteractiveMap";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Térképek",
};

const MapPage = async () => {
  const { buildings, articles } = await getInteractiveMapItems();

  const data: InteractiveMapData = {
    buildings: buildings.children.map((buildingCategory) => {
      const buildingMetadata = JSON.parse(buildingCategory.metadata ?? "{}");

      return {
        id: buildingCategory.id,
        name: buildingCategory.name,
        color: buildingCategory.color,
        coordinates: buildingMetadata.coordinates ?? [],
        svgWidth: buildingMetadata.svgWidth ?? 0,
        svgHeight: buildingMetadata.svgHeight ?? 0,
        booths: (buildingCategory.items as ArticleFragment[]).map((boothCategory) => {
          const boothMetadata = JSON.parse(boothCategory.metadata ?? "{}");
          return {
            id: boothCategory.id,
            title: boothCategory.title,
            code: boothCategory.subtitle ?? "",
            articleIds: (boothMetadata.articleIds as string[]) ?? [],
            x: boothMetadata.map?.x,
            y: boothMetadata.map?.y,
            width: boothMetadata.map?.width,
            height: boothMetadata.map?.height,
          } as InteractiveMapData["buildings"][number]["booths"][number];
        }),
        articles: articles
          .filter(
            (article) => article.buildingId === buildingCategory.id.replace("szakmasztar-app-", "")
          )
          .map((article) => {
            const hasParentBooth = (buildingCategory.items as ArticleFragment[]).some(
              (boothCategory) => {
                const boothMetadata = JSON.parse(boothCategory.metadata ?? "{}");
                return boothMetadata.articleIds?.includes(article.id);
              }
            );
            return { ...article, hasParentBooth };
          }),
      };
    }),
  };

  return (
    <>
      <YellowTitle>Térkép</YellowTitle>
      <InteractiveMap mapData={data} />
    </>
  );
};

export default MapPage;
