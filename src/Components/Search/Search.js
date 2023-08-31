import React, { useEffect } from "react";

// icons

import { GrLocation } from "react-icons/gr";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

const Search = () => {
  return (
    <div className="search contaner section" id="search">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer grid"
      >
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          <div className="singleBtn">
            <span>Business Class</span>
          </div>{" "}
          <div className="singleBtn">
            <span> First Class</span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="searchInputs flex"
        >
          <div className="singleInput flex">
            <div className="iconDiv">
              <GrLocation className="icon" />
            </div>
            <div className="texts">
              <h4>Locations</h4>
              <input type="text" placeholder="Where you want to go?" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Travalers</h4>
              <input type="text" placeholder="Add guests" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check in</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check out</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>
          <button className="btn">Search Flight</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
