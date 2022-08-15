import React, { useEffect, useState, Component } from "react";
import './Header.css'
import Home from "../Home";
import About from "../About";
import What from "../What";
import Contact from "../Contact";

const Header = () => {
  
    const [name, setName] = useState([0]);
  
    const menuList = {
      0: <Home />,
      1: <About />,
      2: <What />,
      3: <Contact />,
    };
  
    const changeMenu = (menuIndex) => {
      menuList({ menu: menuIndex });
    };
  
    return (
        <header className='header'>    
            
        <div className="yeom_bar">
          <ul className="yeom_menu_box">
            <li
              className={`${name === 0 ? "active" : ""}`}
              onClick={() => changeMenu(setName(0))}
            >
              Home
            </li>
            <li
              className={`${name === 1 ? "active" : ""}`}
              onClick={() => changeMenu(setName(1))}
            >
              About
            </li>
            <li
              className={`${name === 2 ? "active" : ""}`}
              onClick={() => changeMenu(setName(2))}
            >
              What
            </li>
            <li
              className={`${name === 3 ? "active" : ""}`}
              onClick={() => changeMenu(setName(3))}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="contentArea">{menuList[name]}</div>
        </header>
    );
};

export default Header;