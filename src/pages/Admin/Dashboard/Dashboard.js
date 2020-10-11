import React, { useState } from "react";
import Tabs from "../../../components/Tabs";

import {
    Hero,
    CurrentAtmMap,
    PeopleFlowMap,
    RadiusMap,
    Footer
} from "../Dashboard/components";

const data = {
    heroTitle: "Меркурий",
    heroHeader:
        "Геоинформационная система для отслеживания избытка или недостаточности банкоматов Банка в городах присутствия",
};

const tabList = {
    currentATM: <CurrentAtmMap/>,
    radiusATM: <RadiusMap/>,
    humanflowATM: <PeopleFlowMap/>
};

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState("currentATM");

    const current_tab = get_current_tab(tabList, activeTab);

    const updateActiveTab = (value) => {
        setActiveTab(value);
    };

    return (
        <div className="content">
            <Hero data={data}/>

            <div className="section">
                <Tabs
                    updateActiveTab={updateActiveTab}
                />
                {current_tab}
            </div>

            <Footer/>
        </div>
    );
};

const get_current_tab = (tabList, tab) => {
    return !tab ? tabList[0] : tabList[tab];
};

export default Dashboard;
