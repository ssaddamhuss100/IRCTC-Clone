import React from "react";
import "./Navbar.css";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>IRCTC</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login"><Login</a>
        </li>
        <li>
          <a href="/register"><Register/></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
