import React from "react";

import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import spoon from "../../assets/images/spoon.png";

function Footer() {
  return (
    <div className="footer">
      {/* <Footeroverlay /> */}
      <div className="footer_links">
        <div className="footer_links_contacts">
          <h1 className="footer_liinks_contacts_head_text">Contact Us</h1>
          <p className="footer_links_contacts_text">
            Kysucke Nove Mesto, CSA 1306, Slovakia
          </p>
          <p className="footer_links_contacts_text">+421 999 999 999</p>
          <p className="footer_links_contacts_text">email@gmail.com</p>
        </div>
        <div className="footer_links_logo">
          <img src={logo} alt={"logo"} />
          <p className="footer_links_logo_message">
            The best way to find yourself is to lose yourself in the service of
            others.
          </p>
          <img
            src={spoon}
            alt="spoon"
            className="spoon_img"
            style={{ marginTop: 15 }}
          />
          <div className="footer_links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="footer_links_work">
          <h1 className="footer_liinks_contacts_head_text">Working Hours</h1>
          <p className="footer_links_contacts_text">Monday-Friday</p>
          <p className="footer_links_contacts_text">8:00 - 22:00</p>
          <p className="footer_links_contacts_text">Saturday-Sunday</p>
          <p className="footer_links_contacts_text">12:00 - 21:00</p>
        </div>
      </div>
      <div className="footer_copyright">
        <p className="copyright_text">
          2022 Ales Beresik. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
