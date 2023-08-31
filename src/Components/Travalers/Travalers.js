import React, { useEffect } from "react";

import paris from "../../assets/paris.jpg";
import tbilisi from "../../assets/tbilisi.jpg";
import newyork from "../../assets/newyork.jpg";
import dubai from "../../assets/dubai.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Travalers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const travalers = [
    {
      id: 1,
      destinationImage: paris,
      destinationName: "france, paris",
      ranking: "#1",
    },
    {
      id: 2,
      destinationImage: tbilisi,
      destinationName: "georgia, tbilisi",
      ranking: "#2",
    },
    {
      id: 3,
      destinationImage: newyork,
      destinationName: "united states, new york",
      ranking: "#3",
    },
    {
      id: 4,
      destinationImage: dubai,
      destinationName: "United Arab Emirates , Dubai",
      ranking: "#4",
    },
  ];

  return (
    <div className="travalers container section">
      <div className="sectionContainer">
        <h2
          data-aos="fade-in"
          data-aos-duration="2500"
          className="travalersText"
        >
          Top Destinations of this month!
        </h2>
        <div className="travalersContainer grid">
          {travalers.map(
            ({ id, destinationImage, destinationName, ranking }) => (
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                key={id}
                className="singleTravaler flex"
              >
                <div className="destinationTitle">
                  <h4>{ranking}</h4>
                  <p>{destinationName}</p>
                </div>
                <div className="imgDiv">
                  <img src={destinationImage} className="destinationImage" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Travalers;
