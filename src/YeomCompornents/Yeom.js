import "./Yeom.css";
import React, { useEffect, useState, Component } from "react";
import What from "./Layout/What";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from "./Layout/About";
import Header from "./Layout/Header/Header";
import Home from "./Layout/Home";
import Contact from "./Layout/Contact";

const Yeom = () => {
  return (
    <div className="yeom_project">
      <Header />
    </div>
    
  );
};

export default Yeom;
