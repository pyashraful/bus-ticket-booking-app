import React from "react";
import Home from "./components/pages/Home";
import Layout from "./components/Layout";
import Contact from "./components/pages/Contact";
import Confirm from "./components/pages/Confirm";
import classes from "./styles/App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className={classes.appContainer}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="confirm" element={<Confirm />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
