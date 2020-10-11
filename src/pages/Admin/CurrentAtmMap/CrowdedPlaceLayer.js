import React from "react";
import {
    LoadImage,
    PointLayer,
    LineLayer,
} from "@antv/l7-react";

const CrowdedPlaceLayer = ({data, pathData}) => {

    const placesLayer = {
        key: 1,
        options: {
            autoFit: true,
        },
        source: {
            data,
            parser: {
                type: "json",
                x: "longitude",
                y: "latitude",
            },
        },
        shape: {
            field: 'name',
            values: ["01"]
        },
        size: {
            values: 10,
        },
        style: {
            opacity: 1,
        },
    };

    const pathLayer = {
        key: "22",
        source: {
            data: pathData,
            parser: {
                type: "json",
                coordinates: "path",
            },
        },
        color: {
            field: "distance",
            values: ["#0A3663"],
        },
    };

    return (
        <>
            <LoadImage
                name="01"
                url={"https://img.icons8.com/color/48/000000/bus2.png"}
            />

            {pathData &&
                <LineLayer {...pathLayer} />
            }

            {data &&
                <PointLayer {...placesLayer}/>
            }
        </>
    )
};

export default CrowdedPlaceLayer;