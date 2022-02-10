import React from "react";
import BookSeats from "./components/BookSeats";
import NavBar from "./components/NavBar";
import classes from "./styles/App.module.css";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <div className={classes.appContainer}>
      <div className={classes.bodyContainer}>
        <NavBar />
        <div className={classes.bookSeatContainer}>
          <BookSeats />
        </div>
        {/* <Contact /> */}
      </div>
    </div>
  );
};

export default App;
