import React, {useState} from 'react'
import busData from '../data'
import Seats from './Seats';
import './style.css'

const BookSeats = () => {

  const [seats, setSeats] = useState(busData())
  const [booked, setbooked] = useState(['1A', '2B'])
  const [myBooked, setmyBooked ] = useState([])


  const addToBook = (e) => {
    if(e.target.className === 'green' && !myBooked.includes(e.target.innerText)){
      const too = e.target.innerText
      setbooked( [...booked, too])
      setmyBooked([...myBooked, too ])
    }
    if(e.target.className === 'bookedStyle' && myBooked.includes(e.target.innerText)){
      setmyBooked(myBooked.filter(item => item !== e.target.innerText))
      setbooked(booked.filter(item => item !== e.target.innerText))
    } 
  }
  return (
    <div className='seats' >
      <Seats seats={seats} addToBook={addToBook} booked={booked} />
    </div>
  )
}




export default BookSeats
