import React from "react";
import ProjectIntro from "../../components/ProjectIntro";
import TitleImage from "../../assets/browser-project/title-image.png";
import Anatomy from "../../assets/browser-project/anatomy.gif";
import Frequently from "../../assets/browser-project/frequently.gif";
import Tabs from "../../assets/browser-project/the-tabs.gif";
import LeftSideText from "../../components/browser-project/LeftSideText";
import RightSideText from "../../components/browser-project/RightSideText";
import BrowserProjectNotes from "../../components/browser-project/BrowserProjectNotes";
import MobileTools from "../../components/browser-project/MobileTools";
import DesktopTools from "../../components/browser-project/DesktopTools";
import Footer from "../../components/Footer";

const BrowserProject = () => {
  let paragraphs = [
    "Our window to the Internet are our browsers. With over 33 years since the first browser came out our interactions with the Internet evolved but our windows to these interactions remained pretty much the same. The browser project is an intervention aimed at unlocking the vast potential that lies within these browsers.",
    "This project aims to rethink the traditional role of browsers, expand their capabilities, and unlock their potential to become powerful tools for productivity, creativity, and discovery.",
  ];
  return (
    <div>
      <ProjectIntro
        title="The Browser Project"
        paragraphs={paragraphs}
        year="2023"
        type="UI/UX"
        type2="SELF INITIATED"
      />
      <div className="flex w-full justify-center bg-secondaryPurple py-6 lg:py-20 xl:py-24">
        <img className="w-9/12 object-contain" src={TitleImage} alt="" />
      </div>
      <section className="mt-16 lg:flex ">
        <LeftSideText>
          <p className="whitespace-nowrap text-2xl md:text-3xl lg:text-5xl">
            Anatomy of the browser
          </p>
          <div className="p-container pt-8 lg:pt-32">
            <p className="italic">Identity of the space</p>
            <p>
              Identify the browser space you are in, get to the change the name
              with one click, add a new space using the + icon beside the name
              of the space.
            </p>
            <p>
              Your most frequently used tabs can be put under the favorites
              section, which is right below the search bar.
            </p>
          </div>
        </LeftSideText>
        <div className="flex w-full justify-end overflow-hidden pt-2 lg:pt-32">
          <img
            className="translate-x-[150px] object-cover lg:translate-x-[50px] lg:object-contain"
            src={Anatomy}
            alt=""
          />
        </div>
      </section>
      <section className="pt-10 lg:flex lg:pt-44">
        <div className="flex w-full justify-start overflow-hidden">
          <img
            className="max-w-[278px] object-cover lg:w-full lg:max-w-[700px] lg:object-contain"
            src={Frequently}
            alt=""
          />
        </div>
        <RightSideText>
          <p className="italic">Frequently visited</p>
          <p>
            Under the favorites section are the extensions and pinned spaces.
          </p>
          <p>
            The scrolling is vertical to experiment with the current scrolling
            nature of the browsers and also to cater to a consistent vertical
            behavior throughout the window.
          </p>
        </RightSideText>
      </section>

      <section className="pt-10 lg:flex lg:flex-row-reverse lg:pt-44">
        <div className="flex w-full justify-end overflow-hidden pt-2">
          <img
            className="translate-x-[150px] object-cover lg:translate-x-[50px] lg:object-contain"
            src={Tabs}
            alt=""
          />
          {/* <video src={Tabs} autoPlay loop></video> */}
        </div>
        <LeftSideText>
          <div className="p-container pt-2">
            <p className="italic">The tabs</p>
            <p>The tabs are all placed one below the other like a stack.</p>
            <p>
              Since the browser pane is towards towards the left the idea was to
              keep the scrolling throughout the space vertical for a consistent
              behavior.
            </p>
            <p>
              You can click on the + sign to add a new tab. The blue line beside
              the tab is to indicate you are on this tab even if you decide to
              move around your browser window.
            </p>
          </div>
        </LeftSideText>
      </section>
      <BrowserProjectNotes />
      <div className="p-white mt-16 bg-browserProjectBlue pt-8 lg:mt-10 lg:pt-24">
        <MobileTools />
        <DesktopTools />
        <section className="x-padding mt-28 md:w-7/12 lg:pt-44">
          <p className="text-base italic lg:text-4xl">
            More than just a window
          </p>
          <div className="p-container pt-3 lg:pt-8">
            <p>
              The Internet has undergone a radical transformation in recent
              years, and the way we use it has also evolved. However, browsers
              have remained relatively stagnant, retaining their archaic
              functionalities and capabilities. There is a need for an overhaul
              of browser design to unleash their full potential and improve the
              user experience.
            </p>
            <p>
              One of the primary reasons for this alteration is to accommodate
              the expanding usage of the internet for work, learning, and
              collaboration. With the upsurge of remote work and distance
              learning, there is a demand for browsers to incorporate features
              that facilitate real-time collaboration, document sharing, and
              video conferencing.
            </p>
            <p>
              This project essentially is a basic prototype on re-imagining the
              way we experience our browsers. The idea was to focus on
              experimenting with interactions and the overall browser look and
              feel.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default BrowserProject;
