import React from "react";

const ProjectIntro = ({ title, paragraphs, year, type, type2 }) => {
  console.log(paragraphs);
  return (
    <section className="px-6 pb-12 pt-[53px] lg:px-16">
      <div>
        <h1 className="m-0 text-2xl lg:text-8xl">{title}</h1>
        <div className="lg:flex lg:space-x-52 lg:pt-10">
          <div className="p-container flex max-w-[636px] flex-col pt-4 sm:w-9/12">
            {paragraphs.map((eachPara, index) => {
              return (
                <p key={index} className="text-base lg:text-xl">
                  {eachPara}
                </p>
              );
            })}
          </div>
          <div>
            <div className="flex w-full justify-between pt-6 sm:justify-start sm:space-x-6 lg:flex-col lg:space-x-0">
              <div>
                <p className="text-xs lg:text-base">Year</p>
                <p className="text-xl lg:text-2xl">{year}</p>
              </div>
              <div className="lg:mt-[30px]">
                <p className="text-xs lg:text-base">Type</p>
                <p className="text-xl lg:text-2xl">{type}</p>
              </div>
            </div>
            <div className="border-1 mt-[30px] hidden rounded border border-primaryGreen p-1 lg:inline-flex">
              <p className="text-xl uppercase">{type2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
