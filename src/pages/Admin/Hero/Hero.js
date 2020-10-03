import React from "react";
import { H1, GridCol, Grid } from "@holism/core";
import logoGPB from "../../../assets/img/logoGPB.svg";

const Hero = ({ data }) => {
  return (
    <div className="content">
      <Grid gapless={true}>
        <GridCol offset={33} column={33}>
          <img src={logoGPB} alt="ГазПромБанк logo" />
        </GridCol>
        <GridCol column={33}>
          <H1>{data.heroTitle}</H1>
        </GridCol>
        <GridCol offset={25} column={50}>
          <H1>{data.heroHeader}</H1>
        </GridCol>
      </Grid>
    </div>
  );
};

export default Hero;
