"use client";

import Map, { Layer, Source } from "react-map-gl/maplibre";
import type { LngLat, MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useCallback, useMemo, useRef, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { LngLatBounds } from "maplibre-gl";
import type { MapLayerMouseEvent, ViewStateChangeEvent } from "react-map-gl/maplibre";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import BoothDetailPanel from "./BoothDetailPanel";
import {
  generateBoothsGeoJSON,
  generateBoothSymbolsGeoJSON,
  generateBuildingsGeoJSON,
  MAX_BOOTH_ARTICLES,
} from "./mapHelpers";
import { staticMapFeatures } from "./staticMapFeatures";

export interface InteractiveMapData {
  buildings: {
    id: string;
    name: string;
    color: string;
    hoverColor: string;
    svgWidth: number;
    svgHeight: number;
    coordinates: [number, number][];
    booths: {
      id: string;
      title: string;
      code: string;
      coordinates: [number, number][];
      articleIds: string[];
    }[];
    articles: {
      id: string;
      title: string;
      coordinates: [number, number][];
      slug: string;
    }[];
  }[];
}

interface InteractiveMapProps {
  mapData: InteractiveMapData;
  articlesById: Record<string, ArticleFragment>;
}

const InteractiveMap = ({ mapData, articlesById }: InteractiveMapProps) => {
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
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /* Handles hover events, setting hovered booth and building IDs to highlight them */
  const onHover = useCallback((event: MapLayerMouseEvent) => {
    const { features } = event;
    const hoveredBooth = features?.find((feature) => feature.properties?.type === "booth");
    const hoveredBuilding = features?.find((feature) => feature.properties?.type === "building");
    setHoveredBoothId(hoveredBooth ? (hoveredBooth.properties?.id as string) : null);
    setHoveredBuildingId(hoveredBuilding ? (hoveredBuilding.properties?.id as string) : null);
    if (hoveredBooth || hoveredBuilding) {
      setCursor("pointer");
    } else {
      setCursor(undefined);
    }
  }, []);

  /* Resets hovered booth and building IDs when mouse leaves the map */
  const onMouseLeave = useCallback(() => {
    setHoveredBoothId(null);
    setHoveredBuildingId(null);
    setCursor(undefined);
  }, []);

  /* Handles click events, setting selected booth ID to open the booth detail panel */
  const onClick = useCallback(
    (event: MapLayerMouseEvent) => {
      const { features } = event;
      const clickedBooth = features?.find((feature) => feature.properties?.type === "booth");

      if (clickedBooth) {
        setIsDismissing(false);
        setSelectedBoothId(clickedBooth.properties?.id as string);
        const geometry = clickedBooth.geometry;
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
            .fitBounds(bounds, { padding: 100, offset: isMobile ? [0, -80] : [80, 0] });
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
    [selectedBoothId]
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

  /* Returns the articles associated with the selected booth */
  const selectedBoothArticles = useMemo(() => {
    if (!selectedBooth) return [];
    return selectedBooth.articleIds
      .map((id) => articlesById[id])
      .filter((a): a is ArticleFragment => !!a);
  }, [selectedBooth, articlesById]);

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
      if (savedState) {
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
        ["wshu", "/images/wshu.png"],
        ["szakmabemutato", "/images/szakmabemutato.png"],
        ["osztv-szktv", "/images/osztv-szktv.png"],
        ["nak_osztv-szktv", "/images/nak_osztv-szktv.png"],
        ["nak_osztv-szktv_szakmabemutato", "/images/nak_osztv-szktv_szakmabemutato.png"],
        ["nak_osztv-szktv_szakmabemutato_wshu", "/images/nak_osztv-szktv_szakmabemutato_wshu.png"],
        ["nak_osztv-szktv_wshu", "/images/nak_osztv-szktv_wshu.png"],
        ["nak_szakmabemutato", "/images/nak_szakmabemutato.png"],
        ["nak_szakmabemutato_wshu", "/images/nak_szakmabemutato_wshu.png"],
        ["nak_wshu", "/images/nak_wshu.png"],
        ["osztv-szktv_szakmabemutato", "/images/osztv-szktv_szakmabemutato.png"],
        ["osztv-szktv_szakmabemutato_wshu", "/images/osztv-szktv_szakmabemutato_wshu.png"],
        ["osztv-szktv_wshu", "/images/osztv-szktv_wshu.png"],
        ["szakmabemutato_wshu", "/images/szakmabemutato_wshu.png"],
      ];

      /* Small inline icons — loaded with higher pixelRatio so they render smaller */
      const inlineImages: [string, string][] = [
        ["wshu-sm", "/images/wshu-sm.png"],
        ["szakmabemutato-sm", "/images/szakmabemutato-sm.png"],
        ["osztv-szktv-sm", "/images/osztv-szktv-sm.png"],
      ];

      /* Category SVG symbol images for booth watermarks */
      const symbolImages: [string, string][] = [
        ["wshu-symbol", "/images/wshu-symbol.svg"],
        ["osztv-symbol", "/images/osztv-symbol.svg"],
        ["sponsor-symbol", "/images/sponsor-symbol.svg"],
        ["nak-symbol", "/images/nak-symbol.svg"],
      ];

      images.forEach(async ([name, path]) => {
        const image = await map.loadImage(path);
        map.addImage(name, image.data);
      });

      inlineImages.forEach(async ([name, path]) => {
        const image = await map.loadImage(path);
        map.addImage(name, image.data, { pixelRatio: 1.5 });
      });

      /* Rasterize SVGs via Image + Canvas since MapLibre can't decode SVGs directly */
      const loadSvgAsImage = (src: string, size: number): Promise<ImageData> =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const aspect = img.naturalHeight / img.naturalWidth;
            const w = size;
            const h = Math.round(size * aspect);
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext("2d")!;
            ctx.drawImage(img, 0, 0, w, h);
            resolve(ctx.getImageData(0, 0, w, h));
          };
          img.onerror = reject;
          img.src = src;
        });

      symbolImages.forEach(async ([name, path]) => {
        try {
          const imageData = await loadSvgAsImage(path, 256);
          map.addImage(name, imageData);
        } catch (e) {
          console.error(`Failed to load symbol image: ${name}`, e);
        }
      });
    }
  }, []);

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
  const articleZoomLevel = 19;
  const maxZoomLevel = 22;

  /* Generate the GeoJSON for the buildings, booths and articles */
  const buildingsGeoJSON = useMemo(() => generateBuildingsGeoJSON(mapData), [mapData]);
  const boothsGeoJSON = useMemo(() => generateBoothsGeoJSON(mapData), [mapData]);
  const boothSymbolsGeoJSON = useMemo(() => generateBoothSymbolsGeoJSON(mapData), [mapData]);
  // const articlesGeoJSON = useMemo(() => generateArticlesGeoJSON(mapData), [mapData]);

  /* Build a format expression for article labels with inline category icons */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const articleFormatExpression = useMemo((): any => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const format: any[] = ["format"];
    for (let i = 0; i < MAX_BOOTH_ARTICLES; i++) {
      // Inline icon for the article (skipped if image not found)
      format.push(["image", ["coalesce", ["get", `article_${i}_icon`], ""]]);
      format.push({});
      // Article title text (empty string if slot unused)
      format.push(["coalesce", ["get", `article_${i}_text`], ""]);
      format.push({});
    }
    return format;
  }, []);

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={{
          pitch: 0,
          bounds: maxBounds,
          fitBoundsOptions: {
            padding: 100,
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
              "fill-extrusion-color": [
                "case",
                ["==", ["get", "id"], selectedBoothId ?? ""],
                "#93415a", // Selected color
                ["==", ["get", "id"], hoveredBoothId],
                "#904e96", // Hover color
                "#71376a", // Default color
              ],
              "fill-extrusion-height": 0,
              "fill-extrusion-base": 0,
            }}
            minzoom={boothZoomLevel}
          />

          <Layer
            id="booths-labels"
            type="symbol"
            filter={["==", "type", "booth"]}
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
              "text-anchor": "top",
              "text-justify": "center",
              "text-offset": [0, 0.2],
            }}
            paint={{
              "text-color": "#fff",
              "text-halo-color": "#934c8a",
              "text-halo-width": 1,
            }}
            minzoom={boothNameZoomLevel}
          />
          <Layer
            id="booths-numbers-center"
            type="symbol"
            filter={["==", "type", "booth"]}
            layout={{
              "text-field": ["get", "boothNumber"],
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
              "text-color": "#fff",
            }}
            minzoom={boothZoomLevel}
            maxzoom={boothNameZoomLevel}
          />
          <Layer
            id="booths-numbers"
            type="symbol"
            filter={["==", "type", "booth"]}
            layout={{
              "text-field": ["get", "boothNumber"],
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
              "text-color": "#fff",
            }}
            minzoom={boothNameZoomLevel}
          />
          {/* Full booth name — collision-checked, rendered on top of numbers */}
          {/* Where a name fits, its halo visually covers the number underneath */}
          {/*  <Layer
            id="booths-labels"
            type="symbol"
            filter={["==", "type", "booth"]}
            layout={{
              "text-field": ["get", "name"],
              "text-size": [
                "interpolate",
                ["exponential", 2],
                ["zoom"],
                boothZoomLevel,
                5,
                articleZoomLevel,
                13,
              ],
              "text-font": ["montserratMedium"],
              "text-allow-overlap": false,
              "text-rotation-alignment": "viewport",
              "text-line-height": 1.1,
              // "text-max-width": ["get", "textMaxWidth"],
              "text-anchor": "top",
              "text-padding": 0,
            }}
            paint={{
              "text-color": "#fff",
              "text-halo-color": "#f4b02a",
              // "text-halo-width": 4,
            }}
            minzoom={boothZoomLevel}
            maxzoom={articleZoomLevel}
          /> */}
        </Source>
        {/* Booth watermark symbols — placed near the bottom-right corner of each booth */}
        <Source id="booth-symbols" type="geojson" data={boothSymbolsGeoJSON}>
          <Layer
            id="booth-symbol-icons"
            type="symbol"
            layout={{
              "icon-image": ["get", "symbolIcon"],
              "icon-size": [
                "interpolate",
                ["exponential", 2],
                ["zoom"],
                boothZoomLevel,
                0.03,
                maxZoomLevel,
                0.7,
              ],
              "icon-anchor": "bottom-right",
              "icon-allow-overlap": true,
              "icon-ignore-placement": true,
              "icon-rotation-alignment": "map",
              "icon-pitch-alignment": "map",
            }}
            paint={{
              "icon-opacity": 0.8,
            }}
            minzoom={boothZoomLevel}
          />
        </Source>
      </Map>
      {selectedBooth && (
        <BoothDetailPanel
          boothTitle={selectedBooth.title}
          articles={selectedBoothArticles}
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
    </>
  );
};

export default InteractiveMap;
