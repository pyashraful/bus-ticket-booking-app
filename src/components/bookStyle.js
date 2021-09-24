import { makeStyles } from "@material-ui/styles"


export default makeStyles({

  seatGrid:{
    maxWidth: '250px',
    display:'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    justifyItems: 'center',
    gap:'10px'
  },

  seat:{
    width:'25px',
    height:'25px',
    borderRadius:'25%'
  }

  


})