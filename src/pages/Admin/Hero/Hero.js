import React from "react";
import { H1 } from "@holism/core";
import logoGPB from "../../../assets/img/icon-gpb-white.svg";

const Hero = ({ data }) => {


    return (
        <div className="jumbotron jumbotron-fluid">
            <video autoPlay muted loop poster="img/background.jpg">
                <source src="img/main.mp4" data-src="img/main.mp4" type="video/mp4"/>
            </video>

            <div className="container text-white is-hero">
                <div style={{marginLeft: '20rem'}}>
                    <span className="display-inline-block mx-3">
                        <img src={logoGPB} alt="ГазПромБанк logo" />
                    </span>
                    <H1 className="is-hero-title">
                        {data.heroTitle}
                    </H1>
                </div>

                <div style={{marginLeft: '10rem'}}>
                    <H1 className="is-hero-text col-9">{data.heroHeader}</H1>
                </div>
          </div>

          <div className="float-right m-3">
              <p className="text-white">
                  Меркурий - в древнеримской мифологии бог-покровитель торговли, прибыли и обогащения.
              </p>
          </div>

      </div>
  );
};

export default Hero;