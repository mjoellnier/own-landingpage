import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBarComponent = props => {
  return (
    <>
      <div>
        <AnimatedOnScroll
          animateOnce={false}
          screenOffset={50}
          animationIn="fadeIn"
          animateOnce={false}
          className="navBannerWrapper"
        >
          <div id="navBar">
            <Link to={"about_anchor"} smooth={true}>
              <h5>About</h5>
            </Link>
            <Link to={"projects_anchor"}>
              <h5>Projects</h5>
            </Link>
            <Link to={"contact_anchor"}>
              <h5>Contact</h5>
            </Link>
          </div>
        </AnimatedOnScroll>
        {props.children}
      </div>
    </>
  );
};
