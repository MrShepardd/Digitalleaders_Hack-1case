import React from "react";
import Tabs from "../../../components/Tabs";
import Map from "../Map";
import Hero from "../Hero";
import Footer from "../Footer";
import PeopleFlowMap from "../PeopleFlowMap";

const Main = () => {
  let data = {
    heroTitle: "Меркурий",
    heroHeader:
      "Геоинформационная система для отслеживания избытка или недостаточности банкоматов Банка в городах присутствия",
  };

  return (
    <div className="content">
        <Hero data={data}></Hero>

        <div className="section">
            <Tabs></Tabs>

            <Map></Map>

            <PeopleFlowMap/>
        </div>

        <Footer></Footer>

    </div>
  );
};

export default Main;
