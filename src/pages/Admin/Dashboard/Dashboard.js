import React  from "react";
import {
    Hero,
    Footer,
    MapTabs
} from "./components";

const data = {
    heroTitle: "Меркурий",
    heroHeader:
        "Геоинформационная система для отслеживания избытка или недостаточности банкоматов Банка в городах присутствия",
};

const Dashboard = () => {

    return (
        <div className="content">
            <Hero data={data}/>

            <MapTabs/>

            <Footer/>
        </div>
    );
};

export default Dashboard;
