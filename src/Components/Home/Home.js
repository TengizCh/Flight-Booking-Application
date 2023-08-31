import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import video from "../../assets/video.mp4";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          BE INSPIRED, Discover all destinations
        </h1>
      </div>

      <div className="homeImages flex">
        <div data-aos="fade-down" data-aos-duration="2500" className="videoDiv">
          <video className="video" src={video} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
};

export default Home;
