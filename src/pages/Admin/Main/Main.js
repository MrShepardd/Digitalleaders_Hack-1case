import React, { useState } from "react";
import Tabs from "../../../components/Tabs";
import CurrentAtmMap from "../CurrentAtmMap";
import Hero from "../Hero";
import Footer from "../Footer";
import PeopleFlowMap from "../PeopleFlowMap";
import RadiusMap from "../RadiusMap";

const Main = () => {
  let data = {
    heroTitle: "Меркурий",
    heroHeader:
      "Геоинформационная система для отслеживания избытка или недостаточности банкоматов Банка в городах присутствия",
  };

    const [activeTab, setActiveTab] = useState("currentATM");

    const updateActiveTab = (value) => {
        setActiveTab(value);
    };

    const tabList = {
        currentATM: <CurrentAtmMap/>,
        radiusATM: <RadiusMap/>,
        humanflowATM: <PeopleFlowMap/>
    };

    const current_tab = get_current_tab(tabList, activeTab);

  return (
    <div className="content">
        <Hero data={data}></Hero>

        <div className="section">
            <Tabs
                updateActiveTab={updateActiveTab}
            />

            {current_tab}

        </div>

        <Footer></Footer>

    </div>
  );
};

const get_current_tab = (tabList, tab) => {
    return !tab ? tabList[0] : tabList[tab];
};

export default Main;
