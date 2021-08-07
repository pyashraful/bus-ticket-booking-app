import React from 'react'

const Seats = (seatNumber) => {
  return (
    <div>
      {seatNumber.map(seat => (
        <div key={seat}>{seat}</div>
      ))}
    </div>
  )
}

export default Seats
