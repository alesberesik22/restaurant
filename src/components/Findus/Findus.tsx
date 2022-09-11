import React from "react";
import "./Findus.css";

import Subhead from "../Subhead/Subhead";
import findUsImage from "../../assets/images/findus.png";

function Findus() {
  return (
    <div className="findus" id="contact">
      <div className="findus_info">
        <Subhead title="Contact" />
        <h1 className="findus_text" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="findus_content">
          <p className="findus_content_address">
            Zilina Vysokoskolakov 01001 Slovakia
          </p>
          <p className="findus_content_opening_hours_title">Opening Hours</p>
          <p className="findus_content_mo-sun">Mon - Fri: 10am - 10pm</p>
          <p className="findus_content_mo-sun">Sat - Sun: 10am - 8pm</p>
          <button className="findus_button">Visit Us</button>
        </div>
      </div>
      <div className="findus_image">
        <img src={findUsImage} alt={"find us"} />
      </div>
    </div>
  );
}

export default Findus;
