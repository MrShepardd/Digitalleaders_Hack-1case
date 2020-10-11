import React from "react";
import {
    LoadImage,
    PointLayer,
    LayerEvent,
} from "@antv/l7-react";
import gpb from "../../../assets/img/bank icons/gpb.svg";
import alpha from "../../../assets/img/bank icons/alpha.svg";
import vtb from "../../../assets/img/bank icons/vtb.svg";

const AtmLayer = ({data, showPopup}) => {

    const atmLayer = {
        key: 0,
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
            values: ["газпромбанк", "альфабанк", "втб"]
        },
        size: {
            values: 10,
        },
        style: {
            opacity: 1,
        },
    };

    return (
        <>
            <LoadImage
                name="газпромбанк"
                url={gpb}
            />
            <LoadImage
                name="альфабанк"
                url={alpha}
            />
            <LoadImage
                name="втб"
                url={vtb}
            />

            {data && (
                <PointLayer {...atmLayer}>
                    <LayerEvent type="mousemove" handler={showPopup} />
                </PointLayer>
            )}
        </>
    )
};

export default AtmLayer;