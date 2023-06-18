import React from "react";
import Tools from "../assets/browser-project/the-tools.png";
import Draw from "../assets/browser-project/draw.png";
import Code from "../assets/browser-project/code.png";

const DesktopTools = () => {
  return (
    <div className="hidden lg:inline ">
      <div className="relative flex w-full justify-center ">
        <div className="pr-5">
          <p>Draw</p>
        </div>
        <img className="z-10 w-7/12 object-contain" src={Draw} alt="" />

        <div className="absolute -bottom-60 left-20 max-w-[480px] ">
          <div className="pr-5">
            <p>Stickers</p>
          </div>
          <img className="w-full object-contain" src={Tools} alt="" />
        </div>
      </div>
      <div className="flex w-full justify-end pt-4 lg:pr-3 xl:pr-16">
        <div className="flex items-end">
          <p>Collaborate</p>
        </div>
        <img
          className="object-contain lg:max-w-[450px] xl:max-w-[650px]"
          src={Code}
          alt=""
        />
      </div>
    </div>
  );
};

export default DesktopTools;
