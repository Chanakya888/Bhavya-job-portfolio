import React from "react";
import Cover1 from "../../assets/small-web/cover-1.png";
import Cover2 from "../../assets/small-web/cover-2.png";
import Cover3 from "../../assets/small-web/cover-3.png";
import Cover4 from "../../assets/small-web/cover-4.png";
import Cover5 from "../../assets/small-web/cover-5.png";
import ForCover from "../../assets/small-web/for-cover.gif";

const DesktopCover = () => {
  return (
    <section className="hidden lg:block">
      <div className="relative h-[940px] w-full bg-secondaryBlue p-20">
        <div className="h-[600px]">
          <div className="flex space-x-10">
            <div className="flex flex-col space-y-10">
              <img className="w-[200px] object-contain" src={Cover1} alt="" />
              <img className="w-[200px] object-contain" src={Cover2} alt="" />
            </div>
            <div className="flex h-[619px] items-center">
              <img className="w-[200px] object-contain" src={Cover3} alt="" />
            </div>
            <div className="flex h-[619px] items-end">
              <img className="w-[200px] object-contain" src={Cover4} alt="" />
            </div>
            <div className="flex h-[619px] items-center">
              <img className="w-[200px] object-contain" src={Cover5} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-16 right-16">
          <img
            className="w-full max-w-[240px] object-contain"
            src={ForCover}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default DesktopCover;
