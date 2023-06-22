import React from "react";
import ProfilePicture from "../assets/info/profile-picture.png";
import Hrline from "../components/Hrline";
import { Link } from "react-router-dom";
import GreenLeftArrow from "../assets/info/green-left-arrow.svg";

const Info = () => {
  return (
    <div className="calc-height">
      <div className=" px-3 pt-10 lg:pt-20 xl:pt-24">
        <div className=" lg:flex lg:w-10/12 lg:space-x-12 lg:px-12 xl:space-x-16">
          <div className="lg:w-2/5 lg:pt-10">
            <img
              className="w-full object-contain"
              src={ProfilePicture}
              alt=""
            />
          </div>
          <div className="pt-8 lg:w-3/5 lg:pt-0">
            <p className="text-xl font-medium uppercase lg:text-2xl">
              biographical note
            </p>
            <div className="p-container pt-2 lg:pt-5">
              <p>
                Bhavya Gupta is a M.Des in Human-Centered design graduate from
                Srishti Manipal Institute of Art, Design & Technology,
                Bangalore, India. She comes from an engineering background, and
                her interests lie in Interaction, visual, new media and
                experience design.{" "}
              </p>
              <p>
                The portfolio only highlights some major chunks about the
                projects to give its basic essence. To know more about the
                process and its details do write a mail to the given below
                contact.
              </p>
            </div>
            <div className="pt-3">
              <Hrline />
              <div className="space-y-1.5 pt-2.5">
                <p>For projects/ inquires, please contact:</p>
                <p>dsg.bhavya@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Link to={"/"}>
          <div className="flex w-full items-center space-x-3 pb-2 pl-3 pt-8 lg:pb-8 lg:pl-8 lg:pt-16 xl:pb-10 xl:pl-12 xl:pt-64">
            <div>
              <img src={GreenLeftArrow} alt="" />
            </div>
            <div>
              <p className="text-green text-base lg:text-xl">Home</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Info;
