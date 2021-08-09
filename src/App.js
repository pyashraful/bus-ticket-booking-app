import React from 'react';
import BookSeats from './components/BookSeats';
import { Container, Grid } from '@material-ui/core';
import useStyles from './style';


const App = () => {

  const classes = useStyles()

  return (
    <>
      <Container className={classes.root}>
        <Grid container>
          <BookSeats />
        </Grid>
      </Container>
    </>
  )
}

export default App;
