import React from "react";

import paris from "../../assets/paris.jpg";
import tbilisi from "../../assets/tbilisi.jpg";
import newyork from "../../assets/newyork.jpg";
import dubai from "../../assets/dubai.jpg";

// import Aos from "aos";
// import "aos/dist/aos.css";

const Travalers = () => {
  const travalers = [
    {
      id: 1,
      destinationImage: paris,
      destinationName: "france, paris",
      ranking: "#1",
      name: "paris",
    },
    {
      id: 2,
      destinationImage: tbilisi,
      destinationName: "georgia, tbilisi",
      ranking: "#2",
      name: "tbilisi",
    },
    {
      id: 3,
      destinationImage: newyork,
      destinationName: "united states, new york",
      ranking: "#3",
      name: "new york",
    },
    {
      id: 4,
      destinationImage: dubai,
      destinationName: "United Arab Emirates , Dubai",
      ranking: "#4",
      name: "dubai",
    },
  ];

  return (
    <div className="travalers container section" id="top">
      <div className="sectionContainer">
        <h2
          data-aos="fade-down"
          data-aos-duration="2500"
          className="travalersText"
        >
          Top Destinations of this month!
        </h2>
        <div className="travalersContainer grid">
          {travalers.map(
            ({ id, ranking, name, destinationImage, destinationName }) => (
              <div
                data-aos="fade-down"
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
