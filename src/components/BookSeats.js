import React from 'react'

const createSeats = (rows, startIndex) =>{
  const i = 0;
  let j = startIndex
  let k = 'A'
  const section = []
  while (i < 6 && j <= rows) {
    if(k<'F'){
      k = 'A'
      j +=1
    }
    if(j < rows + 1){
      section.push(j+k)
      k = section.fromCharCode(k.charCodeAt(0) + 1)
    }
  }
}


const BookSeats = () => {
  return (
    <div>
      
    </div>
  )
}




export default BookSeats
