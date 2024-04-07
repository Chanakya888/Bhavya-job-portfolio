import { useEffect, useState } from "react";
import ProjectIntro from "../../components/ProjectIntro";
import Footer from "../../components/Footer";
import ZineGif from "../../assets/sindhol/zine-full.gif";
import prayer1 from "../../assets/sindhol/lambani_img_1.png";
import prayer2 from "../../assets/sindhol/lambani_img_2.png";

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
    <div>
      <ProjectIntro
        title="sindhol"
        year="2022"
        type="Ethnographic study, Zine"
        type2="TRANSDISCIPLINARY RESEARCH"
        noTopPadding={true}
        showMentor={true}
        mentorName="Shreyas"
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

      <div className="bg-[#010101]">
        <div className="flex w-full justify-center overflow-hidden pt-10">
          <img
            className="w-full scale-125 object-contain lg:scale-100"
            src={ZineGif}
            alt=""
          />
        </div>
        <div className="xl:flex xl:justify-center">
          <div className="xl:w-[1280px]">
            <section className="lg:flex lg:flex-row-reverse lg:justify-between lg:px-16">
              <div className="pt-10 lg:max-w-[636px]">
                <div className="px-6 lg:px-0">
                  <p className="text-white">
                    The zine covers a little introduction to the Thanda, the
                    historic traces of the embroidery, the materials used in the
                    making, the thought process of the practitioners, a visit to
                    one of the marketplaces where the materials were sold,
                    conversations with the practitioners, the rituals associated
                    with the embroidery and the evolution of the craft within
                    the Thanda.
                  </p>
                  <p className="pt-3 text-white lg:pt-6">
                    The title “From the Lambanis of Sindhol” is in context to
                    giving readers an understanding that the zine is like a
                    letter from the people of Sindhol to the general public. The
                    zine aims at looking at the craft practice through the lens
                    of a community by giving its readers a slice of Sindhol’s
                    embroidery practice.
                  </p>
                </div>
              </div>
              <div className="lg:pr-[80px]">
                <div className="flex justify-between px-6 pt-10 lg:px-0">
                  <img
                    className="max-w-[150px] lg:max-w-[244px]"
                    src={prayer1}
                    alt=""
                  />
                  <img
                    className="max-w-[150px] lg:max-w-[244px] lg:pl-7"
                    src={prayer2}
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <p className="pt-4 text-white">
                    Fig. 1 - Images from the field visit at Sindhol
                  </p>
                </div>
              </div>
            </section>
            <section className="px-6 pt-28 lg:flex lg:justify-between lg:px-16 ">
              <div className="hidden pr-[80px] opacity-0 lg:block">
                <div className="flex justify-between px-6 pt-10 lg:px-0">
                  <img
                    className="max-w-[150px] lg:max-w-[244px]"
                    src={prayer1}
                    alt=""
                  />
                  <img
                    className="max-w-[150px] lg:max-w-[244px] lg:pl-7"
                    src={prayer2}
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <p className="pt-4 text-white">
                    Fig. 1 - Images from the field visit at Sindhol
                  </p>
                </div>
              </div>
              <div className="lg:max-w-[636px]">
                <p className="text-white">
                  As a researcher practitioner, I got to actively immerse myself
                  within the Lambani community, becoming a part of their
                  embroidery practice. This approach allowed me to develop a
                  deep and personal connection with the craft and the people
                  behind it. Exploring the craft as a researcher practitioner
                  allowed me to observe the craft without separating the
                  researcher from the research participants.
                </p>
                <p className="pt-3 text-white">
                  Through direct engagement with the Lambani practitioners, I
                  aimed to build trust, rapport, and mutual understanding,
                  ensuring that my research was not only accurate but also
                  respectful of the community's cultural significance. This
                  allowed me as a practitioner researcher to appreciate the
                  process while delving deeper into the context.
                </p>
              </div>
            </section>
          </div>
        </div>

        <Footer color="white" nextProject="pincode" />
      </div>
    </div>
  );
};

export default Sindhol;
