import React from "react";
import LeftArrow from "../assets/home-arrow.svg";
import GreenLeftArrow from "../assets/info/green-left-arrow.svg";
import { Link } from "react-router-dom";

const Footer = ({ color = "white" }) => {
  return (
    <Link to={"/"}>
      <div className="flex w-full items-center space-x-3 pb-6 pl-6 pt-14 lg:pb-8 lg:pl-8 lg:pt-16 xl:pb-12 xl:pl-12 xl:pt-44">
        <div>
          {color === "white" ? (
            <img src={LeftArrow} alt="" />
          ) : (
            <img src={GreenLeftArrow} alt="" />
          )}
        </div>
        <div>
          <p
            className={`text-base ${
              color === "white" ? "text-white" : "text-green"
            } lg:text-xl`}
          >
            Home
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Footer;
