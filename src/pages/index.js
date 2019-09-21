import React from "react";
import { IntroComponent } from "../components/intro";
import SEO from "../components/seo";
import "./index.css";
import { Background } from "../components/background";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Background />
    <IntroComponent />
  </div>
);

export default IndexPage;
