import React from "react";
import { Typography, TableRow, TableCell } from "@material-ui/core";
import classes from "../../styles/BusDetails.module.css";

const BusDetails = ({ myBooked }) => {
  return (
    <>
      <>
        <Typography variant="h5">SEAT INFORMATION</Typography>
        <table className={classes.priceTable}>
          <tr>
            <th>SEATS</th>
            <th>PRICE</th>
          </tr>

          {myBooked.map((item) => (
            <tr key={item}>
              <td>{item}</td>
              <td>80</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th>{myBooked.length * 80}</th>
          </tr>
        </table>
      </>
    </>
  );
};

export default BusDetails;
