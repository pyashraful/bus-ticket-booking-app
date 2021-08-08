function makeData(){
  let arr = []
  
  for(let i = 1;  i <= 6; i++ ){
    let j = 'A'
    while (j <= 'D') {
      
      arr.push({
        seatNumber: i+j
      })
      j=String.fromCharCode(j.charCodeAt(0) + 1)
    }
    j = 0
  }
  return arr
}

const arr = makeData()
console.log(arr)