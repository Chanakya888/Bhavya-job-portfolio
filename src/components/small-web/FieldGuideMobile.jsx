import React from "react";
import FieldGuide1 from "../../assets/small-web/field-guide-1.png";
import FieldGuide2 from "../../assets/small-web/field-guide-2.png";
import FieldGuide3 from "../../assets/small-web/field-guide-3.png";

const FieldGuideMobile = () => {
  return (
    <section className="pt-10 lg:hidden">
      <div>
        <div>
          <p className="whitespace-nowrap text-2xl md:text-3xl lg:text-5xl">
            The Field guide
          </p>
        </div>
        <div className="mt-6 h-[200px] space-y-8 overflow-y-scroll">
          <div className="flex space-x-8">
            <img
              className="w-1/2 max-w-[200px] object-contain"
              src={FieldGuide1}
              alt=""
            />
            <div className="p-container">
              <p>
                Introduction to the small social web. Dissecting the terms small
                | social | web, Characteristics of the space.{" "}
              </p>
              <p className="italic">
                Familiarizing people with small social web
              </p>
            </div>
          </div>
          <div className="flex space-x-8">
            <img
              className="w-1/2 max-w-[200px] object-contain"
              src={FieldGuide2}
              alt=""
            />
            <div className="p-container">
              <p>Community guidelines, Glossary, Interactions</p>
              <p className="italic">
                Conversations and Interactions to experience the notion of the
                small social web (in the context of a park metaphor).
              </p>
            </div>
          </div>
          <div className="flex space-x-8">
            <img
              className="w-1/2 max-w-[200px] object-contain"
              src={FieldGuide3}
              alt=""
            />
            <div className="p-container">
              <p>Field notes, The free verse poem</p>
              <p className="italic">
                To Initiate questions, ideas, thoughts and feelings post
                experiencing the space.
              </p>
            </div>
          </div>
        </div>
        <div className="p-container pt-12">
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
      </div>
    </section>
  );
};

export default FieldGuideMobile;
