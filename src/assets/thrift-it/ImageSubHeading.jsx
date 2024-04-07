import React from "react";

const ImageSubHeading = ({ subHeading }) => {
  return (
    <div className="flex w-full justify-center pt-0.5 lg:pt-4">
      <p className="text-xs text-primaryGreen lg:text-xl">{subHeading}</p>
    </div>
  );
};

export default ImageSubHeading;
