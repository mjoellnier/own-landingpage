import React from "react";
import { IntroComponent } from "../components/intro";
import { AboutComponent } from "../components/about";
import { NavBarComponent } from "../components/navBar";
import SEO from "../components/seo";
import "./index.css";

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <IntroComponent />

    <NavBarComponent>
      <AboutComponent />
    </NavBarComponent>
  </>
);

export default IndexPage;
