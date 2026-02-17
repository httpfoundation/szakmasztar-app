"use client";

import Map, { Layer, Source } from "react-map-gl/maplibre";
import type { MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useCallback, useMemo, useRef, useState } from "react";
import { LngLatBounds } from "maplibre-gl";
import type { MapLayerMouseEvent, ViewStateChangeEvent } from "react-map-gl/maplibre";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import BoothDetailPanel from "./BoothDetailPanel";
import { generateBoothsGeoJSON, generateBuildingsGeoJSON } from "./mapHelpers";
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
      x: number;
      y: number;
      width: number;
      height: number;
      articleIds: string[];
    }[];
    articles: {
      id: string;
      title: string;
      x: number;
      y: number;
      width: number;
      height: number;
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
  const [isDismissing, setIsDismissing] = useState(false);
  const [cursor, setCursor] = useState<string | undefined>(undefined);

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
      const images = [
        ["arrow_upward", "/images/arrow_upward_256dp_000_FILL0_wght400_GRAD0_opsz48.png"],
        ["metro2", "/images/Budapest_M2_Metro_s.png"],
        ["wshu", "/images/wshu.png"],
        ["szakmabemutato", "/images/szakmabemutato.png"],
        ["osztv-szktv", "/images/osztv-szktv.png"],
        ["wshu-sm", "/images/wshu-sm.png"],
        ["szakmabemutato-sm", "/images/szakmabemutato-sm.png"],
        ["osztv-szktv-sm", "/images/osztv-szktv-sm.png"],
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

      images.forEach(async ([name, path]) => {
        const image = await map.loadImage(path);
        map.addImage(name, image.data);
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
  const articleZoomLevel = 19;
  const maxZoomLevel = 22;

  /* Generate the GeoJSON for the buildings, booths and articles */
  const buildingsGeoJSON = useMemo(() => generateBuildingsGeoJSON(mapData), [mapData]);
  const boothsGeoJSON = useMemo(() => generateBoothsGeoJSON(mapData), [mapData]);
  // const articlesGeoJSON = useMemo(() => generateArticlesGeoJSON(mapData), [mapData]);

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
                "#B87300", // Selected color
                ["==", ["get", "id"], hoveredBoothId],
                "#D98E04", // Hover color
                "#f4b02a", // Default color
              ],
              "fill-extrusion-height": 2,
              "fill-extrusion-base": 0,
            }}
            minzoom={boothZoomLevel}
            // maxzoom={articleZoomLevel}
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
                articleZoomLevel,
                15,
              ],
              "text-font": ["montserrat"],
              "text-allow-overlap": true,
              "text-rotation-alignment": "viewport",
              "text-line-height": 1.2,
              "text-max-width": ["get", "textMaxWidth"],
              "icon-image": ["get", "combinedIcon"],
              "icon-size": [
                "interpolate",
                ["exponential", 2],
                ["zoom"],
                boothZoomLevel,
                0.04,
                articleZoomLevel,
                0.15,
              ],
              "text-anchor": "top",
              "icon-anchor": "bottom",
              "text-optional": true,
              "icon-optional": false,
            }}
            paint={{
              "text-color": "#000",
              "text-halo-color": "#6f6f6fff",
              "text-halo-width": 0,
            }}
            minzoom={boothZoomLevel}
            maxzoom={articleZoomLevel}
          />
          <Layer
            id="booths-articles-labels"
            type="symbol"
            filter={["==", "type", "booth"]}
            layout={{
              "text-field": ["get", "articleNames"],
              "text-size": [
                "interpolate",
                ["exponential", 2],
                ["zoom"],
                articleZoomLevel,
                10,
                maxZoomLevel,
                40,
              ],
              "text-font": ["montserrat"],
              "text-anchor": "center",
              "text-justify": "center",
              "text-allow-overlap": true,
              "text-rotation-alignment": "viewport",
              "text-line-height": 1.2,
              "text-max-width": 18,
            }}
            paint={{
              "text-color": "#000",
              "text-halo-color": "#6f6f6fff",
              "text-halo-width": 0,
            }}
            minzoom={articleZoomLevel}
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
        />
      )}
    </>
  );
};

export default InteractiveMap;
