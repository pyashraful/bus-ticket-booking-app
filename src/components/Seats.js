import classes from "../styles/BookStyle.module.css";

const Seats = ({ seats, booked, addToBook, preBoooked }) => {
  return (
    <>
      {seats.map((seat) => {
        let availableStyle = classes.available;
        if (preBoooked.includes(seat)) {
          availableStyle = classes.booked;
        }
        if (booked.includes(seat)) {
          availableStyle = classes.selected;
        }
        return (
          <div key={seat} onClick={addToBook} className={availableStyle}>
            {seat}
          </div>
        );
      })}
    </>
  );
};

export default Seats;
