import React, {useState} from "react";
import Tabs from "../../../../../components/Tabs";
import {
    CurrentAtmMap,
    PeopleFlowMap,
    RadiusMap
} from "../index";

const tabList = {
    currentATM: <CurrentAtmMap/>,
    radiusATM: <RadiusMap/>,
    humanflowATM: <PeopleFlowMap/>
};

const MapTabs = () => {
    const [activeTab, setActiveTab] = useState("currentATM");

    const current_tab = get_current_tab(tabList, activeTab);

    const updateActiveTab = (value) => {
        setActiveTab(value);
    };

    return (
        <div className="section">
            <Tabs
                updateActiveTab={updateActiveTab}
            />
            {current_tab}
        </div>
    )
};

const get_current_tab = (tabList, tab) => {
    return !tab ? tabList[0] : tabList[tab];
};

export default MapTabs;