import React from "react";
import BookSeats from "./components/BookSeats";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import classes from "./styles/App.module.css";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className={classes.appContainer}>
        <Layout>
          <Routes>
            <Route path="/" element={<BookSeats />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
