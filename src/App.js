import React from "react";
import BookSeats from "./components/BookSeats";
import classes from "./styles/App.module.css";

const App = () => {
  return (
    <div className={classes.appContainer}>
      <div className={classes.bookSeatContainer}>
        <BookSeats />
      </div>
    </div>
  );
};

export default App;
