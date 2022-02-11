import React from "react";
import BookSeats from "./components/BookSeats";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";

import classes from "./styles/App.module.css";

import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <div className={classes.appContainer}>
      <Layout>
        <BookSeats />
        {/* <Contact /> */}
      </Layout>
    </div>
  );
};

export default App;
