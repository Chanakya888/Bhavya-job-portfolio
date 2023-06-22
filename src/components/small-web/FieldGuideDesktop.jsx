import React from "react";
import FieldGuide1 from "../../assets/small-web/field-guide-1.png";
import FieldGuide2 from "../../assets/small-web/field-guide-2.png";
import FieldGuide3 from "../../assets/small-web/field-guide-3.png";

const FieldGuideDesktop = () => {
  return (
    <section className="hidden pt-[147px] lg:block">
      <div>
        <p className="text-2xl md:text-3xl lg:text-5xl">Field guide</p>
      </div>
      <div className="grid grid-cols-6 gap-y-24 pt-24">
        <div className="p-container col-start-1 col-end-3 max-w-[330px]">
          <p>Form: Physical Zine</p>
          <p>
            Feel: Should feel like going through a website that guides you to
            the space and its function one by one.
          </p>
          <p>
            Intention: Inculcate a slow behavior of readers while they engage
            with the field guide.
          </p>
        </div>
        <div className="col-start-3 col-end-5 w-full flex-none">
          <img className="w-full object-contain" src={FieldGuide1} alt="" />
        </div>
        <div className="p-container col-start-5 col-end-7 max-w-[330px] pl-20">
          <p>
            Introduction to the small social web. Dissecting the terms small |
            social | web, Characteristics of the space.
          </p>
          <p>Familiarizing people with small social web</p>
        </div>
        <div className="col-start-3 col-end-5 w-full flex-none">
          <img className="w-full object-contain" src={FieldGuide2} alt="" />
        </div>
        <div className="p-container col-start-5 col-end-7 max-w-[300px] pl-20">
          <p>Community guidelines, Glossary, Interactions</p>
          <p>
            Conversations and Interactions to experience the notion of the small
            social web (in the context of a park metaphor).
          </p>
        </div>
        <div className="col-start-3 col-end-5 flex w-full  justify-center">
          <img
            className="w-full max-w-[300px] object-contain"
            src={FieldGuide3}
            alt=""
          />
        </div>
        <div className="p-container col-start-5 col-end-7 max-w-[300px] pl-20">
          <p>Field notes, The free verse poem</p>
          <p>
            To Initiate questions, ideas, thoughts and feelings post
            experiencing the space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FieldGuideDesktop;
