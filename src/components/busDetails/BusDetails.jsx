import React from "react";
import {
  Card,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const BusDetails = ({ myBooked }) => {
  return (
    <>
      <Card>
        <Typography variant="h5">SEAT INFORMATION</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SEATS</TableCell>
              <TableCell>PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myBooked.map((item) => (
              <TableRow key={item}>
                <TableCell>{item}</TableCell>
                <TableCell>80</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>{myBooked.length * 80}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default BusDetails;
