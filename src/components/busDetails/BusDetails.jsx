import React from "react";
import classes from "../../styles/BusDetails.module.css";
import { Link } from "react-router-dom";

const BusDetails = ({ myBooked }) => {
  console.log(myBooked);

  return (
    <div className={classes.seatinfo}>
      <h2>SEAT INFORMATION</h2>
      <table className={classes.priceTable}>
        <thead>
          <tr>
            <th>SEATS</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {myBooked.map((item) => (
            <tr key={item}>
              <td>{item}</td>
              <td>80</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>Total</th>
            <th>{myBooked.length * 80}</th>
          </tr>
        </tfoot>
      </table>

      <Link to="/confirm">
        <button className={classes.btn}>confirm</button>
      </Link>
    </div>
  );
};

export default BusDetails;
