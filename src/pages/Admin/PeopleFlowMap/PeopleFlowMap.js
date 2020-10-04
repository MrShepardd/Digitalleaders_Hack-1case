import React, {useState} from "react";
import {
    PolygonLayer,
    MapboxScene,
    LoadImage,
    PointLayer
} from "@antv/l7-react";
import { InputRange } from '@holism/core';

let json_data = require('../../../constants/flow_map.json');

const atmData = [
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

const get_time_key = (value) => {
    value = value === '24' ? 0 : value;
    const prefix = value < 10 ? '0' : '';
    return `${prefix}${value}:00:00`
};

const PeopleFlowMap = () => {

    const [postfix, setPostfix] = useState('час');
    const [rangeValue, setRangeValue] = useState('1');

    const data = {
        type: "FeatureCollection",
        features: get_time_key(rangeValue) in json_data ? json_data[get_time_key(rangeValue)] : [],
    };

    const polygonLayer = {
        key: "2",
        source:{
            data,
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

    const amtLayer = {
        key: "4",
        options: {
            autoFit: true,
        },
        source: {
            data: atmData,
            parser: {
                type: "json",
                x: "longitude",
                y: "latitude",
            },
        },
        shape: {
            values: ['00'],
        },
        size: {
            values: 10,
        },
        style: {
            opacity: 1,
        },
    };

    return (
        <div className="content">
            <MapboxScene
                map={{
                    center: [131.936867, 43.126133],
                    pitch: 4.0,
                    zoom: 10.55,
                    rotation: 0.313180925794313,
                    style: "normal",
                }}
                style={{
                    minHeight: "800px",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                <LoadImage
                    name="00"
                    url="https://img.icons8.com/office/80/000000/atm.png"
                />
                {atmData && <PointLayer {...amtLayer}></PointLayer>}
                {data && [
                    <PolygonLayer
                        {...polygonLayer}
                    />,
                ]}
            </MapboxScene>

            <InputRange
                value={rangeValue}
                onChange={(e, value) => {
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
                }}
                minValue={1}
                maxValue={24}
                ranges={[...Array(22)].map((e, i) => {return {value: i + 2}})}
                isOnlyRangesValues={true}
                postfix={postfix}
                placeholder="Выберите время"
                isMobile={true}
            />
        </div>
    );
};

export default PeopleFlowMap;
