import React from "react";
import Tabs from "../../../components/Tabs";
import RadiusMap from "../RadiusMap";
import Hero from "../Hero";
import Footer from "../Footer";

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

            <RadiusMap></RadiusMap>
        </div>

        <Footer></Footer>

    </div>
  );
};

export default Main;
