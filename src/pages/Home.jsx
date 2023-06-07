import Navbar from "../components/Navbar";
import SelectedWork from "../components/SelectedWork";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row h-full">
        <div className="w-[512px]"></div>
        <div className="flex flex-col justify-between pb-14 max-h-[calc(100vh-120px)]">
          <p className="w-[422px] text-primaryGreen">
            Hi, I am Bhavya, a Visual and Experience designer based in
            Bangalore, India. I am a second-year master's student at Srishti
            Manipal, majoring in human-centered design.
          </p>
          <SelectedWork />
        </div>
      </div>
    </>
  );
};

export default Home;
