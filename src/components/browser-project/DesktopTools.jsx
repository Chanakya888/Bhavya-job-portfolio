import React from "react";
import Tools from "../../assets/browser-project/the-tools.mp4";
import Draw from "../../assets/browser-project/draw.mp4";
import Code from "../../assets/browser-project/code.mp4";

const DesktopTools = () => {
  return (
    <div className="hidden lg:inline ">
      <div className="relative flex w-full justify-center ">
        <div className="pr-5">
          <p>Draw</p>
        </div>
        {/* <img className="z-10 w-7/12 object-contain" src={Draw} alt="" /> */}
        <video
          className="z-10 w-7/12 object-contain"
          src={Draw}
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute -bottom-60 left-20 max-w-[480px] ">
          <div className="pr-5">
            <p>Stickers</p>
          </div>
          {/* <img className="w-full object-contain" src={Tools} alt="" /> */}
          <video src={Tools} autoPlay loop muted></video>
        </div>
      </div>
      <div className="flex w-full justify-end pt-4 lg:pr-3 xl:pr-16">
        <div className="flex items-end">
          <p>Collaborate</p>
        </div>
        {/* <img
          className="object-contain lg:max-w-[450px] xl:max-w-[650px]"
          src={Code}
          alt=""
        /> */}
        <video
          className="object-contain lg:max-w-[450px] xl:max-w-[650px]"
          src={Code}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default DesktopTools;
