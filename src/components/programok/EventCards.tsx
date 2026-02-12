import Image from "next/image";
import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, ButtonBase, Grid, Paper, Typography } from "@mui/material";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import eventCategories from "@/assets/eventCategories.json";
import { getEventTypeBySlug } from "@/lib/utils";
import LinkChip from "../ui/LinkChip";

interface EventCardsProps {
  events: ArticleFragment[];
  permutatingColors?: boolean;
  singleColumn?: boolean;
  showCategoryIcon?: boolean;
  showMapLink?: boolean;
  wholeCardLink?: boolean;
}

const bgcolors = ["wshu.main", "osztv.main", "primary.light", "nak.main", "other.main"];

const EventCards = ({
  events,
  permutatingColors = false,
  singleColumn = false,
  showCategoryIcon = false,
  showMapLink = true,
  wholeCardLink = false,
}: EventCardsProps) => {
  function getEventMapId(article: ArticleFragment): string | null {
    try {
      const metadata = JSON.parse(article.metadata);
      const mapId = metadata?.mapId;
      return mapId || null;
    } catch {
      return null;
    }
  }

  function getEventType(article: ArticleFragment): string {
    try {
      const metadata = JSON.parse(article.metadata);
      const eventType = metadata.map?.eventType ?? metadata.eventType;
      return eventType || getEventTypeBySlug(article.slug).eventType;
    } catch {
      return getEventTypeBySlug(article.slug).eventType;
    }
  }

  function getCategoryIcon(slug: string): string | undefined {
    let targetCategorySlug = "";

    if (slug.startsWith("wshu")) {
      targetCategorySlug = "wshu";
    } else if (slug.startsWith("osztvszktv")) {
      targetCategorySlug = "osztv-szktv-versenyek";
    } else if (
      slug.startsWith("interaktiv-szakmabemutato") ||
      slug.startsWith("egyeb-szakmabemutato")
    ) {
      targetCategorySlug = "egyeb-esemenyek";
    } else if (slug.startsWith("nak")) {
      targetCategorySlug = "nak-bemutatok";
    }

    if (!targetCategorySlug) return undefined;

    return eventCategories.find((cat) => cat.slug.includes(targetCategorySlug))?.symbolSrc;
  }

  const PaperContainer = ({
    children,
    event,
  }: {
    children: React.ReactNode;
    event: ArticleFragment;
  }) => {
    if (wholeCardLink) {
      return (
        <ButtonBase sx={{ width: "100%" }} href={`/szakmai-programok/${event.slug}`}>
          {children}
        </ButtonBase>
      );
    }
    return children;
  };

  const LinkIfNotWholeCardLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href?: string;
  }) => {
    if (!wholeCardLink && href) {
      return <Link href={href}>{children}</Link>;
    }
    return children;
  };

  return (
    <Grid container spacing={1.5} sx={{ mb: 0 }}>
      {events
        .sort((a, z) => a.title.localeCompare(z.title))
        .filter((event) => event.__typename === "Article")
        .map((event, eventIndex) => {
          const mapId = getEventMapId(event);
          const eventType = getEventType(event);
          const hasMapSlug = event.content || event.lead;
          const symbolSrc = showCategoryIcon ? getCategoryIcon(event.slug) : undefined;

          return (
            <Grid item xs={12} md={singleColumn ? 12 : 6} key={eventIndex}>
              <PaperContainer event={event}>
                <Paper
                  variant="outlined"
                  sx={{
                    position: "relative",
                    border: 0,
                    py: 2,
                    px: 1.5,
                    height: "100%",
                    bgcolor: permutatingColors
                      ? bgcolors[eventIndex % bgcolors.length]
                      : "primary.light",
                    color: "primary.contrastText",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    isolation: "isolate",
                    width: "100%",
                  }}
                >
                  <LinkIfNotWholeCardLink
                    href={
                      !!event.content && !!event.lead ? `/szakmai-programok/${event.slug}` : "#"
                    }
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ mb: 1, color: "white", pr: symbolSrc ? 4 : 0 }}
                    >
                      {event.title}
                    </Typography>
                  </LinkIfNotWholeCardLink>
                  <Typography variant="body2" sx={{ mb: 1, fontSize: 13 }}>
                    {eventType}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, mt: 1.5 }}>
                    {(!!event.content || !!event.lead) && (
                      <LinkChip
                        href={!wholeCardLink ? `/szakmai-programok/${event.slug}` : undefined}
                        icon={<InfoIcon />}
                      >
                        Információ
                      </LinkChip>
                    )}

                    {!!mapId && showMapLink && (
                      <LinkChip
                        href={
                          mapId === "d-pavilon-map"
                            ? `/terkep/d-pavilon?zoomTo=${hasMapSlug ? event.slug : event.title}`
                            : `/terkep/a-pavilon?zoomTo=${hasMapSlug ? event.slug : event.title}`
                        }
                        icon={<LocationOnIcon />}
                      >
                        {mapId === "d-pavilon-map" ? "D pavilon" : "A pavilon"}
                      </LinkChip>
                    )}
                  </Box>

                  {symbolSrc && (
                    <Image
                      src={symbolSrc}
                      width={80}
                      height={80}
                      alt=""
                      role="presentation"
                      style={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        opacity: 0.15,
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </Paper>
              </PaperContainer>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default EventCards;
