import React, { useState, useEffect } from "react";
import { LineLayer, MapboxScene } from "@antv/l7-react";

const Map = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gw.alipayobjects.com/os/basement_prod/ee07641d-5490-4768-9826-25862e8019e1.json"
      );
      const raw = await response.json();
      setData(raw);
    };
    fetchData();
  }, []);

  return (
    <div className="content">
      <MapboxScene
        map={{
          center: [131.936867, 43.126133],
          pitch: 4.0,
          zoom: 10.55,
          rotation: 0.313180925794313,
          style: "dark",
        }}
        scene={{
          logoPosition: "topright",
          logoVisible: false,
        }}
        style={{
          minHeight: "800px",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {data && (
          <LineLayer
            key={"2"}
            source={{
              data,
              parser: {
                type: "json",
                coordinates: "path",
              },
            }}
            size={{
              values: 1,
            }}
            color={{
              values: [
                "#312B60",
                "#4A457E",
                "#615C99",
                "#816CAD",
                "#A67FB5",
                "#C997C7",
                "#DEB8D4",
                "#F5D4E6",
                "#FAE4F1",
                "#FFF3FC",
              ],
            }}
            shape={{
              values: "line",
            }}
            style={{
              opacity: 1,
            }}
          />
        )}
      </MapboxScene>
    </div>
  );
};

export default Map;
