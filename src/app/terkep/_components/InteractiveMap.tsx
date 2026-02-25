"use client";

import Map, { Layer, Source } from "react-map-gl/maplibre";
import type { LngLat, MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useCallback, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useMediaQuery, useTheme } from "@mui/material";
import { LngLatBounds } from "maplibre-gl";
import type { MapLayerMouseEvent, ViewStateChangeEvent } from "react-map-gl/maplibre";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import BoothDetailPanel from "./BoothDetailPanel";
import { generateBoothsGeoJSON, generateBuildingsGeoJSON } from "./mapHelpers";
import MapSearchPanel from "./MapSearchPanel";
import { staticMapFeatures } from "./staticMapFeatures";

export interface BoothData {
  id: string;
  title: string;
  code: number | null;
  image: {
    url: string;
  } | null;
  imageRotate: number | null;
  coordinates: [number, number][];
  articles: ArticleFragment[];
}

export interface InteractiveMapData {
  buildings: {
    id: string;
    name: string;
    code?: number;
    color: string;
    hoverColor: string;
    coordinates: [number, number][];
    svgWidth: number;
    svgHeight: number;
    booths: BoothData[];
  }[];
}

interface InteractiveMapProps {
  mapData: InteractiveMapData;
}

const InteractiveMap = ({ mapData }: InteractiveMapProps) => {
  const searchParams = useSearchParams();
  const [initialBuilding] = [...searchParams.keys()];

  const mapRef = useRef<MapRef>(null);
  const [hoveredBoothId, setHoveredBoothId] = useState<string | null>(null);
  const [hoveredBuildingId, setHoveredBuildingId] = useState<string | null>(null);
  const [selectedBoothId, setSelectedBoothId] = useState<string | null>(null);
  const [returnToMapState, setReturnToMapState] = useState<{
    center: LngLat;
    zoom: number;
    pitch: number;
    bearing: number;
  } | null>(null);
  const [isDismissing, setIsDismissing] = useState(false);
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const [boothImagesLoaded, setBoothImagesLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activePoiType, setActivePoiType] = useState<string | null>(null);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const allBooths = useMemo(() => mapData.buildings.flatMap((b) => b.booths), [mapData]);

  /* Handles hover events, setting hovered booth and building IDs to highlight them */
  const onHover = useCallback((event: MapLayerMouseEvent) => {
    const { features } = event;
    const hoveredBooth = features?.find(
      (feature) => feature.properties?.type === "booth" && feature.properties?.hasArticles
    );
    const hoveredBuilding = features?.find((feature) => feature.properties?.type === "building");
    setHoveredBoothId(hoveredBooth ? (hoveredBooth.properties?.id as string) : null);
    setHoveredBuildingId(hoveredBuilding ? (hoveredBuilding.properties?.id as string) : null);
    if (hoveredBooth || hoveredBuilding) {
      setCursor("pointer");
    } else {
      setCursor(undefined);
    }
  }, []);

  // Resets hovered booth and building IDs when mouse leaves the map
  const onMouseLeave = useCallback(() => {
    setHoveredBoothId(null);
    setHoveredBuildingId(null);
    setCursor(undefined);
  }, []);

  /* Handles click events, setting selected booth ID to open the booth detail panel */
  const onClick = useCallback(
    (event: MapLayerMouseEvent) => {
      const { features } = event;
      const clickedBooth = features?.find(
        (feature) => feature.properties?.type === "booth" && feature.properties?.hasArticles
      );

      if (clickedBooth) {
        setIsDismissing(false);
        setSelectedBoothId(clickedBooth.properties?.id as string);
        setActiveFilter(null);
        setActivePoiType(null);
        const geometry = clickedBooth.geometry;
        const imageRotate = clickedBooth.properties?.imageRotate;
        const bearing = imageRotate && imageRotate !== false ? (imageRotate as number) : 0;

        if (geometry.type === "Polygon") {
          const coordinates = geometry.coordinates[0];
          const bounds = new LngLatBounds();
          coordinates.forEach((coord) => {
            bounds.extend(coord as [number, number]);
          });

          if (!selectedBoothId) {
            setReturnToMapState({
              center: mapRef.current?.getMap().getCenter() as LngLat,
              zoom: mapRef.current?.getMap().getZoom() as number,
              pitch: mapRef.current?.getMap().getPitch() as number,
              bearing: mapRef.current?.getMap().getBearing() as number,
            });
          }

          mapRef.current
            ?.getMap()
            .fitBounds(bounds, { padding: 100, offset: isMobile ? [0, -80] : [80, 0], bearing });
        }
      } else {
        const clickedBuilding = features?.find(
          (feature) => feature.properties?.type === "building"
        );
        if (clickedBuilding) {
          const geometry = clickedBuilding.geometry;
          if (geometry.type === "Polygon") {
            const coordinates = geometry.coordinates[0];
            const bounds = new LngLatBounds();
            coordinates.forEach((coord) => {
              bounds.extend(coord as [number, number]);
            });
            mapRef.current?.getMap().fitBounds(bounds, { padding: 50 });
          }
        } else if (selectedBoothId) {
          setIsDismissing(true);
        }
      }
    },
    [isMobile, selectedBoothId]
  );

  /* Returns the selected booth based on the selected booth ID */
  const selectedBooth = useMemo(() => {
    if (!selectedBoothId) return null;
    for (const building of mapData.buildings) {
      const booth = building.booths.find((b) => b.id === selectedBoothId);
      if (booth) return booth;
    }
    return null;
  }, [selectedBoothId, mapData]);

  /* Save the map state (center, zoom, pitch, bearing) to session storage */
  const onMoveEnd = useCallback((event: ViewStateChangeEvent) => {
    const { longitude, latitude, zoom, pitch, bearing } = event.viewState;
    sessionStorage.setItem(
      "interactive-map-view-state",
      JSON.stringify({ longitude, latitude, zoom, pitch, bearing })
    );
  }, []);

  const onMapLoad = useCallback(async () => {
    const map = mapRef.current?.getMap();
    if (map) {
      /* Load the map state (center, zoom, pitch, bearing) from session storage */
      const savedState = sessionStorage.getItem("interactive-map-view-state");
      if (savedState && !initialBuilding) {
        try {
          const { longitude, latitude, zoom, pitch, bearing } = JSON.parse(savedState);

          map.jumpTo({
            center: [longitude, latitude],
            zoom,
            pitch,
            bearing,
          });
        } catch (e) {
          console.error("Failed to parse saved map state", e);
        }
      }

      if (initialBuilding) {
        const building = mapData.buildings.find((b) => b.id.includes(initialBuilding));
        if (building) {
          const bounds = new LngLatBounds();
          building.coordinates.forEach((coord) => {
            bounds.extend(coord as [number, number]);
          });
          map.fitBounds(bounds, { padding: 50 });
        }
        window.history.replaceState({}, "", "/terkep");
      }

      /* Remove unnecessary map layers */
      const layers = map.getStyle().layers;
      const removeLayers = [
        "highway-shield-non-us",
        "label_other",
        "label_village",
        "label_town",
        "label_state",
        "label_city",
        "label_city_capital",
        "label_country_3",
        "label_country_2",
        "label_country_1",
      ];
      layers?.forEach((layer) => {
        if (removeLayers.includes(layer.id)) {
          map.removeLayer(layer.id);
        }
      });

      /* Add custom images to the map */
      const images: [string, string][] = [
        ["arrow_upward", "/images/arrow_upward_256dp_000_FILL0_wght400_GRAD0_opsz48.png"],
        ["metro2", "/images/Budapest_M2_Metro_s.png"],
        ["wc", "/images/wc.png"],
        ["restaurant", "/images/restaurant.png"],
        ["food", "/images/food.png"],
        ["hellopay", "/images/hellopay.png"],
      ];

      images.forEach(async ([name, path]) => {
        const image = await map.loadImage(path);
        if (map.hasImage(name)) map.removeImage(name);
        map.addImage(name, image.data);
      });

      /* Load booth exhibitor images */
      const boothImages = mapData.buildings
        .flatMap((building) => building.booths)
        .filter((booth) => booth.image !== null)
        .map((booth) => ({
          id: `booth-img-${booth.id}`,
          url: booth.image!.url,
        }));

      await Promise.all(
        boothImages.map(async ({ id, url }) => {
          try {
            const image = await map.loadImage(url);
            if (!map.hasImage(id)) {
              map.addImage(id, image.data);
            }
          } catch (e) {
            console.error(`Failed to load booth image: ${url}`, e);
          }
        })
      );
      setBoothImagesLoaded(true);
    }
  }, [initialBuilding, mapData.buildings]);

  /* Calculate the bounds of the buildings */
  const buildingBounds = useMemo(() => {
    const bounds = new LngLatBounds();
    mapData.buildings.forEach((building) => {
      building.coordinates.forEach((coordinate) => {
        bounds.extend(coordinate);
      });
    });
    return bounds;
  }, [mapData]);

  /* Calculate the maximum bounds of the map */
  const maxBounds = useMemo(() => {
    const bounds = new LngLatBounds();

    bounds.extend(buildingBounds.getNorthEast());
    bounds.extend(buildingBounds.getSouthWest());

    /* Include all static map features */
    staticMapFeatures.features.forEach((feature) => {
      if (feature.geometry.type === "MultiPolygon") {
        feature.geometry.coordinates[0].forEach((polygon) => {
          polygon.forEach((coordinate) => {
            bounds.extend(coordinate as [number, number]);
          });
        });
      }
      if (feature.geometry.type === "Point") {
        bounds.extend(feature.geometry.coordinates as [number, number]);
      }
    });

    /* Extend the bounds to include some extra space */
    const extendAmount = 0.03;
    bounds.extend([
      buildingBounds.getNorthEast().lng + extendAmount,
      buildingBounds.getNorthEast().lat + extendAmount / 2,
    ]);
    bounds.extend([
      buildingBounds.getSouthWest().lng - extendAmount,
      buildingBounds.getSouthWest().lat - extendAmount / 5,
    ]);
    return bounds;
  }, [buildingBounds]);

  /* Controls the zoom levels at which the buildings, booths and articles become visible */

  const buildingZoomLevel = 14;
  const boothZoomLevel = 16.5;
  const boothNameZoomLevel = 17.7;
  const maxZoomLevel = 22;

  /* Generate the GeoJSON for the buildings, booths and articles */
  const buildingsGeoJSON = useMemo(() => generateBuildingsGeoJSON(mapData), [mapData]);
  const boothsGeoJSON = useMemo(() => generateBoothsGeoJSON(mapData), [mapData]);

  // Determine the active color based on the filter
  const activeColorValue = useMemo(() => {
    if (!activeFilter) return "#582d52";
    if (activeFilter.includes("wshu")) return "#93415A";
    if (activeFilter.includes("osztv")) return "#71376A";
    if (activeFilter.includes("nak")) return "#703346";
    return "#904E96"; // other
  }, [activeFilter]);

  // Determine the filter match expression

  const filterMatchExpression = useMemo<any>(() => {
    if (!activeFilter) return ["literal", true];
    if (activeFilter.includes("wshu")) return ["get", "hasWshu"];
    if (activeFilter.includes("osztv")) return ["get", "hasOsztv"];
    if (activeFilter.includes("nak")) return ["get", "hasNak"];
    return ["get", "hasOther"];
  }, [activeFilter]);

  /** Handle category selection from search panel */
  const handleCategorySelect = useCallback((slugPrefix: string | null) => {
    setActiveFilter(slugPrefix);
    if (slugPrefix) {
      setActivePoiType(null);
      setSelectedBoothId(null);
    }
  }, []);

  /** Handle POI type selection — fit map to bounds of all matching POIs */
  const handlePoiTypeSelect = useCallback((poiType: string | null) => {
    setActivePoiType(poiType);
    if (poiType) {
      setActiveFilter(null);
      setSelectedBoothId(null);
    }
    if (poiType && mapRef.current) {
      const matchingFeatures = staticMapFeatures.features.filter(
        (f) =>
          f.properties.type === "poi" && (f.properties as { poiType?: string }).poiType === poiType
      );
      if (matchingFeatures.length > 0) {
        const bounds = new LngLatBounds();
        matchingFeatures.forEach((f) => {
          if (f.geometry.type === "Point") {
            bounds.extend(f.geometry.coordinates as [number, number]);
          }
        });
        mapRef.current.getMap().fitBounds(bounds, { padding: 120, maxZoom: 18 });
      }
    }
  }, []);

  const handleBoothSelect = useCallback(
    (boothId: string) => {
      const feature = boothsGeoJSON.features.find((f) => f.properties.id === boothId);
      if (feature) {
        setIsDismissing(false);
        setSelectedBoothId(boothId);
        setActiveFilter(null);
        setActivePoiType(null);

        if (feature.geometry.type === "Polygon") {
          const coordinates = feature.geometry.coordinates[0];
          const bounds = new LngLatBounds();
          coordinates.forEach((coord) => {
            bounds.extend(coord as [number, number]);
          });

          const imageRotate = feature.properties.imageRotate;
          const bearing = imageRotate && imageRotate !== false ? (imageRotate as number) : 0;

          if (!selectedBoothId) {
            setReturnToMapState({
              center: mapRef.current?.getMap().getCenter() as LngLat,
              zoom: mapRef.current?.getMap().getZoom() as number,
              pitch: mapRef.current?.getMap().getPitch() as number,
              bearing: mapRef.current?.getMap().getBearing() as number,
            });
          }

          mapRef.current?.getMap().fitBounds(bounds, {
            padding: 100,
            offset: isMobile ? [0, -80] : [80, 0],
            bearing,
          });
        }
      }
    },
    [boothsGeoJSON, selectedBoothId, isMobile]
  );

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={{
          pitch: 0,
          bounds: buildingBounds,
          fitBoundsOptions: {
            padding: 60,
          },
        }}
        minPitch={0}
        maxPitch={60}
        maxZoom={maxZoomLevel}
        minZoom={buildingZoomLevel}
        maxBounds={maxBounds}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://tiles.openfreemap.org/styles/positron"
        onLoad={onMapLoad}
        interactiveLayerIds={["booths-fill", "buildings"]}
        onMouseMove={onHover}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        onMoveEnd={onMoveEnd}
        cursor={cursor}
        attributionControl={false}
      >
        <Source id="static-features" type="geojson" data={staticMapFeatures}>
          {/* Hungexpo területe */}
          <Layer
            id="outline"
            type="line"
            filter={["==", "type", "outline"]}
            paint={{
              "line-color": "#000",
              "line-opacity": 0.5,
              "line-width": 3,
            }}
          />
          <Layer
            id="outline-fill"
            type="fill"
            filter={["==", "type", "outline"]}
            paint={{
              "fill-color": "#000",
              "fill-opacity": 0.03,
            }}
          />

          {/* Hungexpo kapuk */}
          <Layer
            id="gates"
            type="symbol"
            filter={["==", "type", "gate"]}
            layout={{
              "text-field": ["get", "name"],
              "text-font": ["montserratBold"],
              "text-transform": "uppercase",
              "text-anchor": "center",
              "text-justify": "center",
              "icon-image": "arrow_upward",
              "icon-size": ["interpolate", ["exponential", 2], ["zoom"], 16, 0.15, 19, 0.25],
              "text-size": ["interpolate", ["exponential", 2], ["zoom"], 16, 14, 19, 18],
              "icon-anchor": "center",
              "icon-rotate": ["get", "rotate"],
              "icon-rotation-alignment": "map",
              "text-rotate": ["get", "rotate"],
              "text-rotation-alignment": "map",
              "icon-allow-overlap": true,
            }}
            paint={{
              "text-color": "#000",
              "text-halo-color": "#fff",
              "text-halo-width": 2,
              "icon-translate-anchor": "map",
            }}
          />

          {/* Metróállomások */}
          <Layer
            id="metro2"
            type="symbol"
            filter={["==", "type", "metro2"]}
            layout={{
              "icon-image": "metro2",
              "icon-size": 0.2,
              "text-field": ["get", "name"],
              "text-size": ["interpolate", ["exponential", 2], ["zoom"], 16, 12, 19, 18],
              "text-font": ["montserratBold"],
              "text-transform": "uppercase",
              "text-anchor": "top",
              "icon-anchor": "bottom",
              "text-justify": "auto",
            }}
            paint={{
              "text-color": "#000",
              "text-halo-color": "#fff",
              "text-halo-width": 2,
            }}
          />

          {/* POI markers */}
          <Layer
            id="poi-icons"
            type="symbol"
            filter={["==", "type", "poi"]}
            layout={{
              "icon-image": ["get", "icon"],
              "icon-size": [
                "interpolate",
                ["exponential", 2],
                ["zoom"],
                boothZoomLevel,
                ["*", ["get", "size"], 0.13],
                maxZoomLevel,
                ["*", ["get", "size"], 3],
              ],
              "icon-anchor": "center",
              "icon-allow-overlap": true,
              "icon-rotation-alignment": "map",
            }}
            paint={{
              "icon-opacity": [
                "case",
                ["==", ["get", "poiType"], activePoiType ?? ""],
                1,
                activePoiType ? 0.3 : 0.8,
              ],
            }}
            minzoom={boothZoomLevel}
          />
        </Source>
        <Source id="buildings" type="geojson" data={buildingsGeoJSON}>
          {/* Épületek */}
          <Layer
            id="buildings"
            type="fill-extrusion"
            filter={["==", "type", "building"]}
            paint={{
              "fill-extrusion-color": [
                "case",
                ["==", ["get", "id"], hoveredBuildingId ?? ""],
                ["get", "hoverColor"],
                ["get", "color"],
              ],
              "fill-extrusion-height": 20,
              "fill-extrusion-base": 0,
            }}
            minzoom={buildingZoomLevel}
            maxzoom={boothZoomLevel}
          />
          <Layer
            id="buildings-floor"
            type="fill"
            filter={["==", "type", "building"]}
            paint={{
              "fill-color": ["get", "color"],
              "fill-opacity": 0.2,
            }}
            minzoom={boothZoomLevel}
          />
          <Layer
            id="buildings-floor-outline"
            type="line"
            filter={["==", "type", "building"]}
            paint={{
              "line-color": ["get", "color"],
              "line-width": 3,
            }}
            minzoom={boothZoomLevel}
          />
          <Layer
            id="buildings-labels"
            type="symbol"
            filter={["==", "type", "building"]}
            layout={{
              "text-field": ["get", "name"],
              "text-size": ["interpolate", ["exponential", 2], ["zoom"], 14, 8, 20, 300],
              "text-font": ["montserratBold"],
              "text-transform": "uppercase",
              "text-anchor": "center",
              "text-justify": "center",
              "text-allow-overlap": true,
            }}
            paint={{
              "text-color": "#fff",
              "text-halo-color": ["get", "color"],
              "text-halo-width": 2,
            }}
            minzoom={buildingZoomLevel}
            maxzoom={boothZoomLevel}
          />
        </Source>
        <Source id="booths" type="geojson" data={boothsGeoJSON}>
          <Layer
            id="booths-fill"
            type="fill-extrusion"
            filter={["==", "type", "booth"]}
            paint={{
              "fill-extrusion-color": activePoiType
                ? ["case", ["!=", ["get", "image"], false], "#e8e8e8", "#d0d0d0"]
                : activeFilter
                  ? [
                      "case",
                      filterMatchExpression,
                      // Matching booths: normal vivid colors
                      [
                        "case",
                        ["!=", ["get", "image"], false],
                        [
                          "case",
                          ["==", ["get", "id"], selectedBoothId ?? ""],
                          "#e0e0e0",
                          ["==", ["get", "id"], hoveredBoothId],
                          "#f0f0f0",
                          "#ffffff",
                        ],
                        [
                          "case",
                          ["==", ["get", "id"], selectedBoothId ?? ""],
                          "#93415a",
                          ["==", ["get", "id"], hoveredBoothId],
                          "#904e96",
                          activeColorValue,
                        ],
                      ],
                      // Non-matching booths: faded grey
                      ["case", ["!=", ["get", "image"], false], "#e8e8e8", "#d0d0d0"],
                    ]
                  : [
                      "case",
                      ["!=", ["get", "image"], false],
                      [
                        "case",
                        ["==", ["get", "id"], selectedBoothId ?? ""],
                        "#e0e0e0",
                        ["==", ["get", "id"], hoveredBoothId],
                        "#f0f0f0",
                        "#ffffff",
                      ],
                      [
                        "case",
                        ["==", ["get", "id"], selectedBoothId ?? ""],
                        "#93415a", // Selected/Active color (maybe should depend on category? keeping simple for now)
                        ["==", ["get", "id"], hoveredBoothId],
                        "#904e96", // Hover color
                        "#582d52", // Default Dark Purple
                      ],
                    ],
              "fill-extrusion-height": 0.3,
              "fill-extrusion-base": 0,
            }}
            minzoom={boothZoomLevel}
          />
          {boothImagesLoaded && (
            <Layer
              id="booths-images"
              type="symbol"
              filter={["all", ["==", "type", "booth"], ["!=", "imageId", false]]}
              layout={{
                "icon-image": ["get", "imageId"],
                "icon-size": [
                  "interpolate",
                  ["exponential", 2],
                  ["zoom"],
                  boothZoomLevel,
                  // 256 * 2^16.5 / (360 * 1280) * 1.4 ≈ 72.09
                  ["*", ["get", "boothSizeDeg"], 72.09],
                  maxZoomLevel,
                  // 256 * 2^22 / (360 * 1280) * 1.4 ≈ 3262.24
                  ["*", ["get", "boothSizeDeg"], 3262.24],
                ],
                "icon-rotate": [
                  "case",
                  ["!=", ["get", "imageRotate"], false],
                  ["get", "imageRotate"],
                  0,
                ],
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
                "icon-rotation-alignment": "map",
                "icon-pitch-alignment": "map",
              }}
              paint={{
                "icon-opacity": activePoiType
                  ? 0.15
                  : activeFilter
                    ? ["case", filterMatchExpression, 1, 0.15]
                    : 1,
              }}
              minzoom={boothZoomLevel}
            />
          )}
          <Layer
            id="booths-labels"
            type="symbol"
            filter={["all", ["==", "type", "booth"], ["==", "image", false]]}
            layout={{
              "text-field": ["get", "name"],
              "text-size": [
                "interpolate",
                ["exponential", 2],
                ["zoom"],
                boothZoomLevel,
                5,
                maxZoomLevel,
                60,
              ],
              "text-font": ["montserratBold"],
              "text-rotation-alignment": "viewport",
              "text-anchor": ["case", ["==", ["get", "code"], false], "center", "top"],
              "text-justify": "center",
              "text-offset": [0, 0.2],
              "text-max-width": Infinity,
            }}
            paint={{
              "text-color": activePoiType
                ? "#555"
                : activeFilter
                  ? ["case", filterMatchExpression, "#fff", "#555"]
                  : "#fff",
              "text-halo-color": activePoiType
                ? "#fff"
                : activeFilter
                  ? ["case", filterMatchExpression, activeColorValue, "#fff"]
                  : "#934c8a",
              "text-halo-width": 1,
              "text-opacity": activePoiType
                ? 0.5
                : activeFilter
                  ? ["case", filterMatchExpression, 1, 0.5]
                  : 1,
            }}
            minzoom={boothNameZoomLevel}
          />
          <Layer
            id="booths-numbers-center"
            type="symbol"
            filter={["all", ["==", "type", "booth"], ["!=", "code", false]]}
            layout={{
              "text-field": ["get", "code"],
              "text-size": [
                "interpolate",
                ["exponential", 2],
                ["zoom"],
                boothZoomLevel,
                10,
                maxZoomLevel,
                80,
              ],
              "text-font": ["montserratBold"],
              "text-rotation-alignment": "viewport",
              "text-anchor": "center",
              "text-justify": "center",
              "text-ignore-placement": true,
              "text-offset": [0, 0],
            }}
            paint={{
              "text-color": activePoiType
                ? "#555"
                : activeFilter
                  ? [
                      "case",
                      filterMatchExpression,
                      ["case", ["!=", ["get", "image"], false], activeColorValue, "#fff"],
                      "#555",
                    ]
                  : "#fff",
              "text-halo-color": activePoiType
                ? "#fff"
                : activeFilter
                  ? [
                      "case",
                      filterMatchExpression,
                      ["case", ["!=", ["get", "image"], false], "#fff", activeColorValue],
                      "#fff",
                    ]
                  : "#934c8a",
              "text-halo-width": 1,
              "text-opacity": activePoiType
                ? 0.5
                : activeFilter
                  ? ["case", filterMatchExpression, 1, 0.5]
                  : 1,
            }}
            minzoom={boothZoomLevel}
            maxzoom={boothNameZoomLevel}
          />
          <Layer
            id="booths-numbers"
            type="symbol"
            filter={["all", ["==", "type", "booth"], ["!=", "code", false]]}
            layout={{
              "text-field": ["get", "code"],
              "text-size": [
                "interpolate",
                ["exponential", 2],
                ["zoom"],
                boothZoomLevel,
                10,
                maxZoomLevel,
                80,
              ],
              "text-font": ["montserratBold"],
              "text-rotation-alignment": "viewport",
              "text-anchor": "center",
              "text-justify": "center",
              "text-ignore-placement": true,
              "text-offset": [0, -0.5],
            }}
            paint={{
              "text-color": activePoiType
                ? "#555"
                : activeFilter
                  ? [
                      "case",
                      filterMatchExpression,
                      ["case", ["!=", ["get", "image"], false], activeColorValue, "#fff"],
                      "#555",
                    ]
                  : "#fff",
              "text-halo-color": activePoiType
                ? "#fff"
                : activeFilter
                  ? [
                      "case",
                      filterMatchExpression,
                      ["case", ["!=", ["get", "image"], false], "#fff", activeColorValue],
                      "#fff",
                    ]
                  : "#934c8a",
              "text-halo-width": 1,
              "text-opacity": activePoiType
                ? 0.5
                : activeFilter
                  ? ["case", filterMatchExpression, 1, 0.5]
                  : 1,
            }}
            minzoom={boothNameZoomLevel}
          />
        </Source>
      </Map>
      {selectedBooth && (
        <BoothDetailPanel
          boothTitle={selectedBooth.title}
          boothCode={selectedBooth.code}
          articles={selectedBooth.articles}
          requestClose={isDismissing}
          onClose={() => {
            setSelectedBoothId(null);
            setIsDismissing(false);
          }}
          onCloseStart={() => {
            if (returnToMapState) {
              mapRef.current?.getMap().flyTo({
                center: returnToMapState.center,
                zoom: returnToMapState.zoom,
                pitch: returnToMapState.pitch,
                bearing: returnToMapState.bearing,
              });
              setReturnToMapState(null);
            }
          }}
        />
      )}
      <MapSearchPanel
        activeFilter={activeFilter}
        activePoiType={activePoiType}
        onCategorySelect={handleCategorySelect}
        onPoiTypeSelect={handlePoiTypeSelect}
        booths={allBooths}
        onBoothSelect={handleBoothSelect}
      />
    </>
  );
};

export default InteractiveMap;
