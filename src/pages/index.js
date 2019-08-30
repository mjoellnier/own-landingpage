import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ScrollAnimation from "react-animate-on-scroll";
import "./index.css";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div class="grid">
      <div>
        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
          <h2 id="hey">Index Page!</h2>
        </ScrollAnimation>
      </div>
    </div>
    <div class="grid">
      <div>
        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
          <h2 id="hey">About me page!</h2>
        </ScrollAnimation>
      </div>
    </div>
    <div class="grid">
      <div>
        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
          <h2 id="hey">Projects Page!</h2>
        </ScrollAnimation>
      </div>
    </div>
    <div class="grid">
      <div>
        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
          <h2 id="hey">Footer/Contact/Legal Page!</h2>
        </ScrollAnimation>
      </div>
    </div>
  </>
);

export default IndexPage;
