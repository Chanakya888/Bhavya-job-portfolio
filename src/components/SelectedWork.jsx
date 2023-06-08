import Hrline from "./Hrline";
import { Link } from "react-router-dom";

const SelectedWork = () => {
  return (
    <div className="space-y-5 pr-[72px]">
      <div className="grid grid-cols-2">
        <h2 className="text-primaryGreen text-xs uppercase">selected work</h2>
        <h2 className="text-primaryGreen text-xs uppercase">type</h2>
      </div>
      <Hrline />
      <Link to={`/thrift`} className="flex items-center">
        <div className="grid grid-cols-2">
          <h2 className="text-primaryGreen text-xl">Thrift it</h2>
          <h2 className="text-primaryGreen text-xl">
            App concept design, UI/UX
          </h2>
        </div>
      </Link>
      <Hrline />
      <div className="grid grid-cols-2">
        <h2 className="text-primaryGreen text-xl">Social Internet</h2>
        <h2 className="text-primaryGreen text-xl">
          Speculative & Interaction design
        </h2>
      </div>
      <Hrline />
      <div className="grid grid-cols-2">
        <h2 className="text-primaryGreen text-xl">
          From the Lambanis of Sindhol
        </h2>
        <h2 className="text-primaryGreen text-xl">Zine </h2>
      </div>
      <Hrline />
      <div className="grid grid-cols-2">
        <h2 className="text-primaryGreen text-xl">The Browser project</h2>
        <h2 className="text-primaryGreen text-xl">UI/ UX</h2>
      </div>
      <Hrline />
    </div>
  );
};

export default SelectedWork;
