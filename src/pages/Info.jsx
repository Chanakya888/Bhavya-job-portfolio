import React from "react";
import ProfilePicture from "../assets/info/profile-picture.png";
import Hrline from "../components/Hrline";
import { Link } from "react-router-dom";
import GreenLeftArrow from "../assets/info/green-left-arrow.svg";
import EmailIcon from "../assets/email-icon.svg";

const Info = () => {
  return (
    <div className="calc-height">
      <div className=" px-3 pt-10 lg:pt-20 xl:pt-24">
        <div className=" lg:flex lg:w-10/12 lg:space-x-12 lg:px-12 xl:space-x-16">
          <div className="lg:w-2/5">
            <img
              className="h-full w-full object-cover"
              src={ProfilePicture}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between pt-8 lg:w-3/5 lg:max-w-[457px] lg:pt-0">
            <div>
              {/* <p className="text-xl font-medium uppercase lg:text-2xl">
                biographical note
              </p> */}
              <div className="p-container">
                <p>
                  I am a Computer Science Engineer and a UX Designer. I have
                  around a year and half of professional experience and a formal
                  design education from Srishti Manipal Institute of Art, Design
                  and Technology (Bangalore, India). My personal goal as a
                  designer is to explore as many facets of design and get to
                  work around them. I really like the research part of any
                  design process as it involves exploring and discovering new
                  ideas.
                </p>
                <p>
                  I am currently in a rabbit hole exploring the "drawing with
                  code" part of design (p5.js) and working around how can this
                  be intersected with Generative Art.
                </p>
                <p>
                  I can bring in creative perspectives and ideas to any process,
                  and I get real excited when I get to learn new methods or work
                  around something new (whether it's digital interfaces,
                  tangible materials or concepts).
                </p>
                <p>If you have any similar thoughts or ideas lets chat.</p>
              </div>
            </div>
            <div className="pt-3">
              <Hrline />
              <div className="space-y-1.5 pt-2.5">
                <p>For projects/ inquires, please contact:</p>
                <a href="mailto:dsg.bhavya@gmail.com">
                  <div className="flex space-x-1.5 pt-3">
                    <img
                      className="w-[16px] object-contain"
                      src={EmailIcon}
                      alt=""
                    />
                    <p>dsg.bhavya@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <Link to={"/"}>
          <div className="flex w-full items-center space-x-3 pb-2 pl-3 pt-8 lg:pb-8 lg:pl-16 lg:pt-16 xl:pb-10 xl:pl-12 xl:pt-64">
            <div>
              <img src={GreenLeftArrow} alt="" />
            </div>
            <div>
              <p className="text-green text-base lg:text-xl">Home</p>
            </div>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Info;
