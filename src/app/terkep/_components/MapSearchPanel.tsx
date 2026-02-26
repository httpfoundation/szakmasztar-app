"use client";

import { useCallback, useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  ButtonBase,
  Fab,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import eventCategories from "@/assets/eventCategories.json";
import { getEventTypeBySlug } from "@/lib/utils";
import { BoothData } from "./InteractiveMap";
import { staticMapFeatures } from "./staticMapFeatures";

/** Unique POI types derived from staticMapFeatures */
interface PoiType {
  poiType: string;
  name: string;
  count: number;
}

interface MapSearchPanelProps {
  activeFilter: string | null;
  activePoiType: string | null;
  onCategorySelect: (slugPrefix: string | null) => void;
  onPoiTypeSelect: (poiType: string | null) => void;
  booths: BoothData[];
  onBoothSelect: (boothId: string) => void;
}

const poiIcons: Record<string, React.ReactNode> = {
  toilet: (
    <Box
      component="img"
      src="/images/wc.png"
      alt=""
      sx={{ width: 33, height: 33, objectFit: "contain" }}
    />
  ),
  restaurant: (
    <Box
      component="img"
      src="/images/restaurant.png"
      alt=""
      sx={{ width: 33, height: 33, objectFit: "contain" }}
    />
  ),
  food: (
    <Box
      component="img"
      src="/images/food.png"
      alt=""
      sx={{ width: 33, height: 33, objectFit: "contain" }}
    />
  ),
  hellopay: (
    <Box
      component="img"
      src="/images/hellopay.png"
      alt=""
      sx={{ width: 33, height: 33, objectFit: "contain" }}
    />
  ),
};

/** Derives a slug prefix from a category slug for article matching */
function categorySlugToPrefix(categorySlug: string): string {
  if (categorySlug.includes("osztv-szktv")) return "osztvszktv";
  if (categorySlug.includes("wshu")) return "wshu";
  if (categorySlug.includes("nak")) return "nak";
  if (categorySlug.includes("egyeb")) return "interaktiv-szakmabemutato,egyeb-szakmabemutato";
  return categorySlug;
}

const MapSearchPanel = ({
  activeFilter,
  activePoiType,
  onCategorySelect,
  onPoiTypeSelect,
  booths,
  onBoothSelect,
}: MapSearchPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /** Extract unique POI types from static features */
  const poiTypes = useMemo<PoiType[]>(() => {
    const poiFeatures = staticMapFeatures.features.filter((f) => f.properties.type === "poi");
    const grouped = new Map<string, { name: string; count: number }>();
    poiFeatures.forEach((f) => {
      const props = f.properties as { poiType?: string; name?: string };
      if (props.poiType) {
        const existing = grouped.get(props.poiType);
        if (existing) {
          existing.count++;
        } else {
          grouped.set(props.poiType, { name: props.name || props.poiType, count: 1 });
        }
      }
    });
    return Array.from(grouped.entries()).map(([poiType, { name, count }]) => ({
      poiType,
      name,
      count,
    }));
  }, []);

  /** Filter categories and POIs by search query */
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return eventCategories;
    const q = searchQuery.toLowerCase();
    return eventCategories.filter(
      (cat) => cat.title.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredPois = useMemo(() => {
    if (!searchQuery.trim()) return poiTypes;
    const q = searchQuery.toLowerCase();
    return poiTypes.filter((poi) => poi.name.toLowerCase().includes(q));
  }, [searchQuery, poiTypes]);

  const filteredBooths = useMemo(() => {
    let result = [...booths];
    const q = searchQuery.toLowerCase();

    if (q.trim()) {
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.articles.some((a) => a.title.toLowerCase().includes(q))
      );
    }

    return result.sort((a, b) => {
      if (a.code && b.code) return a.code - b.code;
      if (a.code) return -1;
      if (b.code) return 1;
      return a.title.localeCompare(b.title);
    });
  }, [searchQuery, booths]);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleCategoryClick = useCallback(
    (slug: string) => {
      const prefix = categorySlugToPrefix(slug);
      if (activeFilter === prefix) {
        onCategorySelect(null);
      } else {
        onCategorySelect(prefix);
        setIsOpen(false);
      }
      // Clear POI selection when selecting a category
      if (activePoiType) onPoiTypeSelect(null);
    },
    [activeFilter, activePoiType, onCategorySelect, onPoiTypeSelect]
  );

  const handlePoiClick = useCallback(
    (poiType: string) => {
      if (activePoiType === poiType) {
        onPoiTypeSelect(null);
      } else {
        onPoiTypeSelect(poiType);
        setIsOpen(false);
      }
      // Clear category selection when selecting a POI
      if (activeFilter) onCategorySelect(null);
    },
    [activePoiType, activeFilter, onPoiTypeSelect, onCategorySelect]
  );

  return (
    <>
      {/* FAB */}
      <Fab
        onClick={handleToggle}
        size="large"
        sx={{
          position: "absolute",
          bottom: 24,
          right: 16,
          zIndex: 10,
          bgcolor: isOpen ? "rgba(255,255,255,0.95)" : "primary.main",
          color: isOpen ? "primary.main" : "primary.contrastText",
          "&:hover": {
            bgcolor: isOpen ? "rgba(255,255,255,1)" : "primary.light",
          },
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          transition: "all 0.2s ease",
        }}
      >
        {isOpen ? <CloseIcon /> : <SearchIcon />}
        {/* Active filter indicator dot */}
        {!isOpen && (activeFilter || activePoiType) && (
          <Box
            sx={{
              position: "absolute",
              top: 4,
              right: 4,
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "success.main",
              border: "2px solid",
              borderColor: "primary.main",
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.2)" },
              },
            }}
          />
        )}
      </Fab>

      {/* Floating panel */}
      {isOpen && (
        <Paper
          elevation={8}
          sx={{
            position: "absolute",
            top: { xs: 0, sm: "auto" },
            left: { xs: 0, sm: "auto" },
            bottom: { xs: 0, sm: 80 },
            right: { xs: 0, sm: 16 },
            width: { xs: "100%", sm: 420 },
            height: { xs: "100%", sm: "auto" },
            maxHeight: { xs: "none", sm: "60vh", md: "70vh" },
            zIndex: 10,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            borderRadius: { xs: 0, sm: 3 },
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            animation: "fadeSlideUp 0.25s ease-out",
            "@keyframes fadeSlideUp": {
              from: { opacity: 0, transform: "translateY(12px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {/* Dark Header Section */}
          <Box
            sx={{
              bgcolor: "primary.dark",
              boxShadow: "0 4px 8px rgba(0,0,0,0.25)",
              zIndex: 1,
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: 2,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Keresés..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "rgba(255,255,255,0.5)", fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  bgcolor: "rgba(255,255,255,0.08)",
                  borderRadius: 2,
                  color: "white",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.15)" },
                  "&:hover fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                  "&.Mui-focused fieldset": { borderColor: "rgba(255,255,255,0.5)" },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255,255,255,0.4)",
                  opacity: 1,
                },
              }}
            />
            <IconButton onClick={handleClose} size="small" sx={{ color: "inherit", flexShrink: 0 }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Scrollable content */}
          <Box sx={{ overflow: "auto", px: 2, pb: 2, pt: 2, flex: 1 }}>
            {/* Categories */}
            {filteredCategories.length > 0 && (
              <>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mb: 1,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    opacity: 0.6,
                    fontWeight: 600,
                  }}
                >
                  Programok
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {filteredCategories.map((cat) => {
                    const prefix = categorySlugToPrefix(cat.slug);
                    const isActive = activeFilter === prefix;

                    return (
                      <ButtonBase
                        key={cat.slug}
                        onClick={() => handleCategoryClick(cat.slug)}
                        sx={{ width: "100%", borderRadius: 2 }}
                      >
                        <Paper
                          variant="outlined"
                          sx={{
                            position: "relative",
                            border: 0,
                            py: 1.5,
                            px: 1.5,
                            width: "100%",
                            bgcolor: cat.color,
                            color: "primary.contrastText",
                            boxShadow: isActive
                              ? "0 0 0 3px #F4B02A, 0 4px 12px rgba(244,176,42,0.4)"
                              : "0 2px 4px rgba(0, 0, 0, 0.1)",
                            overflow: "hidden",
                            isolation: "isolate",
                            borderRadius: 2,
                            textAlign: "left",
                            transition: "box-shadow 0.15s ease, transform 0.15s ease",
                            transform: isActive ? "scale(1.02)" : "scale(1)",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              pr: cat.symbolSrc ? 5 : 0,
                              lineHeight: 1.3,
                            }}
                          >
                            {cat.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: 12,
                              opacity: 0.85,
                              mt: 0.25,
                              pr: cat.symbolSrc ? 5 : 0,
                            }}
                          >
                            {cat.description}
                          </Typography>

                          {cat.symbolSrc && (
                            <Box
                              component="img"
                              src={cat.symbolSrc}
                              width={64}
                              height={64}
                              alt=""
                              role="presentation"
                              sx={{
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
                      </ButtonBase>
                    );
                  })}
                </Box>
              </>
            )}

            {/* POIs */}
            {filteredPois.length > 0 && (
              <>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mb: 1,
                    mt: 2,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    opacity: 0.6,
                    fontWeight: 600,
                  }}
                >
                  Egyéb
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                  {filteredPois.map((poi) => {
                    const isActive = activePoiType === poi.poiType;

                    return (
                      <ButtonBase
                        key={poi.poiType}
                        onClick={() => handlePoiClick(poi.poiType)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          px: 1.5,
                          py: 1.5,
                          borderRadius: 2,
                          bgcolor: isActive ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
                          boxShadow: isActive
                            ? "0 0 0 3px #F4B02A, 0 4px 12px rgba(244,176,42,0.4)"
                            : "0 2px 4px rgba(0, 0, 0, 0.1)",
                          transition: "all 0.15s ease",
                          textAlign: "left",
                          width: "100%",
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "rgba(255,255,255,0.8)",
                            flexShrink: 0,
                          }}
                        >
                          {poiIcons[poi.poiType] || <SearchIcon sx={{ fontSize: 20 }} />}
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: isActive ? 700 : 500, flexGrow: 1 }}
                        >
                          {poi.name}
                        </Typography>
                      </ButtonBase>
                    );
                  })}
                </Box>
              </>
            )}

            {/* Booths */}
            {filteredBooths.length > 0 && (
              <>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mb: 1,
                    mt: 2,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    opacity: 0.6,
                    fontWeight: 600,
                  }}
                >
                  Standok
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                  {filteredBooths.map((booth) => {
                    return (
                      <ButtonBase
                        key={booth.id}
                        onClick={() => {
                          onBoothSelect(booth.id);
                          setIsOpen(false);
                        }}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: 0.5,
                          borderRadius: 2,
                          bgcolor: "rgba(255,255,255,0.05)",
                          transition: "all 0.15s ease",
                          textAlign: "left",
                          width: "100%",
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.1)",
                            borderColor: "rgba(255,255,255,0.2)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            bgcolor: "rgba(0,0,0,0.1)",
                            borderRadius: 1,
                            px: 1.5,
                            py: 1.5,
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {booth.code && (
                              <Box component="span" sx={{ fontWeight: 800, mr: 1, opacity: 0.8 }}>
                                {String(booth.code).padStart(2, "0")}
                              </Box>
                            )}
                            {booth.title}
                          </Typography>
                        </Box>

                        {(booth.articles.length > 1 ||
                          (booth.articles.length === 1 &&
                            booth.title !== booth.articles[0].title)) && (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 1,
                              width: "100%",
                              px: 1.5,
                              pt: 0.5,
                              pb: 1.5,
                            }}
                          >
                            {booth.articles.map((article) => {
                              const eventType = getEventTypeBySlug(article.slug);
                              return (
                                <Box key={article.slug}>
                                  <Typography
                                    variant="caption"
                                    sx={{
                                      color: "rgba(255,255,255,0.8)",
                                      fontSize: 12,
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    – {article.title}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    sx={{
                                      color: "rgba(255,255,255,0.5)",
                                      fontSize: 10,
                                      display: "flex",
                                      alignItems: "center",
                                      ml: 1.1,
                                      mt: -0.25,
                                    }}
                                  >
                                    {[eventType.eventOwner, eventType.eventType]
                                      .filter(Boolean)
                                      .join(" ")}
                                  </Typography>
                                </Box>
                              );
                            })}
                          </Box>
                        )}
                      </ButtonBase>
                    );
                  })}
                </Box>
              </>
            )}

            {filteredCategories.length === 0 &&
              filteredPois.length === 0 &&
              filteredBooths.length === 0 && (
                <Typography variant="body2" sx={{ textAlign: "center", opacity: 0.5, py: 3 }}>
                  Nincs találat
                </Typography>
              )}
          </Box>
        </Paper>
      )}
    </>
  );
};

export default MapSearchPanel;
