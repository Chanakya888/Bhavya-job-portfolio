import React from "react";
import ProjectIntro from "../components/ProjectIntro";
import DigitalBook from "../assets/archive/digital_book_new.png";
import Trail from "../assets/archive/trail.png";
import { Link } from "react-router-dom";
import GreenLeftArrow from "../assets/info/green-left-arrow.svg";
import Footer from "../components/Footer";

const Archive = () => {
  return (
    <div className="border-1 m-1.5 mt-20 grid border border-primaryGreen lg:grid-cols-2 ">
      <div className="grid-auto-rows grid">
        <div>
          <div className="p-3.5">
            <p className="">The Dysfunctional Digital Book</p>
            <p className="pt-1">
              An artist book concept based on a snippet from -
              <br />
              The Original Accident by Paul Virelio.
            </p>
          </div>
          <div className="h-px w-full bg-primaryGreen"></div>
          <div className="flex w-full justify-center">
            <img
              className="max-h-[380px]"
              src={DigitalBook}
              alt="digital book image"
            />
          </div>
          <div className="w-full">
            <div className="flex justify-end">
              <button className=" bg-primaryGreen p-3 text-xs text-white">
                Checkout the Book video
              </button>
            </div>
            <div className="h-px w-full bg-primaryGreen"></div>
          </div>
        </div>
        <div>
          <div className="p-3.5">
            <p className="">The Trail</p>
            <p className="pt-1">Experiments with p5.js</p>
          </div>
          <div className="h-px w-full bg-primaryGreen"></div>
          <div className="flex w-full items-center justify-center py-20">
            <img src={Trail} alt="digital book image" />
          </div>
        </div>
      </div>
      <div className="hidden border border-y-0 border-l border-r-0 border-primaryGreen lg:block">
        <div className="flex min-h-[104px] items-center p-3.5 pl-5">
          <p className="text-xl">Idea Pot</p>
        </div>
        <div className="h-px w-full bg-primaryGreen"></div>
        <div className="grid w-full grid-cols-5 py-5 pl-5">
          <div className="col-span-3 pr-3">
            <p className="">
              AR / Projected experimental art at home | at home experience
              center
            </p>
          </div>
          <div className="col-span-1">
            <p>17.02</p>
          </div>
          <div className="col-span-1">
            <p>10:00AM</p>
          </div>
        </div>
        <div className="h-px w-full bg-primaryGreen"></div>
        <div className="grid w-full grid-cols-5 py-5 pl-5">
          <div className="col-span-3 pr-3">
            <p className="">
              Roger - A video to text (vice versa) + sign language application
              for people with hard of hearing and speaking
            </p>
          </div>
          <div className="col-span-1">
            <p>18.02</p>
          </div>
          <div className="col-span-1">
            <p>7:30PM</p>
          </div>
        </div>
        <div className="h-px w-full bg-primaryGreen"></div>
        <div className="grid w-full grid-cols-5 py-5 pl-5">
          <div className="col-span-3 pr-3">
            <p>A Notion like CMS interface</p>
          </div>
          <div className="col-span-1">
            <p>18.02</p>
          </div>
          <div className="col-span-1">
            <p>9:43PM</p>
          </div>
        </div>
        <div className="h-px w-full bg-primaryGreen"></div>
      </div>
    </div>
  );
};

export default Archive;
