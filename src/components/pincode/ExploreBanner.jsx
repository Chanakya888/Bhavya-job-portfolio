import React from "react";
import ExploreBannerMov from "../../assets/pincode/explore_banner.mp4";
import ExploreComponent from "../../assets/pincode/explore_component.png";

const ExploreBanner = () => {
  return (
    <div className="-mx-6 mt-8 bg-transparentPincodeYellow px-6 pb-10 lg:mx-0 lg:flex lg:justify-between">
      <div className="ml-auto max-w-[300px] lg:ml-20">
        <video
          src={ExploreBannerMov}
          autoPlay
          loop
          muted
          playsInline
          width="100%"
        />
      </div>
      <div className="xl: mr-20 w-full pt-4 lg:mr-16 lg:mt-auto lg:max-w-[340px]">
        <img src={ExploreComponent} alt="explore component" />
      </div>
    </div>
  );
};

export default ExploreBanner;
