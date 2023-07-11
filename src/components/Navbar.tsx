import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="Horizon Logo" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
        </ul>
        <button>Contact Us</button>
      </nav>
    </>
  );
}
