import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

export default function Navbar() {
  return (
    <>
      <nav className="flex max-h-[8.2rem] items-center justify-between">
        <div className="flex items-center font-main text-2xl font-medium text-[#9B9898]">
          <img className="max-w-[12.6875rem]" src={logo} alt="Horizon Logo" />
          <a
            className="pl-[6rem] pr-[2.05rem] font-semibold text-[#B8D653]"
            href="#home"
          >
            Home
          </a>
          <a className="px-[2.05rem]" href="#about">
            About Us
          </a>
          <a className="px-[2.05rem]" href="#">
            Products
          </a>
        </div>
        <Button>Contact Us</Button>
      </nav>
    </>
  );
}
