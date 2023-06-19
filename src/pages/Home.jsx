import Navbar from "../components/Navbar";
import SelectedWork from "../components/SelectedWork";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-125px)] px-6 lg:flex lg:flex-row">
        <div className="hidden w-[512px] lg:block"></div>
        <div className="flex h-full flex-col flex-wrap justify-between pt-10 lg:pb-14">
          <p className="w-4/5 text-primaryGreen lg:w-[422px]">
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
