import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const IntroComponent = () => {
  return (
    <div class="grid">
      <div id="introDiv1" className="span1">
        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
          <div>
            <h2 id="hey">Hi - I am</h2>
            <h1>Max</h1>
          </div>
        </ScrollAnimation>
      </div>
      <div id="introDiv2" className="span2">
        <h2 id="hey">Index Page!</h2>
      </div>
    </div>
  );
};
