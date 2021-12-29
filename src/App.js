import React from "react";
import BookSeats from "./components/BookSeats";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <div className="bookSeatContainer">
        <BookSeats />
      </div>
    </div>
  );
};

export default App;
