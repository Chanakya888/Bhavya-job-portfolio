import React from "react";
import ProjectIntro from "../../components/ProjectIntro";
import Navbar from "../../components/Navbar";
import Interactions from "../../assets/small-web/interactions.png";
import ResponseA from "../../assets/small-web/response-a.png";
import ResponseB from "../../assets/small-web/response-b.png";
import Gradient from "../../assets/small-web/gradient.png";
import Proto from "../../assets/small-web/proto.png";
import LiveDemo from "../../assets/small-web/live.png";
import Footer from "../../components/Footer";
import DesktopCover from "../../components/small-web/DesktopCover";
import FieldGuideDesktop from "../../components/small-web/FieldGuideDesktop";
import FieldGuideMobile from "../../components/small-web/FieldGuideMobile";
import MobileCover from "../../components/small-web/MobileCover";

const SmallWeb = () => {
  let paragraphs = [
    "Public digital spaces are crucial for facilitating public discourse, community engagement, and collective action. They provide a platform for people to express themselves, seek support, learn from others, and collaborate on initiatives addressing shared challenges or promoting common interests.",
    "Editor X's article on Somewhere Good, a voice note-based social app for intimate community conversations and local hangout spots, nudged my interest in exploring this intervention that emphasized the need to shape our digital environment just as we do with physical spaces.",
  ];
  return (
    <div>
      <ProjectIntro
        title="The Small Social Web"
        paragraphs={paragraphs}
        year="2023"
        type="Speculative & Interaction design"
        type2="CAPSTONE PROJECT"
      />
      <DesktopCover />
      <MobileCover />
      <div className="w-full px-6 lg:px-16">
        <section>
          <div className="pt-10 lg:flex lg:space-x-10">
            <div className="p-container">
              <p>
                I look at field guides as a lightweight manual that makes it
                easier for people to understand what my intent with the context
                is just before I head out to the field. It gives me, as a
                researcher a sense of direction on how I would want to go about
                my micro context. The idea is to give readers a peek into what a
                small web-like world would feel like when designed to be open,
                creative, autonomous, and experimental and that runs without the
                baggage of user attention or generating engagement, capitalism,
                and surveillance.
              </p>
              <p>
                I look at field guides as a lightweight manual that makes it
                easier for people to understand what my intent with the context
                is just before I head out to the field. It gives me, as a
                researcher a sense of direction on how I would want to go about
                my micro context. The idea is to give readers a peek into what a
                small web-like world would feel like when designed to be open,
                creative, autonomous, and experimental and that runs without the
                baggage of user attention or generating engagement, capitalism,
                and surveillance.
              </p>
            </div>
            <div className="my-8 h-[240px] bg-secondaryBlue lg:hidden"></div>
            <div className="p-container">
              <p>
                The field guide borrows aspects of a park-like experience and
                puts them across interactions on the small social web. Parks are
                one of the physical public spaces around us that we come across
                almost everyday (I live in Bangalore and this has been my
                observation on parks). They consist of playgrounds, spaces to
                sit in, and gardens. Parks are not designed with the idea of
                surveillance or control and essentially encourage exploration,
                play, and community building. 
              </p>
              <p>
                These are some of the characteristics that have been put forward
                through the proposed field guide. The concept was to give people
                the essence of going through a digital space like a webpage but
                in a more tangible physical form that of a book/ zine.{" "}
              </p>
            </div>
          </div>
        </section>
        <FieldGuideMobile />
        <FieldGuideDesktop />
        <section className="pt-14">
          <p className="text-2xl md:text-3xl lg:text-5xl">The Interactions</p>
          <div className="p-container pt-5 lg:w-1/2 lg:pt-8">
            <p>
              For engaging people with the small social web, the field guide
              also inculcates two interactions:
            </p>
            <p>(i) One with the space (digital spaces) and the other </p>
            <p>
              (ii) With people (conversations or communication online);  that
              give readers an understanding of what are some potential
              experiences the they can gage with as they explore the small
              social web concept. 
            </p>
          </div>
          <div className="items-start lg:flex lg:space-x-16 lg:pt-20 xl:space-x-20">
            <img
              className="my-8 w-full max-w-[500px] object-contain lg:my-0"
              src={Interactions}
              alt=""
            />
            <div className="p-container">
              <p>
                (i) The first interaction is called ‘Like Benches in a Park’
                which offers an immersive space for people to Interact in an
                online public space. Almost every day we strangle our screens
                with a pattern of how conversations with people take place in a
                public digital space. There are profiles made, chat windows
                created, and a stack of text layers for showing the order in
                which one came first and which one in the end. 
              </p>
              <p>
                The idea of ‘Like benches in a park’ is to indicate an open
                park-like space where the conversations are organic, without the
                constraints of rigid structures or predetermined hierarchies. It
                suggests a space where people can come together, sit down, and
                engage with each other on an equal footing - sharing ideas, and
                interests, and forming communities in a more transparent manner.
              </p>
              <p>
                The intention was to observe and experiment on how do people
                create and form communities on an open space like this, how do
                they comment?, how do they gratify?, how do they highlight and
                interact with each other?.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <div className="lg:flex lg:space-x-10 xl:space-x-20">
              <div className="relative">
                <img className="w-full object-contain" src={ResponseA} alt="" />
                <p className="absolute left-0 top-0 lg:relative lg:flex lg:w-full lg:justify-center lg:pt-7">
                  (a)
                </p>
              </div>
              <div className="relative">
                <img className="w-full object-contain" src={ResponseB} alt="" />
                <p className="absolute left-0 top-0 lg:relative lg:flex lg:w-full lg:justify-center lg:pt-7">
                  (b)
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center pt-3 lg:pt-8">
              <p>Fig 1.1 - (a) & (b) Screenshots of responses </p>
            </div>
          </div>
        </section>
        <section className="w-full lg:mt-28">
          <div className="grid-cols-2 gap-x-10 lg:grid">
            <div className="order-2 my-8 max-w-[550px] lg:my-0 ">
              <img className=" w-full object-contain" src={Gradient} alt="" />
            </div>
            <div className="p-container order-1">
              <p>
                (ii) ‘Like pathways in a park’ is a gradient color-based
                community engagement space that offers people an immersive and
                interactive experience as they explore different communities.
                The design is centered around the concept of pathways, and
                encourages visitors to explore the space in a way that mimics a
                walk through a park.
              </p>
              <p>
                By using a gradient color-based theme, the space creates a
                visual representation of different communities that are
                scattered across the color gradients and are embedded within
                each of the color hex codes - providing people with a less rigid
                space structure and a more authentic yet explorative experience
                of the social web. 
              </p>
              <p>
                People essentially need to walk around in their physical spaces
                to find communities around them. The color gradient changes as
                they move around, and the communities only pop up as you go
                closer towards them. The arrow cursor essentially acts like a
                location pin for the person moving around in real time.
              </p>
            </div>
          </div>
          <div className="pt-3">
            <div className="flex flex-col lg:flex-row lg:space-x-10">
              <div className="lg:flex lg:flex-col-reverse">
                <p className="text-xs lg:flex lg:w-full lg:justify-center lg:pt-3">
                  (a)
                </p>
                <img className="object-contain" src={LiveDemo} alt="" />
              </div>
              <div className="pt-3 lg:flex lg:flex-col-reverse  lg:pt-0">
                <p className="text-xs lg:flex lg:w-full lg:justify-center lg:pt-3">
                  (b)
                </p>
                <img className="object-contain" src={Proto} alt="" />
              </div>
            </div>
            <div className="flex justify-center pt-3 lg:pt-12">
              <p>Fig 1.2 - (a) Prototype on Figma , (b) Live demo </p>
            </div>
          </div>
        </section>
      </div>
      <section className="mt-14 bg-secondaryBlue pt-7 lg:pt-24">
        <div className="p-container px-6 text-white lg:w-8/12 lg:px-12">
          <p className=" text-white">
            The project "Reimagining a Public Digital Space: The Small Web
            Edition" has been a journey of exploration and discovery into the
            potential of the small social web. Through Netnographic studies,
            surveys, observations, and discussion sessions, the project has been
            collated into a field guide that brings together key concepts for
            people to understand and engage with. The future of the small social
            web is promising as people seek out alternative digital spaces that
            aren't driven solely by profit and data collection, and we delve
            deeper into its possibilities.
          </p>
          <p className=" text-white">
            This project serves as a conversation starter for those interested
            in exploring the creative and experimental side of the smaller side
            of the web through a tangible artefact like a field guide.
          </p>
          <p className="text-white">
            Here with the concept of the small social web the focus is on
            creating communities equivalent to creating kinship and in some
            sense experimenting with an abstract form of communication - where
            people can get to go beyond the institutional boundaries of a
            platform and challenge the notions of what an open web space can do.
          </p>
          <p className="text-white">
            However, the idea is to co-create spaces on the small social web
            that foster the notion of public good. This can lead to a more open
            and inclusive online environment where people can come together to
            collaborate, learn from one another, and work towards common goals,
            all while fostering a sense of belonging and community that goes
            beyond the templatized kinship structures that we get to experience
            today.
          </p>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default SmallWeb;
