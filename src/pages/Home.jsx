import { useContext, useEffect } from "react";
import SelectedWork from "../components/SelectedWork";
import { HoverContext } from "../contexts/HoverContext";

const Home = () => {
  const { hoverStates, handleLeave } = useContext(HoverContext);
  useEffect(() => {
    return () => {
      for (let i = 0; i <= 4; i++) {
        handleLeave(i);
      }
    };
  }, []);
  return (
    <>
      <div className="calc-height relative px-6  lg:grid lg:grid-cols-14">
        <div className="hidden h-full items-end lg:flex lg:pb-4 lg:pl-10">
          <p className="text-xs">@bhavyeahgupta</p>
        </div>
        <div className="flex h-full flex-col flex-wrap justify-between pt-10 lg:col-start-6 lg:col-end-14 lg:pt-10">
          <p className="w-full text-base text-primaryGreen lg:w-[480px] lg:text-xl">
            Hello, I'm Bhavya, a Human-Computer Interaction Researcher and
            Designer based in Hyderabad, India. I am actively seeking a
            full-time position as an Interaction Designer or Researcher, whether
            remote or located in Hyderabad or Bangalore.
          </p>
          <SelectedWork />
        </div>
        <div
          className={`absolute left-12 top-40 hidden transition-opacity duration-300 lg:block ${
            hoverStates[0] ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-[280px] w-[380px] bg-black"></div>
        </div>
        <div
          className={`absolute left-12 top-40 hidden transition-opacity duration-300 lg:block ${
            hoverStates[1] ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-[280px] w-[380px] bg-browserProjectBlue"></div>
        </div>

        <div
          className={`absolute left-12 top-80 hidden transition-opacity duration-300 lg:block ${
            hoverStates[2] ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-[280px] w-[380px] bg-homePurple"></div>
        </div>

        <div
          className={`absolute left-32 top-40 hidden transition-opacity duration-300 lg:block ${
            hoverStates[3] ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-[280px] w-[380px] bg-browserProjectBlue"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
