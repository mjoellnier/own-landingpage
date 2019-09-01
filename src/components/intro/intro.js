import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const IntroComponent = () => {
  return (
    <div class="grid">
      <div>
        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
          <h2 id="hey">Index Page!</h2>
        </ScrollAnimation>
      </div>
    </div>
  );
};
