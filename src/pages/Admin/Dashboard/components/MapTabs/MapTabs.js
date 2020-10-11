import React, {useState} from "react";
import Tabs from "../../../../../components/Tabs";
import {
    CurrentAtmMap,
    PeopleFlowMap,
    RadiusMap
} from "../index";

const tabItems = [
    {
        id: "currentATM",
        label: "Текущее расположение банкоматов",
        isActive: true,
    },
    {
        id: "radiusATM",
        label: "Радиус банкоматов",
        isActive: false
    },
    {
        id: "humanflowATM",
        label: "С передвижением людей",
        isActive: false
    },
];

const MapTabs = ({data}) => {
    const [activeTab, setActiveTab] = useState("currentATM");

    const tabList = {
        currentATM: <CurrentAtmMap
            data={data}
        />,
        radiusATM: <RadiusMap
            data={data}
        />,
        humanflowATM: <PeopleFlowMap
            data={data}
        />
    };

    const current_tab = get_current_tab(tabList, activeTab);

    const updateActiveTab = (value) => {
        setActiveTab(value);
    };

    return (
        <div className="section">
            <Tabs
                items={tabItems}
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