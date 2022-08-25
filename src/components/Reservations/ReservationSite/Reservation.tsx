import React from "react";
import Fourtable from "../FourTable/Fourtable";
import Twotable from "../TwoTable/Twotable";
import "./Reservation.css";

function Reservation() {
  return (
    <div className="reservation">
      <div className="first">
        <Fourtable />
      </div>
      <div className="first">
        <Twotable />
      </div>
    </div>
  );
}

export default Reservation;
