import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav
        className={
          location.pathname.includes("product")
            ? `flex max-h-[8.2rem] items-center justify-between border-b border-[#D9D9D9]`
            : `flex max-h-[8.2rem] items-center justify-between`
        }
      >
        <div className="flex items-center font-main text-2xl font-medium text-[#9B9898]">
          <NavLink to="/">
            <img className="max-w-[12.6875rem]" src={logo} alt="Horizon Logo" />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "ml-[6rem] mr-[3rem] font-semibold text-[#B8D653]"
                : "ml-[6rem] mr-[3rem] text-[#9B9898]"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink className="mx-[3rem]" to="/">
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "ml-[3rem] font-semibold text-[#B8D653]"
                : "ml-[3rem] text-[#9B9898]"
            }
            to="/products"
          >
            Products
          </NavLink>
        </div>
        <Button>Contact Us</Button>
      </nav>
    </>
  );
}
