const Seats = ({ seats, booked, addToBook }) => {

  return (
    <>

      {seats.map((seat) => {

        let availableStyle = 'green'
        // console.log(seat)
        // console.log(booked)
        if (booked.includes(seat)) {
          availableStyle = 'bookedStyle'
        }

        // if(booked.includes(seat)){
        //   availableStyle = 'bookedStyle'
        // }

        // console.log(data.seatNumber)
        return <div key={seat} onClick={addToBook} className={availableStyle}>{seat}</div>
      })}
    </>
  )
}



export default Seats
