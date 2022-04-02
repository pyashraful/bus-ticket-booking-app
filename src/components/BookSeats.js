import React, { useState } from "react";
import BusDetails from "./busDetails/BusDetails";
import busData from "../data";
import Seats from "./Seats";
import classes from "../styles/BookStyle.module.css";
import Modal from "./Modal";

const BookSeats = () => {
  const [seats, setSeats] = useState(() => busData());
  const [preBoooked, setPreBooked] = useState(["A1", "B2"]);
  const [booked, setbooked] = useState([]);
  const [myBooked, setmyBooked] = useState([]);
  const [open, setOpen] = React.useState(false);

  const addToBook = (e) => {
    if (
      e.target.className === classes.available &&
      !myBooked.includes(e.target.innerText)
    ) {
      if (myBooked.length === 4) {
        // alert("you cannot select more than 4");
        setOpen(true);
      } else {
        setbooked([...booked, e.target.innerText]);
        setmyBooked([...myBooked, e.target.innerText]);
      }
    }
    if (
      e.target.className === classes.selected &&
      myBooked.includes(e.target.innerText)
    ) {
      setmyBooked(myBooked.filter((item) => item !== e.target.innerText));
      setbooked(booked.filter((item) => item !== e.target.innerText));
    }
  };
  return (
    <div className={classes.busSeatContainer}>
      <BusDetails myBooked={myBooked} />
      <div className={classes.seatsContainer}>
        <div className={classes.showraper}>
          <div>
            <span className={classes.selected}></span>
            <p>selected</p>
          </div>
          <div>
            <span className={classes.booked}></span>
            <p>Booked</p>
          </div>
          <div>
            <span className={classes.available}></span>
            <p>Available</p>
          </div>
        </div>
        <div className={`${classes.seats} ${classes.gstyle}`}>
          <Seats
            seats={seats}
            preBoooked={preBoooked}
            addToBook={addToBook}
            booked={booked}
          />
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};

export default BookSeats;
