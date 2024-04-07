import React from "react";
import FeatureBreakDown_1 from "../../assets/pincode/feature_breakdown_1.mp4";
import FeatureBreakDown_2 from "../../assets/pincode/feature_breakdown_2.mp4";

const FeatureBreakDownMedia = () => {
  return (
    <>
      <div className="-mx-6 pt-5 lg:mx-0 lg:hidden">
        <div className="space-y-5 bg-[#F7F5A0] px-12 py-8">
          <video
            src={FeatureBreakDown_1}
            autoPlay
            loop
            muted
            playsInline
            width="100%"
          />
          <video
            src={FeatureBreakDown_2}
            autoPlay
            loop
            muted
            playsInline
            width="100%"
          />
        </div>
      </div>
    </>
  );
};

export default FeatureBreakDownMedia;
