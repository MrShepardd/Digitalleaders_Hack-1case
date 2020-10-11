import React from "react";
import { MapboxScene, PointLayer } from "@antv/l7-react";
import {get_atm_location} from '../../../../../constants/components_data'

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

Array.isArray(get_atm_location) && get_atm_location.forEach((p) => {
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

  const mapBoxLayer = {
    map: {
      pitch: 0,
          type: "amap",
          style: "normal",
          center: [140.067171, 36.26186],
          zoom: 5.32,
    },
    style: {
      minHeight: "800px",
          justifyContent: "center",
          position: "relative",
    }
  };

  const innerRadiusLayer = {
    key: "1",
    source: {
      data: data_r1,
    },
    options:{
      autoFit: true,
    },
    color: {
      field: "mag",
          values: (m) => {
        return m > 4.5 ? "#5B8FF9" : "#004fe3";
      },
    },
    shape: {
      values: "circle",
    },
    select: {
      option: { color: "#000" },
    },
    size:{
      field: "mag",
          values: [1, 25],
    },
    style: {
      opacity: 0.3,
          strokeWidth: 1,
    },
    active: {
      option: {
        color: "#696969",
      },
    }
  };

  const outerRadiusLayer = {
    key: "2",
    source: {
      data: data_r2,
    },
    options: {
      autoFit: true,
    },
    color: {
      field: "mag",
          values: (m) => {
        return m > 4.5 ? "#3d59bf" : "#5CCEA1";
      },
    },
    shape: {
      values: "circle",
    },
    select: {
      option: { color: "#000" },
    },
    size: {
      field: "mag",
          values: [1, 75],
    },
    style: {
      opacity: 0.32,
          strokeWidth: 1,
    },
    active: {
      option: {
        color: "#696969",
      },
    }
  };

  return (
    <div className="content">
      <MapboxScene {...mapBoxLayer}>
        {data_r1 && (
          <PointLayer {...innerRadiusLayer} />
        )}
        {data_r2 && (
          <PointLayer {...outerRadiusLayer} />
        )}
      </MapboxScene>
    </div>
  );
};

export default RadiusMap;
