import { useContext } from "react";
import Hrline from "./Hrline";
import { Link } from "react-router-dom";
import { HoverContext } from "../contexts/HoverContext";

const SelectedWork = ({ closeNavbar }) => {
  const { handleHover, handleLeave } = useContext(HoverContext);

  const closeNav = () => {
    if (closeNavbar) {
      closeNavbar();
    }
  };
  return (
    <div className="lg:pb-0">
      <div className="grid grid-cols-2 pb-3">
        <h2 className="text-xs uppercase text-primaryGreen">selected work</h2>
        <h2 className="hidden text-xs uppercase text-primaryGreen lg:block">
          type
        </h2>
      </div>
      <div className="space-y-3 lg:space-y-5">
        <Hrline />
        <Link to={`/thrift`} className="block" onClick={closeNav}>
          <div
            className="grid grid-cols-1 space-y-0.5 lg:grid-cols-2 lg:space-y-0"
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => handleLeave(0)}
          >
            <h2 className="text-base text-primaryGreen lg:text-xl">
              Thrift it
            </h2>
            <h2 className="text-xs text-primaryGreen lg:text-xl ">
              App concept, UX/UI design
            </h2>
          </div>
        </Link>
        <Hrline />
        <Link to={`/small-web`} className="block" onClick={closeNav}>
          <div
            className="grid grid-cols-1 space-y-0.5 lg:grid-cols-2 lg:space-y-0"
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleLeave(1)}
          >
            <h2 className="text-base text-primaryGreen lg:text-xl">
              The Small Social Web
            </h2>
            <h2 className="text-xs text-primaryGreen lg:block lg:text-xl">
              Speculative and Interaction design
            </h2>
          </div>
        </Link>
        <Hrline />
        <Link to={`/sindhol`} className="block" onClick={closeNav}>
          <div
            className="grid grid-cols-1 space-y-0.5 lg:grid-cols-2 lg:space-y-0"
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => handleLeave(2)}
          >
            <h2 className="text-base text-primaryGreen lg:text-xl">
              From the Lambanis of Sindhol
            </h2>
            <h2 className="text-xs text-primaryGreen lg:block lg:text-xl">
              Ethnographic study, Zine
            </h2>
          </div>
        </Link>
        <Hrline />
        <Link to={`/pincode`} className="block" onClick={closeNav}>
          <div
            className="grid grid-cols-1 space-y-0.5 lg:grid-cols-2 lg:space-y-0"
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={() => handleLeave(3)}
          >
            <h2 className="text-base text-primaryGreen lg:text-xl">Pincode</h2>
            <h2 className="text-xs text-primaryGreen lg:block lg:text-xl">
              App, UX/UI
            </h2>
          </div>
        </Link>
        <Hrline />
      </div>
    </div>
  );
};

export default SelectedWork;
