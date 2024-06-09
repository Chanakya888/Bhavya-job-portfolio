import React from "react";
import ProfilePicture from "../assets/info/profile-picture.png";
import Hrline from "../components/Hrline";
import { Link } from "react-router-dom";
import GreenLeftArrow from "../assets/info/green-left-arrow.svg";
import EmailIcon from "../assets/email-icon.svg";

const Info = () => {
  return (
    <div className="h-screen">
      <div className=" lg:calc-height px-6 pt-10 lg:grid lg:grid-cols-14 lg:pt-20 xl:pt-24">
        <div className="lg:col-start-1 lg:col-end-5 lg:pl-10">
          <img
            className="h-full w-full object-cover lg:pb-1.5"
            src={ProfilePicture}
            alt=""
          />
        </div>
        <div className="increase-p-size flex flex-col justify-between pt-8 lg:col-start-6 lg:col-end-14 lg:pt-0">
          <div>
            <div className="p-container">
              <p>
                In simple words: I design experiences through the medium of
                digital interfaces. My approach to problem-solving is
                multi-disciplinary: observing people, understanding spaces, and
                engaging deeply in context. I am a Computer Science Engineer
                with a Master's in{" "}
                <span className="underline">Human-Centered Design.</span> My
                journey in design began with a few Google searches during a
                hackathon around the 6th semester of my engg. course, that led
                me down an unending list of rabbit holes, each more fascinating
                than the last. Since then, I have been deeply curious about
                every conversation around design, behaviour patterns,
                technology, humans, and their experiences.
              </p>
              <p>
                Currently, I'm exploring drawing with code (p5.js), mixed media
                animations, and how these intersect with Generative Art.
              </p>
              <p>
                I bring creative perspectives and ideas to any process and
                thrive on learning and gauging with new concepts and frameworks,
                whether they involve tangible materials, digital products, or
                research methodologies.
              </p>
              <p>If you have any similar thoughts or ideas, lets chat. </p>
            </div>
          </div>
          <div className="pt-3">
            <Hrline />
            <div className="space-y-1.5 pt-2.5">
              <p>For projects/ inquires, please contact:</p>
              <a href="mailto:dsg.bhavya@gmail.com">
                <div className="flex space-x-1.5 ">
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
        <div className="mt-20 space-y-1 pb-8 lg:col-start-6 lg:space-y-4">
          <p className="add-circular-std text-xs font-medium">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/bhavyagupta26/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              @bhavyeahgupta
            </a>
          </p>
          <p className="add-circular-std text-xs font-medium">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/bhavyeahgupta/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              @bhavyeahgupta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
