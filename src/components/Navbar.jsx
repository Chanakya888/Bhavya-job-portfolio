import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OpenNavbar from "./OpenNavbar";
import { NavbarContext } from "../contexts/NavBarContext";
import Resume from "../assets/Resume.pdf";

const Navbar = () => {
  const { toggleNav, setToggleNav } = useContext(NavbarContext);

  const handleClick = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      <div className="flex h-[44px] w-full items-center justify-between px-6 pt-6 lg:hidden ">
        <div
          className="flex h-8 w-8 flex-col items-center justify-center space-y-2 transition-transform duration-300 ease-in-out"
          onClick={handleClick}
        >
          <span className="h-0.5 w-8 rounded-full bg-primaryGreen"></span>
          <span className="h-0.5 w-8 rounded-full bg-primaryGreen"></span>
          <span className="h-0.5 w-8 rounded-full bg-primaryGreen"></span>
        </div>
        <div>
          <a
            href="https://www.instagram.com/studio.leftovers/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline"
          >
            <p>@bhavyeahgupta</p>
          </a>
        </div>
      </div>
      <div className="hidden w-full lg:grid lg:grid-cols-14 lg:px-6 lg:pt-10">
        <Link to={`/`} className="inline">
          <h3 className="inline whitespace-nowrap lg:col-start-1 lg:col-end-3 lg:pl-0 xl:pl-10">
            Bhavya Gupta
          </h3>
        </Link>
        <div className="col-start-6 col-end-7 flex space-x-10">
          <Link to={`/info`} className="inline">
            <h3>Info</h3>
          </Link>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline"
          >
            <h3>Resume</h3>
          </a>
        </div>
        <div className="flex w-full justify-end lg:col-start-13">
          <Link to={`/archive`} className="inline">
            <h3 className="">Archive</h3>
          </Link>
        </div>
      </div>
      {toggleNav && <OpenNavbar />}
    </>
  );
};

export default Navbar;
