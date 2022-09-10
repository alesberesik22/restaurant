import React, { useState } from "react";
import "./Twotable.css";
import { takenStyle, freeStyle } from "../Style";
import ReservationModal from "../ReservationModal/ReservationModal";

function Twotable(props: any) {
  const [showReservation, setShowReservation] = useState(false);
  const reservation = (event: any) => {
    if (event.target.id === props.id) {
      setShowReservation(true);
    }
  };
  return (
    <div className="twotable" id={props.id} onClick={reservation}>
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
      {showReservation && (
        <ReservationModal
          open={true}
          setShowReservation={setShowReservation}
          id={props.id}
        />
      )}
    </div>
  );
}

export default Twotable;
