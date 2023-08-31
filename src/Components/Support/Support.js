import React, { useEffect } from "react";

// imported images
import window from "../../assets/window.jpg";

// import Aos from "aos";
// import "aos/dist/aos.css";

const Support = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 3000 });
  // });

  return (
    <div className="support container section" id="support">
      <div className="sectionContainer">
        <div className="titleDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidance</h2>
          <p>
            Find help with booking and travel plans, see what to expect along
            the joinrney!
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleInfo"
            >
              <span className="number">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect the
                journey to your favorite destinations!
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="3500"
              className="singleInfo"
            >
              <span className="number colorTwo">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect the
                journey to your favorite destinations!
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="4500"
              className="singleInfo"
            >
              <span className="number colorThree">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find help with booking and travel plans, see what to expect the
                journey to your favorite destinations!
              </p>
            </div>
          </div>

          <div data-aos="fade-down" data-aos-duration="2500" className="imgDiv">
            <img src={window} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
