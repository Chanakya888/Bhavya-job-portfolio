import React from "react";
import LeftArrow from "../assets/home-arrow.svg";
import GreenLeftArrow from "../assets/info/green-left-arrow.svg";
import { Link } from "react-router-dom";

const Footer = ({ color = "white", nextProject }) => {
  return (
    <div className="flex w-full justify-between px-6 pb-6 pt-14 lg:px-8 lg:pb-8 lg:pt-16 xl:px-12 xl:pb-12 xl:pt-20">
      <Link to={"/"}>
        <div className="flex w-full items-center space-x-3 ">
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

      {nextProject && (
        <Link to={`/${nextProject}`}>
          <div className="flex w-full items-center space-x-3 ">
            <div>
              <p
                className={`text-base ${
                  color === "white" ? "text-white" : "text-green"
                } lg:text-xl`}
              >
                Next Project
              </p>
            </div>
            <div>
              {color === "white" ? (
                <img className="rotate-180" src={LeftArrow} alt="" />
              ) : (
                <img className="rotate-180" src={GreenLeftArrow} alt="" />
              )}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Footer;
