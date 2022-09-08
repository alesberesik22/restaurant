import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useEffect } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ReservationModal.css";

function ReservationModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const [dateSelected, setDateSelected] = React.useState(false);
  const [timeSelected, setTimeSelected] = React.useState("");
  const [date, setDate] = React.useState("");
  const [calendarValue, setCalendarValue] = React.useState(new Date());

  const times = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
  ];

  const handleClose = () => {
    setOpen(false);
    props.setShowReservation(false);
    setDateSelected(false);
  };

  useEffect(() => {
    setOpen(props.open);
  }, []);

  const calendarChange = (event) => {
    let date = String(event).split(" ");
    console.log(date[1] + date[2]);
    setCalendarValue(event);
    setDateSelected(true);
    setDate(date[1] + " " + date[2]);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="reservation_modal">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="reservation_title"
          >
            Table Reservation
          </Typography>
          <div className="calendar_modal">
            <div className="calendar">
              <Calendar onChange={calendarChange} value={calendarValue} />
            </div>
            <div className="time">
              {dateSelected &&
                times.map((time) => {
                  return (
                    <button
                      key={time}
                      className="button_time"
                      onClick={() => setTimeSelected(time)}
                    >
                      {time}
                    </button>
                  );
                })}
            </div>
          </div>
          {timeSelected && date ? (
            <div>
              {date} at {timeSelected}
            </div>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}

export default ReservationModal;
