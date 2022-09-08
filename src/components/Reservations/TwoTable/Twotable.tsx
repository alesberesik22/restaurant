import React from "react";
import "./Twotable.css";
import { takenStyle, freeStyle } from "../Style";
import useState from "react";

function Twotable(props: any) {
  return (
    <div className="twotable" id={props.id}>
      <h3 className="table_number" id={props.id}>
        {props.id}
      </h3>
      <h4 className="twotable_time" id={props.id}>
        14:00 - 16:00
      </h4>
      <h5 className="twotable_time_name" id={props.id}>
        Ales Beresik
      </h5>
      <div className="table" style={freeStyle} id={props.id} />
      <div className="places" id={props.id}>
        <div className="sit_one" />
        <div className="sit_two" />
      </div>
    </div>
  );
}

export default Twotable;
