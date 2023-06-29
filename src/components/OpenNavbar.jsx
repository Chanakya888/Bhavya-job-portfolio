import React, { useContext } from "react";
import Hrline from "./Hrline";
import Close from "../assets/close.svg";
import { Link } from "react-router-dom";
import { NavbarContext } from "../contexts/NavBarContext";
import Resume from "../assets/Resume.pdf";

const OpenNavbar = () => {
  const { setToggleNav } = useContext(NavbarContext);

  function handleCloseNav() {
    setToggleNav(false);
  }
  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-backgroundGray px-6 pt-7">
      <div className="flex justify-between pb-10">
        <button onClick={handleCloseNav}>
          <img className="w-[30px] object-contain" src={Close} alt="" />
        </button>
        <div>
          <p className="text-xs">@bhavyeahgupta</p>
        </div>
      </div>
      <div className="flex h-[calc(100vh-100px)]  flex-col justify-between">
        <section>
          <Link to={`/`} onClick={handleCloseNav}>
            <div>
              <Hrline />
              <div className="h-full w-full pb-6 pt-5">
                <p className="text-base">Home</p>
              </div>
              <Hrline />
            </div>
          </Link>
          <Link to={`info`} onClick={handleCloseNav}>
            <div>
              <div className="h-full w-full pb-6 pt-5">
                <p className="text-base">Info</p>
              </div>
              <Hrline />
            </div>
          </Link>
          <div>
            <div className="h-full w-full pb-6 pt-5">
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
              <div className="h-full w-full pb-6 pt-5">
                <p className="text-base">Archive</p>
              </div>
              <Hrline />
            </div>
          </Link>
        </section>

        <section className="pb-10">
          <div className="space-y-3">
            <p className="text-xs uppercase">Selected work</p>
            <Hrline />
          </div>
          <Link to={`/thrift`} onClick={handleCloseNav}>
            <div className="w-full py-3">
              <p className="text-base">Thrift it</p>
              <p>App concept design, UI/UX</p>
            </div>
          </Link>
          <Hrline />
          <Link to={`/small-web`} onClick={handleCloseNav}>
            <div className="w-full py-3">
              <p className="text-base">Small social web</p>
              <p>Speculative and Interaction design</p>
            </div>
          </Link>
          <Hrline />
          <Link to={`/sindhol`} onClick={handleCloseNav}>
            <div className="w-full py-3">
              <p className="text-base">From the Lambanins of Sindhol </p>
              <p>Ethnographic study, Zine</p>
            </div>
          </Link>
          <Hrline />
          <Link to={`/browser-project`} onClick={handleCloseNav}>
            <div className="w-full py-3">
              <p className="text-base">The Browser project</p>
              <p>Browser concept design, UI/UX</p>
            </div>
          </Link>
          <Hrline />
        </section>
      </div>
    </div>
  );
};

export default OpenNavbar;
