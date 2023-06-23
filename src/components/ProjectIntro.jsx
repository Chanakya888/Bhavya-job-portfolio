import React from "react";

const ProjectIntro = ({ title, paragraphs, year, type, type2 }) => {
  console.log(paragraphs);
  return (
    <section className="px-6 pb-12 pt-[53px] lg:px-16">
      <div>
        <h1 className="text-2xl m-0 lg:w-8/12 lg:text-8xl xl:w-6/12">
          {title}
        </h1>
        <div className="pt-4 lg:flex lg:space-x-52 lg:pt-10">
          <div className="p-container flex max-w-[636px] flex-col sm:w-9/12">
            {paragraphs.map((eachPara, index) => {
              return (
                <p key={index} className="text-base lg:text-xl">
                  {eachPara}
                </p>
              );
            })}
          </div>
          <div>
            <div className="flex w-full space-x-6 pt-6 sm:justify-start lg:flex-col lg:space-x-0">
              <div>
                <p className="text-xs lg:text-base">Year</p>
                <p className="text-base lg:text-xl">{year}</p>
              </div>
              <div className="lg:mt-[30px]">
                <p className="text-xs lg:text-base">Type</p>
                <p className="text-base lg:text-xl">{type}</p>
              </div>
            </div>
            <div className="border-1 mt-[30px] hidden whitespace-nowrap rounded border border-primaryGreen p-1 lg:inline-flex">
              <p className="text-xl uppercase">{type2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
