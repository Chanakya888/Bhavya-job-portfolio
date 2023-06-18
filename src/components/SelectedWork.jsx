import Hrline from "./Hrline";
import { Link } from "react-router-dom";

const SelectedWork = () => {
  return (
    <div className="pb-10 lg:pb-0 lg:pr-[72px]">
      <div className="grid grid-cols-2 pb-3">
        <h2 className="text-xs uppercase text-primaryGreen">selected work</h2>
        <h2 className="hidden text-xs uppercase text-primaryGreen lg:block">
          type
        </h2>
      </div>
      <div className="space-y-5">
        <Hrline />
        <Link to={`/thrift`} className="block">
          <div className="grid grid-cols-2">
            <h2 className="text-base text-primaryGreen lg:text-xl">
              Thrift it
            </h2>
            <h2 className="hidden text-xl text-primaryGreen lg:block">
              App concept design, UI/UX
            </h2>
          </div>
        </Link>
        <Hrline />
        <div className="grid grid-cols-2">
          <h2 className="text-base text-primaryGreen lg:text-xl">
            Social Internet
          </h2>
          <h2 className="hidden text-xl text-primaryGreen lg:block">
            Speculative & Interaction design
          </h2>
        </div>
        <Hrline />
        <Link to={`/sindhol`} className="block">
          <div className="grid lg:grid-cols-2">
            <h2 className="text-base text-primaryGreen lg:text-xl">
              From the Lambanis of Sindhol
            </h2>
            <h2 className="hidden text-xl text-primaryGreen lg:block">Zine </h2>
          </div>
        </Link>
        <Hrline />
        <div className="grid grid-cols-2">
          <h2 className="text-base text-primaryGreen lg:text-xl">
            The Browser project
          </h2>
          <h2 className="hidden text-xl text-primaryGreen lg:block">UI/ UX</h2>
        </div>
        <Hrline />
      </div>
    </div>
  );
};

export default SelectedWork;
