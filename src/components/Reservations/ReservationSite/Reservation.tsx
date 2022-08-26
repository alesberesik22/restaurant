import React from "react";
import Eighttable from "../EightTable/Eighttable";
import Fourtable from "../FourTable/Fourtable";
import Twotable from "../TwoTable/Twotable";
import "./Reservation.css";

function Reservation() {
  return (
    <div className="reservation">
      <div className="first_row">
        <div className="reservation_table_4">
          <Fourtable id={"01"} />
        </div>
        <div className="reservation_table_2">
          <Twotable id={"02"} />
        </div>
        <div className="reservation_table_4">
          <Fourtable id={"03"} />
        </div>
      </div>
      <div className="second_row">
        <div className="reservation_table_4">
          <Fourtable id={"04"} />
        </div>
        <div className="reservation_table_2">
          <Twotable id={"05"} />
        </div>
        <div className="reservation_table_2">
          <Twotable id={"06"} />
        </div>
        <div className="reservation_table_4">
          <Fourtable id={"07"} />
        </div>
      </div>
      <div className="third_row">
        <div className="reservation_table_8">
          <Eighttable id={"08"} />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
