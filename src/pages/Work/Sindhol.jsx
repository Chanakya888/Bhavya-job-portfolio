import React, { useEffect, useState } from "react";
import ProjectIntro from "../../components/ProjectIntro";
import Footer from "../../components/Footer";
import ZineGif from "../../assets/sindhol/zine-full.gif";

const Sindhol = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" ">
      <ProjectIntro
        title="sindhol"
        year="2022"
        type="Ethnographic study, Zine"
        type2="TRANSDICIPLINARY LAB PROJECT"
      >
        <p>
          From the Lambanis of Sindhol is an ethnographic study that focuses on
          the practice of Lambani embroidery within the Sindhol Thanda (Thanda
          meaning: A human settlement).
        </p>
        <p>
          Inspired by the fluid nature of the Lambani practitioners’ creative
          process, the research artifact took the form of a zine—a
          self-published, non-commercial magazine. The zine serves as a medium
          to authentically capture and represent the essence of Lambani
          embroidery. It’s unconventional layout and design reflect the
          unrestricted artistic spirit found within the Lambani community.
        </p>
      </ProjectIntro>

      <div className="flex w-full justify-center bg-black">
        <img
          className="w-full scale-125 object-contain lg:scale-100"
          src={ZineGif}
          alt=""
        />
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
      </section>
      {screenWidth < 1024 ? (
        <div className="bg-black">
          <Footer color="white" nextProject="browser-project" />
        </div>
      ) : (
        <div className="bg-backgroundGray">
          <Footer color="green" nextProject="browser-project" />
        </div>
      )}
    </div>
  );
};

export default Sindhol;
