import React, { useState } from "react";
import Popup from './Popup'
import DistrictLayer from './DistrictLayer'
import AtmLayer from './AtmLayer'
import CrowdedPlaceLayer from './CrowdedPlaceLayer'
import {MapboxScene} from "@antv/l7-react";

const CurrentAtmMap = ({data}) => {
  const [popupInfo, setPopupInfo] = useState();

  const {
    get_district_location,
    get_all_atm_location,
    get_crowded_places,
    get_path_crowded_places
  } = data;

  function showPopup(args) {
    setPopupInfo({
      lnglat: args.lngLat,
      feature: args.feature,
    });
  }

  const mapBoxLayer = {
    map: {
      center: [131.936867, 43.126133],
      pitch: 4.0,
      zoom: 10.55,
      rotation: 0.313180925794313,
      style: "normal",
    },
    style: {
      minHeight: "800px",
      justifyContent: "center",
      position: "relative",
    }
  };

  return (
    <div className="content">
      <MapboxScene {...mapBoxLayer}>

        <Popup popupInfo={popupInfo}/>

        <DistrictLayer data={get_district_location} showPopup={showPopup}/>

        <AtmLayer data={get_all_atm_location} showPopup={showPopup}/>

        <CrowdedPlaceLayer data={get_crowded_places} pathData={get_path_crowded_places}/>

      </MapboxScene>
    </div>
  );
};

export default CurrentAtmMap;
