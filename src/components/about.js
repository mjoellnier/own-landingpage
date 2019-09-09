import React from "yurnalist/src/components/node_modules/react";
import ReactWordcloud from "react-wordcloud";
import words from "../constants/wordCloudWords";

export const AboutComponent = () => {
  return (
    <div class="grid" id="about_anchor">
      <div id="aboutDiv2" className="span1">
        <ReactWordcloud
          words={words}
          options={{
            enableTooltip: false,
            fontSizes: [15, 60],
            fontFamily: "impact",
            colors: ["#264129", "#5a6346", "#913646", "#918036"]
          }}
        />
      </div>
    </div>
  );
};
