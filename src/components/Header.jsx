import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const activeClass =
    "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0";
  const inActiveClass =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0";

  return (
    <nav className="bg-white border-gray-200 border-b border-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-10 mr-1" alt="Flowbite Logo" />
          <span className="self-center text-lg whitespace-nowrap">
            Shopping cart
          </span>
        </Link>
        <div className="flex md:order-2">
          <Link to="/cart" className="text-xl max-md:mr-2 max-md:mt-1">
            Cart: 2
          </Link>
          <button
            data-collapse-toggle="navbar-cta"
            onClick={() => setOpenMenu(!openMenu)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            openMenu
              ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
              : "items-center justify-between w-full md:flex md:w-auto md:order-1 hidden"
          }
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={isActiveObj => isActiveObj.isActive ? activeClass : inActiveClass}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={isActiveObj => isActiveObj.isActive ? activeClass : inActiveClass}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
