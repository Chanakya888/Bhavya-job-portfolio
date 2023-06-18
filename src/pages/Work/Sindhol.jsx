import React from "react";
import Navbar from "../../components/Navbar";
import ProjectIntro from "../../components/ProjectIntro";

const Sindhol = () => {
  let paragraphs = [
    "From the Lambanis of Sindhol is an ethnographic study that focuses on the practice of Lambani embroidery within the Sindhol Thanda (Thanda meaning: A human settlement).",
    "Inspired by the fluid nature of the Lambani practitioners’ creative process, the research artifact took the form of a zine—a self-published, non-commercial magazine. The zine serves as a medium to authentically capture and represent the essence of Lambani embroidery. It’s unconventional layout and design reflect the unrestricted artistic spirit found within the Lambani community.",
  ];
  return (
    <div>
      <Navbar />
      <ProjectIntro
        title="From the Lambanis of Sindhol"
        paragraphs={paragraphs}
        year="2022"
        type="Ethnographic study, Zine"
        type2="TRANSDICIPLINARY LAB PROJECT"
      />
      <section className="px-6 lg:px-16">
        <div></div>
        <div className="lg:flex lg:space-x-10">
          <p>
            The zine covers a little introduction to the Thanda, the historic
            traces of the embroidery, the materials used in the making, the
            thought process of the practitioners, a visit to one of the
            marketplaces where the materials were sold, conversations with the
            practitioners, the rituals associated with the embroidery and the
            evolution of the craft within the Thanda.
          </p>
          <p className="pt-3 lg:pt-0">
            The title “From the Lambanis of Sindhol” is in context to giving
            readers an understanding that the zine is like a letter from the
            people of Sindhol to the general public. The zine aims at looking at
            the craft practice through the lens of a community by giving its
            readers a slice of Sindhol’s embroidery practice.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sindhol;
