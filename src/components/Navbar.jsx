import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex h-20 w-full items-center justify-between px-6 lg:hidden">
        <div
          className={`flex h-8 w-8 flex-col items-center justify-center space-y-2 transition-transform duration-300 ease-in-out ${
            open ? "translate-x-2 transform" : ""
          }`}
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
      <div className="hidden w-full justify-between lg:flex lg:px-[72px] lg:pb-10 lg:pt-[55px]">
        <Link to={`/`}>
          <h3>Bhavya Gupta</h3>
        </Link>
        <div className="  flex space-x-10">
          <h3>Info.</h3>
          <h3>Resume</h3>
        </div>
        <h3 className="">Archive</h3>
      </div>
    </>
  );
};

export default Navbar;
