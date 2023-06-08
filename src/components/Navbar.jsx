import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between px-[72px] pt-[55px] pb-10">
        <Link to={`/`}>
          <h3>Bhavya Gupta</h3>
        </Link>
        <div className="flex space-x-10">
          <h3>Info.</h3>
          <h3>Resume</h3>
        </div>
        <h3>Archive</h3>
      </div>
    </>
  );
};

export default Navbar;
