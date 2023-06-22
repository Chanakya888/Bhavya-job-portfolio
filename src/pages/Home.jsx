import SelectedWork from "../components/SelectedWork";

const Home = () => {
  return (
    <>
      <div className="calc-height px-6 lg:grid  lg:grid-cols-10">
        <div className="hidden h-full items-end lg:flex lg:pb-14 lg:pl-10">
          <p className="text-xs">@bhavyeahgupta</p>
        </div>
        <div className="flex h-full flex-col flex-wrap justify-between pt-10 lg:col-start-5 lg:col-end-10 lg:pb-14 lg:pt-0">
          <p className="w-4/5 text-base text-primaryGreen lg:w-[422px]">
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
