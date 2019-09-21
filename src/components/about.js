import React from "react";
import ReactWordcloud from "react-wordcloud";
import words from "../constants/wordCloudWords";

export const AboutComponent = () => {
  return (
    <div class="grid" id="about_anchor">
      <div id="aboutDiv2" className="span2">
        <p>
          After finishing my Abitur I started my airline pilot schooling at the
          Lufthansa Flight Training GmbH in Bremen, Germany and Phoenix AZ, USA.
          It tought me a lot, not only about flying an airplane but also about
          myself: what I'm capable of and how I react in certain stresful
          situation.
        </p>
        <p>
          After succefully passing the schooling I decided to change my
          proficiency and started my Computer Science studies in a so called
          "Duales Studium" which means that I spent half of the time at
          university and half of the time working for a company as a Junior
          Consultant. I finished my studies as the best student of the year.
        </p>
        <p>
          Before co-founding the Watermelon Solutions GmbH with a former fellow
          student I worked as a full time Java Software Engineer for a Stuttgart
          based company where I learned a lot about the daily business of
          creating good software.
        </p>
        <p>
          In my free time I enjoy Photography and also play a good video game or
          spending my time on a table top game.
        </p>
      </div>
      <div id="aboutDiv1" className="span1">
        <div>
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
    </div>
  );
};
