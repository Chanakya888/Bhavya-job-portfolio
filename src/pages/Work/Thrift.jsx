import Navbar from "../../components/Navbar";

const Thrift = () => {
  return (
    <div>
      <Navbar />
      <section className="px-[72px]">
        <div>
          <h1 className="text-8xl">Thrift it</h1>
          <div className="pt-[46px] flex flex-row space-x-[230px]">
            <p className=" w-[600px]">
              Thrift It is an app concept that helps people find new thrift
              shops, and assists with tracking their favourite collection drops.
              Thrift It can help make thrifting easier and more accessible for
              people. It is an initiative to encourage thrifting among people by
              reducing the consumerism that has contributed to our landfills,
              which has been a huge contributor to Climate Change.
              <br />
              Thrift It is a self initiated project that started off during my
              summer break to explore app ideas and experiment with the approach
              towards a design language.
            </p>
            <div>
              <div>
                <p className="text-base">Year</p>
                <p>2022</p>
              </div>
              <div className="mt-[30px]">
                <p className="text-base">Type</p>
                <p>Product Design, UI/UX</p>
              </div>
              <div className="mt-[30px] border border-1 border-primaryGreen p-1 inline-flex rounded">
                <p className="uppercase text-xl">self initiated</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Thrift;
