import React from "react";
import FeatureBreakDown_1 from "../../assets/pincode/feature_breakdown_1.mp4";
import FeatureBreakDown_2 from "../../assets/pincode/feature_breakdown_2.mp4";

const FeatureBreakDownMediaBig = () => {
  return (
    <>
      <div className="hidden pt-5 lg:block">
        <div className="flex justify-between bg-[#F7F5A0] p-20">
          <video
            src={FeatureBreakDown_1}
            autoPlay
            loop
            muted
            playsInline
            className="max-w-[300px] xl:max-w-[400px]"
          />
          <video
            src={FeatureBreakDown_2}
            autoPlay
            loop
            muted
            playsInline
            className="max-w-[300px] xl:max-w-[400px]"
          />
        </div>
      </div>
    </>
  );
};

export default FeatureBreakDownMediaBig;
