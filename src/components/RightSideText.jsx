import React from "react";

const RightSideText = ({ children }) => {
  return (
    <div className="x-padding flex w-full justify-end pt-2 lg:justify-start">
      <div className="p-container w-8/12">{children}</div>
    </div>
  );
};

export default RightSideText;
