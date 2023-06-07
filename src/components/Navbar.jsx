import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between px-[72px] pt-[55px] pb-10">
        <h3>Bhavya Gupta</h3>
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
