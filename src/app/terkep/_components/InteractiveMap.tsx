"use client";

import Map, { Layer, Source } from "react-map-gl/maplibre";
import type { MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useCallback, useMemo, useRef } from "react";
import { LngLatBounds } from "maplibre-gl";
import type { EventMapItem } from "@/actions/articles/articles";
import { calculateInitialBounds, generateBoothsGeoJSON } from "./mapHelpers";
import { staticMapFeatures } from "./staticMapFeatures";

const InteractiveMap = ({ mapItems }: { mapItems: EventMapItem[] }) => {
  const mapRef = useRef<MapRef>(null);

  const onMapLoad = useCallback(async () => {
    const map = mapRef.current?.getMap();
    if (map) {
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

      const images = [
        ["arrow_upward", "/images/arrow_upward_256dp_000_FILL0_wght400_GRAD0_opsz48.png"],
        ["metro2", "/images/Budapest_M2_Metro.png"],
      ];

      images.forEach(async ([name, path]) => {
        const image = await map.loadImage(path);
        map.addImage(name, image.data);
      });
    }
  }, []);

  const buildingBounds = useMemo(calculateInitialBounds, []);
  const maxBounds = useMemo(() => {
    const bounds = new LngLatBounds();
    const amount = 0.02;
    bounds.extend([
      buildingBounds.getNorthEast().lng + amount,
      buildingBounds.getNorthEast().lat + amount / 2,
    ]);
    bounds.extend([
      buildingBounds.getSouthWest().lng - amount,
      buildingBounds.getSouthWest().lat - amount / 2,
    ]);
    return bounds;
  }, [buildingBounds]);

  // const outlineViewZoomLevel = 15;

  const insideViewZoomLevel = 17;

  const boothsGeoJSON = useMemo(() => generateBoothsGeoJSON(mapItems), [mapItems]);

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={{
          pitch: 0,
          bounds: buildingBounds,
          fitBoundsOptions: {
            padding: 100,
          },
        }}
        minPitch={0}
        maxPitch={60}
        maxZoom={19}
        minZoom={14}
        maxBounds={maxBounds}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="https://tiles.openfreemap.org/styles/positron"
        onLoad={onMapLoad}
      >
        <Source type="geojson" data={staticMapFeatures}>
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

          {/* Épületek */}
          <Layer
            id="buildings"
            type="fill-extrusion"
            filter={["==", "type", "building"]}
            paint={{
              "fill-extrusion-color": ["get", "color"],
              "fill-extrusion-height": 20,
              "fill-extrusion-base": 0,
              "fill-extrusion-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                insideViewZoomLevel - 0.1,
                1,
                insideViewZoomLevel,
                0,
              ],
              "fill-extrusion-opacity-transition": {
                duration: 1000,
              },
            }}
          />
          <Layer
            id="buildings-floor"
            type="fill"
            filter={["==", "type", "building"]}
            paint={{
              "fill-color": ["get", "color"],
              "fill-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                insideViewZoomLevel - 0.1,
                0,
                insideViewZoomLevel,
                0.2,
              ],
            }}
          />
          <Layer
            id="buildings-floor-outline"
            type="line"
            filter={["==", "type", "building"]}
            paint={{
              "line-color": ["get", "color"],
              "line-width": 3,
              "line-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                insideViewZoomLevel - 0.1,
                0,
                insideViewZoomLevel,
                0.8,
              ],
            }}
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
              "text-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                insideViewZoomLevel - 0.5,
                1,
                insideViewZoomLevel,
                0,
              ],
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
              "icon-size": ["interpolate", ["exponential", 2], ["zoom"], 16, 0.04, 19, 0.2],
              "icon-anchor": "center",
              "text-field": ["get", "name"],
              "text-size": ["interpolate", ["exponential", 2], ["zoom"], 16, 12, 19, 18],
              "text-font": ["montserratBold"],
              "text-transform": "uppercase",
              "text-anchor": "center",
              "text-justify": "center",
            }}
            paint={{
              "text-color": "#000",
              "text-halo-color": "#fff",
              "text-halo-width": 2,
            }}
          />
        </Source>

        {/* Standok */}
        <Source id="booths" type="geojson" data={boothsGeoJSON}>
          <Layer
            id="booths-fill"
            type="fill"
            paint={{
              "fill-color": ["get", "color"],
              "fill-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                insideViewZoomLevel - 0.5,
                0,
                insideViewZoomLevel,
                0.8,
              ],
            }}
          />
          <Layer
            id="booths-outline"
            type="line"
            paint={{
              "line-color": "#ffffff",
              "line-width": 1,
              "line-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                insideViewZoomLevel - 0.5,
                0,
                insideViewZoomLevel,
                1,
              ],
            }}
          />
          <Layer
            id="booths-labels"
            type="symbol"
            layout={{
              "text-field": ["get", "name"],
              "text-size": ["interpolate", ["exponential", 2], ["zoom"], 17, 8, 19, 14],
              "text-font": ["montserrat"],
              "text-anchor": "center",
              "text-justify": "center",
              "text-allow-overlap": true,
              "text-rotation-alignment": "map",
              "text-line-height": 1,
              "text-max-width": 8,
            }}
            paint={{
              "text-color": "#fff",
              "text-halo-width": 1,
              "text-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                insideViewZoomLevel,
                0,
                insideViewZoomLevel + 0.5,
                1,
              ],
            }}
          />
        </Source>
      </Map>
    </>
  );
};

export default InteractiveMap;
