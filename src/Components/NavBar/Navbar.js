import React, { useState } from "react";

// Icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

// Photos

import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };
  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  const [noBg, addBg] = useState("navBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };
  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrateFill className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="Logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={removeNavBar}
              >
                Home
              </Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link
                to="search"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={removeNavBar}
              >
                Discover
              </Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link
                to="support"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={removeNavBar}
              >
                Support
              </Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link
                to="info"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={removeNavBar}
              >
                Info
              </Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link
                to="lounge"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={removeNavBar}
              >
                Lounge
              </Link>
            </li>
            <li onClick={removeNavBar} className="listItem">
              <Link
                to="top"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={removeNavBar}
              >
                Top
              </Link>
            </li>
          </ul>

          <button onClick={removeNavBar} className="btn flex btnOne">
            Contact
          </button>
        </div>
        {/* <button className="btn flex btnTwo">Contact</button> */}

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
