import React from "react";
import {
  Card,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const BusDetails = () => {
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
            <TableRow>
              <TableCell>A1</TableCell>
              <TableCell>80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>A1</TableCell>
              <TableCell>80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>A1</TableCell>
              <TableCell>80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>800</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default BusDetails;
