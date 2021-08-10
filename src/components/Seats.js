const Seats = ({ seats, booked, addToBook, preBoooked }) => {

  console.log(preBoooked)

  return (
    <>
      {seats.map((seat) => {

        let availableStyle = 'available'
        // console.log(seat)
        if(preBoooked.includes(seat)){
          console.log('go')
          availableStyle = 'booked'
        }
        // console.log(booked)
        if(booked.includes(seat)) {
          availableStyle = 'selected'
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
