import React from "react";
import ProjectIntro from "../../components/ProjectIntro";
import Footer from "../../components/Footer";
import ZineGif from "../../assets/sindhol/zine-full.gif";
import ZineLeft from "../../assets/sindhol/zine-left.gif";
import ZineRight from "../../assets/sindhol/zine-right.gif";
import LeftArrow from "../../assets/home-arrow.svg";
import GreenLeftArrow from "../../assets/info/green-left-arrow.svg";
import { Link } from "react-router-dom";

const Sindhol = () => {
  let paragraphs = [
    "From the Lambanis of Sindhol is an ethnographic study that focuses on the practice of Lambani embroidery within the Sindhol Thanda (Thanda meaning: A human settlement).",
    "Inspired by the fluid nature of the Lambani practitioners’ creative process, the research artifact took the form of a zine—a self-published, non-commercial magazine. The zine serves as a medium to authentically capture and represent the essence of Lambani embroidery. It’s unconventional layout and design reflect the unrestricted artistic spirit found within the Lambani community.",
  ];
  return (
    <div>
      <ProjectIntro
        title="From the Lambanis of Sindhol"
        paragraphs={paragraphs}
        year="2022"
        type="Ethnographic study, Zine"
        type2="TRANSDICIPLINARY LAB PROJECT"
      />

      <div className="hidden md:block">
        <img className="w-full object-contain" src={ZineGif} alt="" />
      </div>
      <div className="bg-black md:hidden">
        <div className="flex w-full justify-start">
          <img src={ZineLeft} alt="" />
        </div>
        <div className="flex w-full justify-end">
          <img src={ZineRight} alt="" />
        </div>
      </div>
      <section className=" bg-black  pt-10 lg:bg-backgroundGray lg:px-16">
        <div className="px-6 lg:flex lg:space-x-10 lg:px-0">
          <p className="text-white lg:text-primaryGreen">
            The zine covers a little introduction to the Thanda, the historic
            traces of the embroidery, the materials used in the making, the
            thought process of the practitioners, a visit to one of the
            marketplaces where the materials were sold, conversations with the
            practitioners, the rituals associated with the embroidery and the
            evolution of the craft within the Thanda.
          </p>
          <p className="pt-3 text-white lg:pt-0 lg:text-primaryGreen">
            The title “From the Lambanis of Sindhol” is in context to giving
            readers an understanding that the zine is like a letter from the
            people of Sindhol to the general public. The zine aims at looking at
            the craft practice through the lens of a community by giving its
            readers a slice of Sindhol’s embroidery practice.
          </p>
        </div>
        <div className="px-6 lg:px-0">
          <Link to={"/"}>
            <div className="flex w-full items-center space-x-3 pb-6 pt-14 lg:pb-8 lg:pt-16">
              <div>
                <img className="lg:hidden" src={LeftArrow} alt="" />
                <img className="hidden lg:block" src={GreenLeftArrow} alt="" />
              </div>
              <div>
                <p className="text-base text-white lg:text-xl lg:text-primaryGreen">
                  Home
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sindhol;
