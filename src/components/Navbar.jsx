import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import OpenNavbar from "./OpenNavbar";
import { NavbarContext } from "../contexts/NavBarContext";

const Navbar = () => {
  const { toggleNav, setToggleNav } = useContext(NavbarContext);

  const handleClick = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      <div className="flex h-[44px] w-full items-center justify-between px-6 pt-6 lg:hidden">
        <div
          className="flex h-8 w-8 flex-col items-center justify-center space-y-2 transition-transform duration-300 ease-in-out"
          onClick={handleClick}
        >
          <span className="h-0.5 w-8 rounded-full bg-primaryGreen"></span>
          <span className="h-0.5 w-8 rounded-full bg-primaryGreen"></span>
          <span className="h-0.5 w-8 rounded-full bg-primaryGreen"></span>
        </div>
        <div>
          <p>@bhavyeahgupta</p>
        </div>
      </div>
      <div className="hidden w-full lg:grid lg:grid-cols-10 lg:px-6 lg:pb-10 lg:pt-[55px]">
        <Link to={`/`} className="inline">
          <h3 className="inline whitespace-nowrap lg:col-start-1 lg:col-end-3 lg:pl-12">
            Bhavya Gupta
          </h3>
        </Link>
        <div className="col-start-5 col-end-6 flex space-x-10">
          <Link to={`/info`} className="inline">
            <h3>Info.</h3>
          </Link>
          <h3>Resume</h3>
        </div>
        <Link to={`/archive`} className="inline">
          <h3 className="lg:col-start-10 lg:pr-12">Archive</h3>
        </Link>
      </div>
      {toggleNav && <OpenNavbar />}
    </>
  );
};

export default Navbar;
