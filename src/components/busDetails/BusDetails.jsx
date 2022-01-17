import React from "react";
import { Typography } from "@material-ui/core";
import classes from "../../styles/BusDetails.module.css";

const BusDetails = ({ myBooked }) => {
  console.log(myBooked);

  return (
    <>
      <>
        <Typography variant="h5">SEAT INFORMATION</Typography>
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
      </>
    </>
  );
};

export default BusDetails;
