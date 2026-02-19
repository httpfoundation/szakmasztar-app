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
  const { boothsByBuilding, articles } = await getInteractiveMapItems();

  const data: InteractiveMapData = {
    buildings: boothsByBuilding.children.map((buildingCategory) => {
      const buildingMetadata = JSON.parse(buildingCategory.metadata ?? "{}");

      const buildingBooths = (buildingCategory.items as ArticleFragment[]).map((boothCategory) => {
        const boothMetadata = JSON.parse(boothCategory.metadata ?? "{}");
        const boothArticleIds = (boothMetadata.articleIds as string[]) ?? [];
        const boothArticles = articles.filter((article) => boothArticleIds.includes(article.id));
        const code = boothCategory.subtitle;
        return {
          id: boothCategory.id,
          title: boothCategory.title,
          code: code ? Number(code) : null,
          image: boothCategory.image
            ? {
                url: boothCategory.image.url.replace("-w1920.webp", "-w1280.webp"),
              }
            : null,
          imageRotate: (boothMetadata.imageRotate as number) ?? null,
          coordinates: boothMetadata.coordinates ?? [],
          articles: boothArticles,
        };
      });

      return {
        id: buildingCategory.id,
        name: buildingCategory.name,
        color: buildingCategory.color,
        hoverColor: darkenColor(buildingCategory.color, 15),
        coordinates: buildingMetadata.coordinates ?? [],
        svgWidth: buildingMetadata.svgWidth ?? 0,
        svgHeight: buildingMetadata.svgHeight ?? 0,
        booths: buildingBooths,
      };
    }),
  };

  const boothsWithoutArticles = data.buildings
    .flatMap((building) => building.booths)
    .filter((booth) => booth.articles.length === 0);

  console.warn(
    "!! Booths without articles:",
    boothsWithoutArticles.map((booth) => `"${booth.title}"`).join(", ")
  );

  // return <pre>{JSON.stringify(data, null, 2)}</pre>;

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
        <InteractiveMap mapData={data} />
      </Box>
    </Stack>
  );
};

export default MapPage;
