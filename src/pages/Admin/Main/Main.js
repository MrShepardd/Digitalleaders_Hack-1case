import React from "react";
import Tabs from "../../../components/Tabs";
import Map from "../Map";
import Hero from "../Hero";

const Main = () => {
  let data = {
    heroTitle: "Меркурий",
    heroHeader:
      "Геоинформационная система для отслеживания избытка или недостаточности банкоматов Банка в городах присутствия",
    
  };

  return (
    <div className="content">
      <Hero data={data}></Hero>

      <Tabs></Tabs>

      <Map></Map>
    </div>
  );
};

export default Main;
