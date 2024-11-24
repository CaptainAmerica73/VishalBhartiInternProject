// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Activities from "./components/activities";
import Infrastructure from "./components/infrastructure";
import Admission from "./components/navbar";
import NotFound from "./components/notfound";
import Academics from "./components/academics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/activities" element={<Activities />}></Route>
        <Route path="/infrastructure" element={<Infrastructure />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/academics" element={<Academics />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
