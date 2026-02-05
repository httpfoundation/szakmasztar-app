"use client";

import Map, { Layer, Source } from "react-map-gl/maplibre";
import type { MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useCallback, useMemo, useRef } from "react";
import { Explore as ExploreIcon } from "@mui/icons-material";
import type { FillExtrusionLayerSpecification, SymbolLayerSpecification } from "maplibre-gl";
import { LngLatBounds } from "maplibre-gl";
import { EventMapItem } from "@/actions/articles/articles";

const szakmasztarMapData = {
  type: "FeatureCollection" as const,
  name: "szakmasztar-map-data",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature" as const,
      properties: { id: 1, name: "A Pavilon", type: "building", color: "#fdb913" },
      geometry: {
        type: "MultiPolygon" as const,
        coordinates: [
          [
            [
              [19.125504438450687, 47.494126740649946],
              [19.128142234025486, 47.494121222800096],
              [19.128140045803654, 47.493809679377392],
              [19.128346363862804, 47.49380841207833],
              [19.128342612625364, 47.493164620205214],
              [19.1257236236866, 47.493170534339697],
              [19.125726124511559, 47.493476378672661],
              [19.125501362868334, 47.493476801108365],
              [19.125504438450687, 47.494126740649946],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: 2, name: "D Pavilon", type: "building", color: "#732265" },
      geometry: {
        type: "MultiPolygon" as const,
        coordinates: [
          [
            [
              [19.124366750306862, 47.4939672862577],
              [19.125346565710949, 47.493971431369047],
              [19.125353208527216, 47.493312169741102],
              [19.125189443567574, 47.493311404073999],
              [19.125189638944519, 47.493283047981286],
              [19.12502399836616, 47.493282889567318],
              [19.12502337315992, 47.493315311616307],
              [19.124372025483417, 47.493313569063695],
              [19.124366750306862, 47.4939672862577],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: 3, name: "Kongresszusi Központ", type: "building", color: "#5e9984" },
      geometry: {
        type: "MultiPolygon" as const,
        coordinates: [
          [
            [
              [19.126020984642945, 47.492031767112628],
              [19.12668650374631, 47.492030331514805],
              [19.126686745984479, 47.491967219744858],
              [19.126844604527768, 47.491967056066066],
              [19.126841859161804, 47.491396168672118],
              [19.126683788660003, 47.491395854951065],
              [19.126683702867318, 47.491349054226113],
              [19.126026480421526, 47.491350849598788],
              [19.12602634416255, 47.491406521466253],
              [19.125870827254875, 47.491408332182012],
              [19.125874369988168, 47.49195602479768],
              [19.126019712892532, 47.491954551688373],
              [19.126020984642945, 47.492031767112628],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "Webfejlesztő", type: "booth" },
      geometry: {
        type: "MultiPolygon" as const,
        coordinates: [
          [
            [
              [19.126204016149515, 47.493665002612602],
              [19.126760256949424, 47.493667407323528],
              [19.126763365701024, 47.493422699033218],
              [19.126206899163996, 47.493425849790981],
              [19.126204016149515, 47.493665002612602],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "Grafikus", type: "booth" },
      geometry: {
        type: "MultiPolygon" as const,
        coordinates: [
          [
            [
              [19.126197192087108, 47.493770158209287],
              [19.127036904754615, 47.493770158209287],
              [19.127036904754615, 47.493946158083908],
              [19.126199296212555, 47.493938844235046],
              [19.126197192087108, 47.493770158209287],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "2. Kapu", type: "gate", rotate: 30 },
      geometry: {
        type: "Point" as const,
        coordinates: [19.123364303846227, 47.491661485734795],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "3. Kapu", type: "gate", rotate: -20 },
      geometry: {
        type: "Point" as const,
        coordinates: [19.128480072915814, 47.49149239671809],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "Pillangó utca", type: "metro2" },
      geometry: {
        type: "Point" as const,
        coordinates: [19.119977952137504, 47.50121466907854],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "Örs vezér tere", type: "metro2" },
      geometry: {
        type: "Point" as const,
        coordinates: [19.135853086522708, 47.50289728189773],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, type: "outline", name: "Hungexpo" },
      geometry: {
        type: "MultiPolygon" as const,
        coordinates: [
          [
            [
              [19.120680814508553, 47.495264487736733],
              [19.121271225558718, 47.49551178667101],
              [19.121703986332474, 47.495540799770275],
              [19.123438258985523, 47.495260850979037],
              [19.123693752908348, 47.495281701719911],
              [19.124315083986062, 47.495134897781156],
              [19.124619110988998, 47.495142398611634],
              [19.125356728582606, 47.495688683490592],
              [19.125606413786464, 47.496076129993654],
              [19.134961535036037, 47.493977665906876],
              [19.134383847846529, 47.492701117193427],
              [19.133053509639055, 47.492568320590415],
              [19.12991335739817, 47.49201762537438],
              [19.129255284491187, 47.49185174248445],
              [19.128675894214396, 47.491701221864503],
              [19.127841040852591, 47.491700186170675],
              [19.127839508074075, 47.491432803862679],
              [19.126923161988167, 47.491306275801499],
              [19.126840391948623, 47.491397417464263],
              [19.125870654077943, 47.491410881560135],
              [19.125871675930281, 47.491605592714414],
              [19.12439918670831, 47.491615259206803],
              [19.12424999626667, 47.491503403971684],
              [19.123557180380129, 47.49170087663321],
              [19.123563822420333, 47.491809969603338],
              [19.123295586181079, 47.491866414769497],
              [19.123249347362691, 47.491856403093081],
              [19.121773537120621, 47.492632474970456],
              [19.121378591191199, 47.492914177939447],
              [19.121429683808206, 47.493231782415734],
              [19.1215982894443, 47.493229365867194],
              [19.121814666677302, 47.493436325586039],
              [19.121803937227728, 47.493632064886533],
              [19.121760636234825, 47.493775761924454],
              [19.121740710114199, 47.493972794521042],
              [19.12174760761749, 47.494104839605676],
              [19.121449099002671, 47.494107428721655],
              [19.121449146902002, 47.49415060221191],
              [19.121203854441063, 47.494573823520149],
              [19.121007275597147, 47.494865678209415],
              [19.120680814508553, 47.495264487736733],
            ],
          ],
        ],
      },
    },
  ],
};

const calculateInitialBounds = () => {
  const bounds = new LngLatBounds();
  szakmasztarMapData.features.forEach((feature) => {
    if (feature.geometry.type === "MultiPolygon") {
      feature.geometry.coordinates.forEach((polygon) => {
        polygon[0].forEach((point) => {
          bounds.extend(point as [number, number]);
        });
      });
    }
  });
  return bounds;
};

const InteractiveMap = ({ mapItems }: { mapItems: EventMapItem[] }) => {
  const mapRef = useRef<MapRef>(null);

  const onMapLoad = useCallback(async () => {
    const map = mapRef.current?.getMap();
    if (map) {
      const layers = map.getStyle().layers;
      console.log(layers);
      const removeLayers = [
        // "landuse_residential",
        // "landcover_wood",
        // "highway_path",
        // "highway_minor",
        // "highway_major_casing",
        // "highway_major_inner",
        // "highway_major_subtle",
        // "highway_motorway_casing",
        // "highway_motorway_inner",
        // "highway_motorway_subtle",
        // "railway_transit",
        // "railway_transit_dashline",
        // "railway_service",
        // "railway_service_dashline",
        // "railway",
        // "railway_dashline",
        // "highway_motorway_bridge_casing",
        // "highway_motorway_bridge_inner",
        // "boundary_3",
        // "boundary_2",
        // "boundary_disputed",
        // "waterway_line_label",
        // "water_name_point_label",
        // "water_name_line_label",
        // "highway-name-path",
        // "highway-name-minor",
        // "highway-name-major",
        "highway-shield-non-us",
        // "highway-shield-us-interstate",
        // "road_shield_us",
        // "airport",
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

  const outlineViewZoomLevel = useMemo(() => {
    return 15;
  }, []);

  const insideViewZoomLevel = useMemo(() => {
    return 17;
  }, []);

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
        <Source type="geojson" data={szakmasztarMapData}>
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
                insideViewZoomLevel - 0.2,
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
                insideViewZoomLevel - 0.2,
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
                insideViewZoomLevel - 0.2,
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
      </Map>
    </>
  );
};

export default InteractiveMap;
