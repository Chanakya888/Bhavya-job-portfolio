import React from "react";
import TitleHack from "./TitleHack";

const ProjectIntro = ({
  title,
  year,
  type,
  type2,
  noTopPadding,
  showMentor,
  mentorName,
  children,
}) => {
  return (
    <section className="px-6 pb-12 pt-[53px] lg:px-16">
      <div>
        <h1 className="m-0 text-2xl lg:w-11/12 lg:text-8xl xl:w-9/12">
          <TitleHack title={title} />
        </h1>
        <div className="pt-4 lg:flex lg:space-x-52 lg:pt-10">
          <div className=" p-container project-intro-mobile flex max-w-[636px] flex-col text-base sm:w-9/12 lg:text-xl">
            {children}
          </div>
          <div>
            <div
              className={`flex w-full space-x-6 ${
                noTopPadding ? "" : "pt-6"
              } sm:justify-start lg:flex-col lg:space-x-0`}
            >
              <div>
                <p className="text-xs lg:text-base">Year</p>
                <p className="text-base lg:text-xl">{year}</p>
              </div>
              <div className="lg:mt-[30px]">
                <p className="text-xs lg:text-base">Type</p>
                <p className="text-base lg:text-xl">{type}</p>
              </div>
              {showMentor && (
                <div className="lg:mt-[30px]">
                  <p className="text-xs lg:text-base">Mentor</p>
                  <p className="text-base lg:text-xl">{mentorName}</p>
                </div>
              )}
            </div>
            <div className="border-1 mt-[30px] hidden whitespace-nowrap rounded border border-primaryGreen p-1 lg:inline-flex">
              <p className="text-base uppercase">{type2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
