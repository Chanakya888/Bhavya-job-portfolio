import Home from "./pages/Home";
import Thrift from "./pages/Work/Thrift";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen">
      {/* <Home /> */}
      <Thrift />
    </div>
  );
}

export default App;
