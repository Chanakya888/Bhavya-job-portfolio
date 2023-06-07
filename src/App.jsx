import "./App.css";
import "./reset.css";
import "./normalise.css";
import "./global.css";
import "./homepage.css";
import Home from "./pages/Home";
import Thrift from "./pages/Work/Thrift";

function App() {
  return (
    <div className="w-screen h-screen">
      {/* <Home /> */}
      <Thrift />
    </div>
  );
}

export default App;
