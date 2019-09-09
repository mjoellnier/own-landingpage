import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import TextLoop from "react-text-loop";

export const IntroComponent = () => {
  return (
    <div class="grid">
      <div id="introDiv1" className="span1">
        <div>
          <h4>Hi! I am</h4>
          <div id="maxWrapper">
            <AnimatedOnScroll animationIn="zoomIn" offset={-10}>
              <h1>Max</h1>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>
      <div id="introDiv2" className="span2">
        <h3>
          I'm a{" "}
          <TextLoop
            springConfig={{ stiffness: 180, damping: 8 }}
            className="scrollWords"
            children={[
              "Java engineer",
              "Webdev",
              "Founder",
              "Open source contributer",
              "React dev",
              "Photographer",
              "Nerd",
              "Warhammer player"
            ]}
          />{" "}
          located in southern Germany.
        </h3>
        <h3>
          It's nice to have you around. Take a look at my portfolio and feel
          free to reach out for me when you think you could use my help.
        </h3>
      </div>
    </div>
  );
};