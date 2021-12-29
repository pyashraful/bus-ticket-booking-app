import React, { useState } from "react";
import BusDetails from "./busDetails/BusDetails";
import busData from "../data";
import { Grid, Card } from "@material-ui/core";
import Seats from "./Seats";
import "./style.css";

const BookSeats = () => {
  const [seats, setSeats] = useState(busData());
  const [preBoooked, setPreBooked] = useState(["A1", "B2"]);
  const [booked, setbooked] = useState([]);
  const [myBooked, setmyBooked] = useState([]);

  const addToBook = (e) => {
    if (
      e.target.className === "available" &&
      !myBooked.includes(e.target.innerText)
    ) {
      if (myBooked.length === 4) {
        alert("you cannot select more than 4");
      } else {
        setbooked([...booked, e.target.innerText]);
        setmyBooked([...myBooked, e.target.innerText]);
      }
    }
    if (
      e.target.className === "selected" &&
      myBooked.includes(e.target.innerText)
    ) {
      setmyBooked(myBooked.filter((item) => item !== e.target.innerText));
      setbooked(booked.filter((item) => item !== e.target.innerText));
    }
  };
  return (
    <>
      <Grid item lg={6} ms={12}>
        <BusDetails myBooked={myBooked} />
      </Grid>
      <Grid item lg={6} ms={12}>
        <div className="showraper">
          <div>
            <span className="selected"></span>
            <p>selected</p>
          </div>
          <div>
            <span className="booked"></span>
            <p>Booked</p>
          </div>
          <div>
            <span className="available"></span>
            <p>Available</p>
          </div>
        </div>
        <div item className={`seats gstyle`}>
          <Seats
            seats={seats}
            preBoooked={preBoooked}
            addToBook={addToBook}
            booked={booked}
          />
        </div>
      </Grid>
    </>
  );
};

export default BookSeats;
