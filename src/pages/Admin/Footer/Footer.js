import React from "react";
import { H2, Text, GridCol, Grid } from "@holism/core";

const Footer = () => {
  return (
    <div className="content">
      <H2>Исходные данные</H2>
      <Grid>
        <GridCol>
          <Text>Google Places</Text>
          <Text>OpenStreetMaps</Text>
        </GridCol>
        <GridCol>
          <Text>Yandex Maps</Text>
          <Text>Statdata.ru</Text>
        </GridCol>
      </Grid>
    </div>
  );
};

export default Footer;
