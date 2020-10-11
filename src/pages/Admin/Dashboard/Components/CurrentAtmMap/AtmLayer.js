import React from "react";
import {
    LoadImage,
    PointLayer,
    LayerEvent,
} from "@antv/l7-react";
import gpb from "../../../../../assets/img/bank icons/gpb.svg";
import alpha from "../../../../../assets/img/bank icons/alpha.svg";
import vtb from "../../../../../assets/img/bank icons/vtb.svg";

const icon_list = [
    {
        name: 'газпромбанк',
        url: gpb
    },
    {
        name: 'альфабанк',
        url: alpha
    },
    {
        name: 'втб',
        url: vtb
    },
];

const renderIcons = () => (
    icon_list.map(icon =>
        <LoadImage
            name={icon.name}
            url={icon.url}
        />
    )
);

const AtmLayer = ({data, showPopup}) => {

    const icons = renderIcons();

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
            {icons}

            {data && (
                <PointLayer {...atmLayer}>
                    <LayerEvent type="mousemove" handler={showPopup} />
                </PointLayer>
            )}
        </>
    )
};

export default AtmLayer;