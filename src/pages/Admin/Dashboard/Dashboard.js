import React, {useEffect, useCallback, useState} from "react";
import callApi from "../../../utils/call-api";
import {dashboardData} from '../../../constants/components_data'

import {
    Hero,
    Footer,
    MapTabs
} from "./components";

const heroData = {
    heroTitle: "Меркурий",
    heroHeader:
        "Геоинформационная система для отслеживания избытка или недостаточности банкоматов Банка в городах присутствия",
};

const Dashboard = () => {

    const [data, setData] = useState({});

    const updateData = (newData) => {
        setData(newData);
    };

    const receiveDashboard = useCallback(() => {
        callApi('/dashboard_data')
            .then(json => updateData(json))
            .catch(reason => {console.log(reason); updateData(dashboardData)});
    }, []);

    useEffect(() => {
        if (Object.keys(data).length !== 0)
            return;

        receiveDashboard();
    }, [data, receiveDashboard]);

    return (
        <div className="content">
            <Hero data={heroData}/>

            <MapTabs
                data={data}
            />

            <Footer/>
        </div>
    );
};

export default Dashboard;
