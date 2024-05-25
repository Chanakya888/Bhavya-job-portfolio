import React from "react";
import ProjectIntro from "../components/ProjectIntro";
import DigitalBook from "../assets/archive/digital_book_new.png";
import Trail from "../assets/archive/trail.png";
import { Link } from "react-router-dom";
import GreenLeftArrow from "../assets/info/green-left-arrow.svg";
import Footer from "../components/Footer";

const Archive = () => {
  return (
    <>
      <div className="px-6 pt-12 lg:grid lg:grid-cols-14">
        <div className="lg:hidden">
          <h3 className="text-xl font-normal">Archive</h3>
        </div>
        <div className="mt-3 lg:col-start-1 lg:col-end-5 lg:mt-0 lg:flex lg:flex-col lg:justify-between xl:ml-10">
          <div className="p-container">
            <p className="text-base lg:text-xl">
              I’d like to think of this space as my digital brain where i get to
              share my thoughts, ideas or previous projects with people on the
              Internet. As a designer I am constantly iterating, and I believe
              this space will help me keep track.
            </p>
            <p className="text-base lg:text-xl">
              This space serves as a place to return to for inspiration or
              ideas.
            </p>
          </div>
          <div className="hidden lg:col-start-1 lg:block">
            <Link to="/">
              <div className="flex space-x-3">
                <img src={GreenLeftArrow} alt="" />
                <p className="tex-green">Home</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:col-start-6 lg:col-end-14 lg:mt-0">
          <div className="sticky top-0">
            <div className="border-[1px] border-solid border-primaryGreen bg-[#F1F1F1]">
              <div className="lg:grid lg:grid-cols-10">
                <div className="m-1 bg-[#DCEEE4] lg:col-start-1 lg:col-end-11 lg:m-2">
                  <p className="py-2.5 pl-2.5 text-base lg:text-xl">
                    Thoughts/ Ideas/ Archive
                  </p>
                </div>

                <div className="hidden lg:col-start-8 lg:col-end-11">
                  <div className="h-full w-px bg-primaryGreen"></div>
                  <div className="m-2 w-full bg-[#DCEEE4]">
                    <p className="py-2.5 pl-2.5 text-base lg:text-xl">
                      Time stamps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-x-[1px] border-b-[1px] border-solid border-primaryGreen">
            <div className="p-4 lg:grid lg:grid-cols-10">
              <div className="lg:col-start-1 lg:col-end-8">
                <p className="text-base lg:text-xl">
                  AR / Projected experimental art at home | At home experience
                  center
                </p>
              </div>
              <div className="hidden lg:col-start-8 lg:col-end-11">
                <div className="h-full w-px bg-primaryGreen"></div>
                <p className="text-base lg:text-xl">17 - 02 - 2024 22:24</p>
              </div>
              <div></div>
            </div>
            <div className="h-px bg-primaryGreen"></div>
            <div className="p-4">
              <p className="text-base lg:text-xl">
                Roger - A video to text (vice versa) + sign language application
                for people with hard of hearing and speaking
              </p>
            </div>
            <div className="h-px bg-primaryGreen"></div>
            <div className="p-4">
              <p className="text-base lg:text-xl">
                A Notion like CMS interface
              </p>
            </div>
            <div className="h-px bg-primaryGreen"></div>
            <div className="p-4">
              <p className="text-base lg:text-xl">Pinterest for places</p>
            </div>
            <div className="h-px bg-primaryGreen"></div>
            <div className="p-4">
              <p className="text-base lg:text-xl">
                A p5 interactive interface to tweak textile patterns
              </p>
            </div>
            <div className="h-px bg-primaryGreen"></div>
            <div className="p-container p-4">
              <p className="text-base lg:text-xl">
                As part of a workshop during my time at my design school, I
                curated an artist book. The workshop aimed to explore the book
                beyond its traditional codex form, encouraging experimentation
                with its shape, structure, medium, materiality and physicality.
                Usability was set aside in favor of pure experimentation and
                exploration which really opened avenues to making without the
                idea of user-centricity. The book is is based on a snippet from
                - The Original Accident by Paul Virelio - The title: A
                Dysfunctional Digital book.
              </p>
              <p className="text-base lg:text-xl">
                The book, shaped like a tunnel, is comprised of frames that
                symbolize different stages in the passage of time. Drawing from
                Paul Virilio's ‘The Original Accident,’ Virilio interprets one
                of Aristotle's remarks on the ‘passage of time’ illuminating the
                concept that every entity ultimately succumbs to accidents or
                catastrophes as time progresses
              </p>
              <p className="text-base lg:text-xl">
                In my book I interpreted technology through the passage of time
                (the tunnel shape) in my book, the fractured screen or the
                arrangement of frames in a tunnel-like structure can be
                interpreted as a sequence of such events unfolding over time.
              </p>
              <p className=" text-base lg:text-xl">View it here:</p>
              <p className="break-words text-base lg:text-xl">
                <a href="https://drive.google.com/file/d/1rosvuMsEZAHOYmedEMezw6UtnrRvq9uy/view">
                  https://drive.google.com/file/d/1rosvuMsEZAHOYmedEMezw6UtnrRvq9uy/view
                </a>
              </p>
            </div>
            <div className="h-px bg-primaryGreen"></div>
            <div className="p-container p-4">
              <p className="text-base lg:text-xl">
                The current freelance market lacks a centralized platform that
                enables freelancers to establish formal contracts with clients
                and validate their professional credentials, akin to the
                structured certification approach seen in platforms like
                Coursera for Google Certification.
              </p>
              <p className="text-base lg:text-xl">
                This absence of a dedicated solution results in fragmented
                engagements and challenges in showcasing freelance work in a
                credible and organized manner. Freelancers need a platform that
                streamlines contract creation and maintenance while enhancing
                the visibility and legitimacy of their services to potential
                clients.
              </p>
              <p className="text-base lg:text-xl">
                Furthermore, there will be a curated pool of freelancers
                available for clients to browse and engage with, curating a
                community within the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Footer color="green" />
      </div>
      <div className="hidden h-[90px] lg:block"></div>
    </>
  );
};

export default Archive;
