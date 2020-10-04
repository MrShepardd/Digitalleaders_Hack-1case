import React from "react";
import { MapboxScene, PointLayer } from "@antv/l7-react";

const pointData = [
  {
    id: 0,
    latitude: 43.112017,
    longitude: 131.936956,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 1,
    latitude: 43.11597,
    longitude: 131.886069,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 2,
    latitude: 43.116595,
    longitude: 131.888456,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 3,
    latitude: 43.100363,
    longitude: 131.903895,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 4,
    latitude: 43.093367,
    longitude: 131.904474,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 5,
    latitude: 43.089615,
    longitude: 131.86105,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 6,
    latitude: 43.116595,
    longitude: 131.882742,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 7,
    latitude: 43.08795,
    longitude: 131.923319,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 8,
    latitude: 43.132651,
    longitude: 131.905409,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 9,
    latitude: 43.112916,
    longitude: 131.96141,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 10,
    latitude: 43.1129,
    longitude: 131.9289,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 11,
    latitude: 43.118918,
    longitude: 131.884218,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 12,
    latitude: 43.094045,
    longitude: 131.902813,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 13,
    latitude: 43.1139,
    longitude: 131.8898,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 14,
    latitude: 43.125591,
    longitude: 131.915403,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 15,
    latitude: 43.129493,
    longitude: 131.893219,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 16,
    latitude: 43.129239,
    longitude: 131.9399,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 17,
    latitude: 43.111988,
    longitude: 131.917537,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 18,
    latitude: 43.066881,
    longitude: 131.890182,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 19,
    latitude: 43.119366,
    longitude: 131.955715,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 20,
    latitude: 43.131521,
    longitude: 131.916383,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 21,
    latitude: 43.116042,
    longitude: 131.885351,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 22,
    latitude: 43.102603,
    longitude: 131.917861,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 23,
    latitude: 43.115665,
    longitude: 131.908792,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 24,
    latitude: 43.099829,
    longitude: 131.961823,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 25,
    latitude: 43.167572,
    longitude: 131.912115,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 26,
    latitude: 43.162529,
    longitude: 131.952493,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 27,
    latitude: 43.168161,
    longitude: 131.926286,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 28,
    latitude: 43.151359,
    longitude: 131.909065,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 29,
    latitude: 43.146283,
    longitude: 131.908903,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
  {
    id: 30,
    latitude: 43.1576,
    longitude: 131.9259,
    name: "\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0431\u0430\u043d\u043a",
  },
];

const data_r1 = {
  type: "FeatureCollection",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [],
};

const data_r2 = {
  type: "FeatureCollection",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [],
};

pointData.forEach((p) => {
  data_r1["features"].push({
    type: "Feature",
    properties: {
      id: p.id,
      name: p.name,
      mag: 5.0,
      felt: null,
    },
    geometry: { type: "Point", coordinates: [p.longitude, p.latitude, 0.0] },
  });
});

pointData.forEach((p) => {
  data_r2["features"].push({
    type: "Feature",
    properties: {
      id: p.id,
      name: p.name,
      mag: 7.0,
      felt: null,
    },
    geometry: { type: "Point", coordinates: [p.longitude, p.latitude, 0.0] },
  });
});

const RadiusMap = () => {
  return (
    <div className="content">
      <MapboxScene
        map={{
          pitch: 0,
          type: "amap",
          style: "normal",
          center: [140.067171, 36.26186],
          zoom: 5.32,
        }}
        style={{
          minHeight: "800px",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {data_r1 && (
          <PointLayer
            key={"1"}
            source={{
              data: data_r1,
            }}
            options={{
              autoFit: true,
            }}
            color={{
              field: "mag",
              values: (m) => {
                return m > 4.5 ? "#5B8FF9" : "#004fe3";
              },
            }}
            shape={{
              values: "circle",
            }}
            select={{
              option: { color: "#000" },
            }}
            size={{
              field: "mag",
              values: [1, 25],
            }}
            style={{
              opacity: 0.3,
              strokeWidth: 1,
            }}
            active={{
              option: {
                color: "#696969",
              },
            }}
          />
        )}
        {data_r2 && (
          <PointLayer
            key={"2"}
            source={{
              data: data_r2,
            }}
            options={{
              autoFit: true,
            }}
            color={{
              field: "mag",
              values: (m) => {
                return m > 4.5 ? "#3d59bf" : "#5CCEA1";
              },
            }}
            shape={{
              values: "circle",
            }}
            select={{
              option: { color: "#000" },
            }}
            size={{
              field: "mag",
              values: [1, 75],
            }}
            style={{
              opacity: 0.32,
              strokeWidth: 1,
            }}
            active={{
              option: {
                color: "#696969",
              },
            }}
          />
        )}
      </MapboxScene>
    </div>
  );
};

export default RadiusMap;
