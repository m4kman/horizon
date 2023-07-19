import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

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
          {location.pathname.endsWith("/") ? (
            <a className="mx-[3rem]" href="#about">
              About Us
            </a>
          ) : (
            <NavLink className="mx-[3rem]" to="/">
              About Us
            </NavLink>
          )}
          <NavLink
            className={
              location.pathname.includes("products")
                ? "ml-[3rem] font-semibold text-[#B8D653]"
                : "ml-[3rem] text-[#9B9898]"
            }
            to="/products/mattress"
          >
            Products
          </NavLink>
        </div>
        <a
          className="rounded-[.625rem] bg-[#B8D653] px-[4rem] py-[1rem] font-main text-2xl font-semibold text-[#fff]"
          href="#contact"
        >
          Contact Us
        </a>
      </nav>
    </>
  );
}
