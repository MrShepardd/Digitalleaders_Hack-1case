import React, {useState} from "react";
import { InputRange } from '@holism/core';
import gpb from "../../../../../assets/img/bank icons/gpb.svg";

import {
    PolygonLayer,
    MapboxScene,
    LoadImage,
    PointLayer
} from "@antv/l7-react";

const get_time_key = (value) => {
    value = value === '24' ? 0 : value;
    const prefix = value < 10 ? '0' : '';
    return `${prefix}${value}:00:00`
};

const PeopleFlowMap = ({data}) => {

    const {
        get_cluster_polygons,
        get_atm_location,
        get_people_flow
    } = data;

    const [postfix, setPostfix] = useState('час');
    const [rangeValue, setRangeValue] = useState('1');

    const flowData = {
        type: "FeatureCollection",
        features: get_time_key(rangeValue) in get_people_flow ? get_people_flow[get_time_key(rangeValue)] : [],
    };

    const clusterData = {
        type: "FeatureCollection",
        features: get_cluster_polygons,
    };

    const mapBoxLayer = {
        map: {
            center: [131.936867, 43.126133],
            pitch: 4.0,
            zoom: 10.55,
            rotation: 0.313180925794313,
            style: "normal",
        },
        style:{
            minHeight: "800px",
            justifyContent: "center",
            position: "relative",
        }
    };

    const polygonLayer = {
        key: "2",
        source:{
            data: flowData,
        },
        options: {
            autoFit: true,
        },
        size: {
            values: 1,
        },
        color: {
            field: "sum",
            values: (d) => {
                return d > 60 ?
                    "rgba(0, 81, 207, 2.30)"
                    : d > 50 ?
                        "rgba(0, 81, 207, 1.95)"
                        : d > 40 ?
                            "rgba(0, 81, 207, 1.85)"
                            : d > 30 ?
                                "rgba(0, 81, 207, 1.4)"
                                : d > 15 ?
                                    "rgba(0, 81, 207, 1.2)"
                                    : "rgba(0, 81, 207, 1.0)";
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
        }
    };

    const clusterLayer = {
        key: "5",
        source:{
            data: clusterData,
        },
        options: {
            autoFit: true,
        },
        size: {
            values: 1,
        },
        color: {
            field: "sum",
            values: (d) => {
                return "#A32B2B"
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
        }
    };

    const amtLayer = {
        key: "4",
        options: {
            autoFit: true,
        },
        source: {
            data: get_atm_location,
            parser: {
                type: "json",
                x: "longitude",
                y: "latitude",
            },
        },
        shape: {
            values: ["газпромбанк"],
        },
        size: {
            values: 10,
        },
        style: {
            opacity: 1,
        },
    };

    const handleInputRange = (e, value) => {
        if (value && value > '4') {
            setPostfix('часов');
        }
        if (value && value > '1' && value <= '4') {
            setPostfix('часа');
        }
        if (value && value === '1') {
            setPostfix('час');
        }

        setRangeValue(value);
    };

    const ranges = [...Array(22)].map((e, i) => {return {value: i + 2}})

    return (
        <div className="content">
            <MapboxScene {...mapBoxLayer}>
                <LoadImage
                    name="газпромбанк"
                    url={gpb}
                />

                {get_atm_location &&
                    <PointLayer {...amtLayer} />
                }

                {flowData && [
                    <PolygonLayer {...polygonLayer}/>
                ]}

                {clusterData && [
                    <PolygonLayer {...clusterLayer} />
                ]}
            </MapboxScene>

            <InputRange
                value={rangeValue}
                onChange={handleInputRange}
                minValue={1}
                maxValue={24}
                ranges={ranges}
                isOnlyRangesValues={true}
                postfix={postfix}
                placeholder="Выберите время"
                isMobile={true}
            />
        </div>
    );
};

export default PeopleFlowMap;
