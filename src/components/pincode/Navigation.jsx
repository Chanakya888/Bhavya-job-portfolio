import React from "react";
import Nav1 from "../../assets/pincode/navigation/nav1.png";
import Nav2 from "../../assets/pincode/navigation/nav2.png";
import Nav3 from "../../assets/pincode/navigation/nav3.png";
import Nav4 from "../../assets/pincode/navigation/nav4.png";
import Nav5 from "../../assets/pincode/navigation/nav5.png";
import Nav6 from "../../assets/pincode/navigation/nav6.png";
import Nav7 from "../../assets/pincode/navigation/nav7.png";
import Nav8 from "../../assets/pincode/navigation/nav8.png";
import Nav9 from "../../assets/pincode/navigation/nav9.png";

const Navigation = () => {
  return (
    <div className="flex space-x-6 overflow-x-scroll bg-pincodeYellow pb-8 pl-6 pt-8 lg:space-x-10 lg:pt-20">
      <div className="max-w-[280px] flex-none lg:max-w-[340px]">
        <img src={Nav1} alt="Nav 1" />
        <p className="pl-1 pr-2 pt-4 text-base lg:text-xl">
          Profile showcasing insights gathered from collected pincodes, along
          with additional account and app customization options 👤
        </p>
      </div>
      <div className="max-w-[280px] flex-none lg:max-w-[340px]">
        <img src={Nav2} alt="Nav 2" />
        <p className="pl-1 pr-12 pt-4 text-base lg:pr-4 lg:text-xl">
          Home featuring profile and explore buttons, alongside a top navigation
          bar enabling one-click search and display of saved pincodes 🏠
        </p>
      </div>
      <div className="max-w-[280px] flex-none lg:max-w-[340px]">
        <img src={Nav3} alt="Nav 3" />
      </div>
      <div className="max-w-[280px] flex-none lg:max-w-[340px]">
        <img src={Nav4} alt="Nav 4" />
        <p className="pl-1 pr-12 pt-4 text-base lg:pr-4 lg:text-xl">
          The place 📍
        </p>
      </div>
      <div className="max-w-[280px] flex-none lg:max-w-[340px]">
        <img src={Nav5} alt="Nav 5" />
        <p className="pl-1 pr-12 pt-4 text-base lg:pr-4 lg:text-xl">
          Pincode list 📝
        </p>
      </div>
      <div className="max-w-[280px] flex-none lg:max-w-[340px]">
        <img src={Nav6} alt="Nav 6" />
        <p className="pl-1 pr-12 pt-4 text-base lg:pr-4 lg:text-xl">
          Your Pincodes ✨
        </p>
      </div>
      <div className="max-w-[280px] flex-none lg:max-w-[340px]">
        <img src={Nav7} alt="Nav 7" />
        <p className="pl-1 pr-12 pt-4 text-base lg:pr-4 lg:text-xl">
          Choose to either share the entire list of pincodes or select specific
          ones to share 🤝
        </p>
      </div>
      <div className="max-w-[280px] flex-none lg:max-w-[340px]">
        <img src={Nav8} alt="Nav 8" />
        <p className="pl-1 pr-12 pt-4 text-base lg:pr-4 lg:text-xl">
          Create Your Pincode List 🖋️ 
        </p>
        <p className="pl-1 pr-12 pt-2 text-base lg:pr-4 lg:text-xl">
          Customize Icon & Description
        </p>
      </div>
      <div className="max-w-[280px] flex-none lg:max-w-[340px]">
        <img src={Nav9} alt="Nav 9" />
        <p className="pl-1 pr-12 pt-4 text-base lg:pr-4 lg:text-xl">
          User's Pincode Listed Place  
        </p>
        <p className="pl-1 pr-12 pt-2 text-base lg:pr-4 lg:text-xl">
          Tap to save Pincode & view location on your page 📌
        </p>
      </div>
      <div className="w-10"></div>
    </div>
  );
};

export default Navigation;
