import React from "react";
import ProjectIntro from "../components/ProjectIntro";
import DigitalBook from "../assets/archive/digital-book.png";
import { Link } from "react-router-dom";
import GreenLeftArrow from "../assets/info/green-left-arrow.svg";
import Footer from "../components/Footer";

const Archive = () => {
  let paragraphs = [
    "The Artist book is themed around the concept of a physical book that evokes a sense of a dysfunctional digital book.",
    "The tunnel-like shaped book essentially consists of a set of frames that induce the idea of various stages in the passage of time. The Artist book here tries to inculcate the idea of a short snippet taken from Paul Virilio's - The Original Accident, which is also the text of the book. Virilio interprets one of Aristotle's remarks on the “passage of time”. He essentially throws light on how every substance or being, in the end, eventually becomes a victim of the accident (a catastrophe) in the cumulative course of time.",
    "The idea that I wanted to take back from the text was the part with passage of time and unplanned events (ie -accidents/castastrophes) and how we essentially succumb to these unplanned events.",
    "For my book, the broken screen or the arrangement of the frames in a tunnel like body can perhaps be considered as the series of such events that occur over the circulation of time.",
  ];
  return (
    <div>
      <ProjectIntro
        title="The Dysfunctional Digital book"
        paragraphs={paragraphs}
        year="2022"
        type="Artist Book"
        type2="workshop"
      />
      <section className="relative w-full lg:flex lg:flex-row-reverse lg:justify-between">
        <div className="flex w-full justify-end">
          <img
            className="w-full object-contain lg:relative lg:-top-60 lg:w-full"
            src={DigitalBook}
            alt=""
          />
        </div>
        <div className="flex w-full justify-center pt-10 lg:justify-start lg:px-16 lg:pt-0">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1rosvuMsEZAHOYmedEMezw6UtnrRvq9uy/view?usp=sharing"
            >
              <p className="underline">Link to the Book video</p>
            </a>
          </div>
        </div>
        <div className="absolute bottom-20 left-0 hidden lg:block">
          <Link to={"/"}>
            <div className="flex w-full items-center space-x-3 pb-6 pl-6 lg:pb-8 lg:pl-8 xl:pb-12 xl:pl-12">
              <div>
                <img src={GreenLeftArrow} alt="" />
              </div>
              <div>
                <p className="text-green text-base lg:text-xl">Home</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <div className="lg:hidden">
        <Footer color="green" />
      </div>
    </div>
  );
};

export default Archive;
