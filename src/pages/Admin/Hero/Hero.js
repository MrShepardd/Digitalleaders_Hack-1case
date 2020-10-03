import React, {useEffect, useRef} from "react";
import { H1, Button } from "@holism/core";
import logoGPB from "../../../assets/img/icon-gpb-white.svg";

const Hero = ({ data }) => {

    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current)
            return;

        const sources = ref.current.children;
        for (let i = 0; i < sources.length; i++) {
            let sourceFile = sources[i].getAttribute("data-src");
            sources[i].setAttribute("src", sourceFile);
            let video = sources[i].parentElement;
            video.load();
            video.play();
        }

    }, [ref]);


  return (
    <div className="jumbotron jumbotron-fluid">
      <video ref={ref} autoPlay muted loop poster="img/background.jpg">
          <source src="" data-src="http://n-comments.com.xsph.ru/wp-content/uploads/2017/12/gazprombank-1.mp4" type="video/mp4" />
          <source src="" data-src="img/main.mp4" type="video/mp4" />
      </video>

      <div className="container text-white is-hero">
        <div className="logo-wrapper">
          <span className="display-inline-block mx-3">
            <img src={logoGPB} alt="ГазПромБанк logo" />
          </span>
          <H1 className="is-hero-title">{data.heroTitle}</H1>
        </div>

        <div style={{ marginLeft: "10rem" }}>
          <H1 className="is-hero-text col-9">{data.heroHeader}</H1>
        </div>
      </div>

      <div className="float-right m-3">
        <p className="text-white">
          Меркурий - в древнеримской мифологии бог-покровитель торговли, прибыли
          и обогащения.
        </p>
      </div>
    </div>
  );
};

export default Hero;
