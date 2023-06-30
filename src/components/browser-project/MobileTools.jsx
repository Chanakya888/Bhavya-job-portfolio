import React from "react";
import LeftSideText from "./LeftSideText";
import RightSideText from "./RightSideText";
import Tools from "../../assets/browser-project/the-tools.mp4";
import Notes from "../../assets/browser-project/notes.png";
import Draw from "../../assets/browser-project/draw.mp4";
import Code from "../../assets/browser-project/code.mp4";

const MobileTools = () => {
  return (
    <div className="lg:hidden">
      <section>
        <LeftSideText>
          <div className="p-container pt-2">
            <p className="italic">The tools</p>
            <p>
              Called the browser tools and placed at the bottom of the browser
              pane. These tools allow you a space to collaborate, create, and be
              productive. This section consists of:
            </p>
          </div>
        </LeftSideText>
      </section>
      <section>
        <div className="mt-6 px-6">
          <video
            src={Tools}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          ></video>
        </div>
        <RightSideText>
          <p>
            A stickies wall - Play around with the post its and keep track of
            your important meetings/ reminders
          </p>
        </RightSideText>
      </section>
      <section>
        <div className="mt-10 px-6">
          <img className="w-full object-contain" src={Notes} alt="" />
        </div>
        <div className="x-padding p-container mt-3 w-1/2">
          <p>
            Notes - Make notes as you read or participate in a meeting, share
            them as PDF’s or links later.
          </p>
          <p>
            Create a new space - Either use the + sign near the identity section
            or come down to the browser tools and create a new space on your
            browser.
          </p>
        </div>
      </section>
      <section>
        <div className="mt-10 px-6">
          <video
            className="w-full object-contain"
            src={Code}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          ></video>
        </div>
        <RightSideText>
          <p>
            Collaborate feature - This allows you to collaborate your screen
            over the browser window.
          </p>
          <p>
            The idea was to have friends read over each others essays,
            programmers go through their codes and have the access to edit in
            real time, annotate together and essentially offer people what it
            can feel to be in the digital arena together.
          </p>
        </RightSideText>
      </section>
      <section>
        <div className="mt-10 px-6">
          <video
            className="w-full object-contain"
            src={Draw}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          ></video>
        </div>
        <div className="x-padding flex w-full justify-end pt-0.5">
          <a
            href="https://twomuch.studio/projects/communitea"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="super-small underline">
              3D image borrowed from Two much studio
            </p>
          </a>
        </div>
        <LeftSideText>
          <div className="p-container pt-2">
            <p>
              Draw - The draw space allows you to sketch out ideas as and when
              you are engaging with the content online. This space allows -
              text, images and has a pencil tool to sketch out ideas.
            </p>
          </div>
        </LeftSideText>
      </section>
    </div>
  );
};

export default MobileTools;
