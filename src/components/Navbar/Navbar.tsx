import React, { useState } from "react";

import "./Navbar.css";

import logo from "../../assets/images/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Navbarlinks from "./Navbarlinks";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app_navbar">
      <div className="app_navbar_logo">
        <img src={logo} alt={"Logo"} />
      </div>
      <ul className="app_navbar_links">
        <Navbarlinks />
      </ul>
      <div className="app_navbar_login">
        <a href="#login" className="app_navbar_text">
          Log In / Register
        </a>
        <div />
        <a href="/" className="app_navbar_text">
          Book a table
        </a>
      </div>
      <div className="app_navbar_small_screen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app_navbar_smallscreen_overlay slide_bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="app_overlay_close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app_navbar_smalllinks">
              <Navbarlinks />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
