import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Invention from "./components/Invention/Invention";
import Nav from "./components/Home/Nav/Nav";
import Footer from "./components/Home/Footer/Footer";
import Join from "./components/Join/Join";
import ContactUs from "./components/Contact/ContactUs/ContactUs";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Invention />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
