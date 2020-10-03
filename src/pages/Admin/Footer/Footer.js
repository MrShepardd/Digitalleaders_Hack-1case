import React from "react";
import { H1, Text, GridCol, Grid } from "@holism/core";

const Footer = () => {
  return (
    <div className="footer">
      <H1 className="title">Исходные данные</H1>
      <Grid>
        <GridCol>
          <Text className="description">Google Places</Text>
          <Text className="description">OpenStreetMaps</Text>
        </GridCol>
        <GridCol>
          <Text className="description">Yandex Maps</Text>
          <Text className="description">Statdata.ru</Text>
        </GridCol>
      </Grid>
    </div>
  );
};

export default Footer;
