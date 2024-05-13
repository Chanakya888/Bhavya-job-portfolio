import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import OpenNavbar from "./OpenNavbar";
import { NavbarContext } from "../contexts/NavBarContext";
import Resume from "../assets/Resume.pdf";

const Navbar = () => {
  const { toggleNav, setToggleNav } = useContext(NavbarContext);
  const location = useLocation();

  const handleClick = () => {
    setToggleNav(!toggleNav);
  };

  const h3Ref = useRef(null);
  const [h3Width, setH3Width] = useState(null);
  useEffect(() => {
    if (h3Ref.current) {
      setH3Width(h3Ref.current.offsetWidth);
    }
  }, [h3Ref]);
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
      </div>
      <div className="hidden w-full lg:grid lg:grid-cols-14 lg:px-6 lg:pt-10">
        <Link to={`/`} className="inline">
          <h3
            className="inline whitespace-nowrap lg:col-start-1 lg:col-end-3 lg:pl-0 xl:ml-10"
            ref={h3Ref}
          >
            Bhavya Gupta
          </h3>
          {location.pathname === "/" && (
            <div
              className="h-px bg-primaryGreen xl:ml-10"
              style={{ width: h3Width }}
            ></div>
          )}
        </Link>
        <div className="col-start-6 col-end-7 flex space-x-10">
          <Link to={`/info`} className="inline">
            <h3>Info.</h3>
            {location.pathname === "/info" && (
              <div className="h-px w-full bg-primaryGreen "></div>
            )}
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
            {location.pathname === "/archive" && (
              <div className="h-px w-full bg-primaryGreen"></div>
            )}
          </Link>
        </div>
      </div>
      {toggleNav && <OpenNavbar />}
    </>
  );
};

export default Navbar;
