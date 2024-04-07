import React from "react";

const SideLineContainer = ({ text }) => {
  return (
    <div className="flex space-x-3 lg:max-w-[362px]">
      <div className="w-2 bg-primaryGreen opacity-50"></div>
      <p className="m-0 pt-2 text-base text-primaryGreen lg:pt-0.5">{text}</p>
    </div>
  );
};

export default SideLineContainer;
