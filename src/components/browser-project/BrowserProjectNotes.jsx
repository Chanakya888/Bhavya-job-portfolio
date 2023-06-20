import React from "react";
import Notes from "../../assets/browser-project/notes.png";

const BrowserProjectNotes = () => {
  return (
    <section className="relative mb-8 hidden px-16 lg:mt-44 lg:block ">
      <img className="w-full object-contain " src={Notes} alt="" />
      <div className="p-container absolute lg:right-28 lg:top-2 lg:w-[700px] xl:right-28 xl:top-20 xl:w-[554px]">
        <p className="italic">The tools</p>
        <p>
          Called the browser tools and placed at the bottom of the browser pane.
          These tools allow you a space to collaborate, create, and be
          productive. This section consists of -
        </p>
        <ul className="list-disc">
          <li>
            A stickies wall - Play around with the post its and keep track of
            your important meetings/ reminders
          </li>
          <li>
            Collaborate feature - This allows you to collaborate your screen
            over the browser window. The idea was to have friends read over each
            others essays, programmers go through their codes and have the
            access to edit in real time, annotate together and essentially offer
            people what it can feel to be in the digital arena together.
          </li>
          <li>
            Notes - Make notes as you read or participate in a meeting, share
            them as PDF’s or links later.
          </li>
          <li>
            Draw - The draw space allows you to sketch out ideas as and when you
            are engaging with the content online. This pace allows - text,
            images and has a pencil tool to sketch out ideas.
          </li>
          <li>
            Create a new space - Either use the + sign near the identity section
            or come down to the browser tools and create a new space on your
            browser.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BrowserProjectNotes;
