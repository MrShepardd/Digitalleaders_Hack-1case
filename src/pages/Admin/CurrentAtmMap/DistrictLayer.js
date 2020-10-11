import React from "react";

import {
    LineLayer,
    PolygonLayer,
    LayerEvent,
} from "@antv/l7-react";

const colors = [
    "rgba(0, 81, 207, 2.30)",
    "rgba(0, 81, 207, 1.95)",
    "rgba(0, 81, 207, 1.85)",
    "rgba(0, 81, 207, 1.4)",
    "rgba(0, 81, 207, 1.2)",
    "rgba(0, 81, 207, 1.0)",
];

const DistrictLayer = ({data, showPopup}) => {

    const polygonLayer = {
        key: "2",
        source: {
            data,
        },
        options: {
            autoFit: true,
        },
        size: {
            values: 1,
        },
        color: {
            field: "density",
            values: (d) => {
                return d > 155000
                    ? colors[0]
                    : d > 150000
                        ? colors[1]
                        : d > 140000
                            ? colors[2]
                            : d > 90000
                                ? colors[3]
                                : d > 50000
                                    ? colors[4]
                                    : colors[5];
            },
        },
        shape: {
            values: "fill",
        },
        select: {
            option: { color: "#000" },
        },
        style: {
            opacity: 0.3,
        },
        active: {
            option: {
                color: "#696969",
            },
        },
    };

    const lineLayer = {
        key: "21",
        source: {
            data,
        },
        color: {
            values: "#fff",
        },
        shape: {
            values: "line",
        },
    };

    return (
        <>
            {data && [
                <PolygonLayer {...polygonLayer}>
                    <LayerEvent type="mousemove" handler={showPopup} />
                </PolygonLayer>,
                <LineLayer {...lineLayer} />,
            ]}
        </>
    )
};

export default DistrictLayer;