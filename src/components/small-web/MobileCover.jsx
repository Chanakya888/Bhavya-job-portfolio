import React from "react";
import Cover1 from "../../assets/small-web/cover-1.png";
import Cover2 from "../../assets/small-web/cover-2.png";
import Cover3 from "../../assets/small-web/cover-3.png";
import Cover4 from "../../assets/small-web/cover-4.png";
import Cover5 from "../../assets/small-web/cover-5.png";
import ForCover from "../../assets/small-web/for-cover.gif";

const MobileCover = () => {
  return (
    <section className="mt-30 lg:hidden ">
      <div>
        <img className="w-full object-contain" src={ForCover} alt="" />
      </div>
      <div className="flex  w-full items-center space-x-3 overflow-x-scroll bg-secondaryBlue px-16 pb-20 pt-10">
        <img
          className="h-[322px] w-[226px] object-contain"
          src={Cover1}
          alt=""
        />
        <img
          className="h-[322px] w-[226px] object-contain"
          src={Cover2}
          alt=""
        />
        <img
          className="h-[322px] w-[226px] object-contain"
          src={Cover3}
          alt=""
        />
        <img
          className="h-[322px] w-[226px] object-contain"
          src={Cover4}
          alt=""
        />
        <img
          className="h-[322px] w-[226px] object-contain"
          src={Cover5}
          alt=""
        />
      </div>
    </section>
  );
};

export default MobileCover;
