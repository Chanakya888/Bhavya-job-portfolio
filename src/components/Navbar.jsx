import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between px-[72px] pt-[55px] pb-10">
        <h1 className="Circular-std text-primaryGreen">Bhavya Gupta</h1>
        <div className="flex space-x-10">
          <h1 className="Circular-std text-primaryGreen">Info.</h1>
          <h1 className="Circular-std text-primaryGreen">Resume</h1>
        </div>
        <h1 className="Circular-std text-primaryGreen">Archive</h1>
      </div>
    </>
  );
};

export default Navbar;
