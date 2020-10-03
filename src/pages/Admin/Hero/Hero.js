import React from "react";
import { H1, GridCol, Grid } from "@holism/core";
import logoGPB from "../../../assets/img/logoGPB.svg";

const Hero = ({ data }) => {
  return (
    <div className="content is-hero">
      <Grid>
        <GridCol offset={33} column={33}>
          <span>
            <img src={logoGPB} alt="ГазПромБанк logo" />
            <H1 className="is-hero-title">
              {data.heroTitle}
            </H1>
          </span>
        </GridCol>
        <GridCol offset={25} column={50}>
          <H1 className="is-hero-text">{data.heroHeader}</H1>
        </GridCol>
      </Grid>
    </div>
  );
};

export default Hero;
