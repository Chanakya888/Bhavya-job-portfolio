import React, { useContext } from "react";
import Hrline from "./Hrline";
import Close from "../assets/close.svg";
import { Link } from "react-router-dom";
import { NavbarContext } from "../contexts/NavBarContext";
import Resume from "../assets/Resume.pdf";
import Contact from "./Contact";
import SelectedWork from "./SelectedWork";

const OpenNavbar = () => {
  const { setToggleNav } = useContext(NavbarContext);

  function handleCloseNav() {
    setToggleNav(false);
  }
  return (
    <div className="fixed left-0 top-0 z-10 w-screen bg-backgroundGray px-6 ">
      <div className="h-[44px] pt-6">
        <button onClick={handleCloseNav}>
          <img className="w-[30px] object-contain" src={Close} alt="" />
        </button>
      </div>
      <div className="calc-height flex flex-col justify-between pt-10">
        <section className="h-[270px]">
          <Link to={`/`} onClick={handleCloseNav}>
            <div>
              <Hrline />
              <div className="h-full w-full py-5">
                <p className="text-base">Home</p>
              </div>
              <Hrline />
            </div>
          </Link>
          <Link to={`info`} onClick={handleCloseNav}>
            <div>
              <div className="h-full w-full py-5">
                <p className="text-base">Info.</p>
              </div>
              <Hrline />
            </div>
          </Link>
          <div>
            <div className="h-full w-full py-5">
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline"
              >
                <p className="text-base">Resume</p>
              </a>
            </div>
            <Hrline />
          </div>
          <Link to={`/archive`} onClick={handleCloseNav}>
            <div>
              <div className="h-full w-full py-5">
                <p className="text-base">Archive</p>
              </div>
              <Hrline />
            </div>
          </Link>
        </section>
        <section>
          <SelectedWork />
        </section>
        <div className="pb-7">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default OpenNavbar;
