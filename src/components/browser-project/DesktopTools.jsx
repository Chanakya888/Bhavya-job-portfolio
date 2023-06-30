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

        <video
          className="z-10 w-7/12 object-contain"
          src={Draw}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          Video is loading
        </video>
        <div className="flex w-[140px] items-end pl-3">
          <a
            href="https://twomuch.studio/projects/communitea"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="underline">3D image borrowed from Two much studio</p>
          </a>
        </div>
        <div className="absolute -bottom-80 left-10 max-w-[500px]">
          <div className="pr-5">
            <p>Stickies</p>
          </div>
          <video
            src={Tools}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          ></video>
        </div>
      </div>
      <div className="flex w-full justify-end space-x-3 pt-4 lg:pr-3 xl:pr-16">
        <div className="flex items-end">
          <p>Collaborate</p>
        </div>
        <video
          className="object-contain lg:max-w-[450px] xl:max-w-[650px]"
          src={Code}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        ></video>
      </div>
    </div>
  );
};

export default DesktopTools;
