import { Metadata } from "next";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { getInteractiveMapItems } from "@/actions/articles/articles";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import YellowTitle from "@/components/ui/YellowTitle";
import { darkenColor } from "@/lib/utils";
import InteractiveMap from "./_components/InteractiveMap";
import type { InteractiveMapData } from "./_components/InteractiveMap";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Térkép",
};

const MapPage = async () => {
  const { buildings, articles, articlesById } = await getInteractiveMapItems();

  const data: InteractiveMapData = {
    buildings: buildings.children.map((buildingCategory) => {
      const buildingMetadata = JSON.parse(buildingCategory.metadata ?? "{}");

      return {
        id: buildingCategory.id,
        name: buildingCategory.name,
        color: buildingCategory.color,
        hoverColor: darkenColor(buildingCategory.color, 15),
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
    <Stack
      sx={{
        userSelect: "none",
        width: "100%",
        height: {
          xs: "calc(100dvh - 56px - 64px - env(safe-area-inset-bottom))",
          md: "calc(100dvh - 64px - 64px - env(safe-area-inset-bottom))",
        },
        position: "relative",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      <YellowTitle>Térkép</YellowTitle>
      <Box sx={{ flex: 1, position: "relative", minHeight: 0 }}>
        <InteractiveMap mapData={data} articlesById={articlesById} />
      </Box>
    </Stack>
  );
};

export default MapPage;
