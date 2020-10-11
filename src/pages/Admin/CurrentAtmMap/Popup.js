import React from "react";
import {Popup as L7Popup} from "@antv/l7-react";

const Popup = ({popupInfo}) => {

    const popupOptions = {
        lnglat: popupInfo ? popupInfo.lnglat : null,
        className: "theme-dark",
        style: {
            padding: "0 0 0px 15px",
        }
    };

    const itemStyle = {
        margin: "5px 0 0 0",
        listStyle: "none",
    };

    return (
        <>
            {
                popupInfo &&
                    <L7Popup {...popupOptions} >
                        <h6 className="card-title">
                            {popupInfo.feature.properties ?
                                popupInfo.feature.properties.name
                                :
                                popupInfo.feature.name
                            }
                        </h6>
                        <ul style={itemStyle}>
                            <li className="description">
                                {popupInfo.feature.properties ?
                                    "Количество жителей: " + popupInfo.feature.properties.density
                                    :
                                    "Рейтинг: " + popupInfo.feature.rating
                                }
                            </li>
                        </ul>
                    </L7Popup>
            }
        </>
    )
};

export default Popup;