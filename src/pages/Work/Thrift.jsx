import Navbar from "../../components/Navbar";
import ThriftItJeans from "../../assets/thrift-it-jeans.png";
import Y2k from "../../assets/Y2k.png";
import ThriftNavbar from "../../assets/thrift-it-nav.png";
import Calendar from "../../assets/calendar.png";
import CalendarMin from "../../assets/calendar-min.png";
import { Link } from "react-router-dom";
import Affordable from "../../assets/affordable.png";
import ShoppingCart from "../../assets/shopping-bag.png";
import Shirt from "../../assets/shirt.png";
import Rachel from "../../assets/rachel.png";
import MindMap from "../../assets/Mind-map.png";

const Thrift = () => {
  return (
    <div>
      <Navbar />
      <section className="px-6 lg:px-[72px] lg:pt-[46px]">
        <div>
          <h1 className="m-0 text-5xl lg:text-8xl">Thrift it</h1>
          <div className="flex flex-col pt-4 lg:w-[600px] lg:flex-row lg:space-x-[230px] lg:pt-[46px]">
            <p>
              Thrift It is an app concept that helps people find new thrift
              shops, and assists with tracking their favourite collection drops.
              Thrift It can help make thrifting easier and more accessible for
              people. It is an initiative to encourage thrifting among people by
              reducing the consumerism that has contributed to our landfills,
              which has been a huge contributor to Climate Change.
            </p>
            <p className="pt-4">
              Thrift It is a self initiated project that started off during my
              summer break to explore app ideas and experiment with the approach
              towards a design language.
            </p>
            <div>
              <div className="flex w-full justify-between pt-6">
                <div>
                  <p className="text-base">Year</p>
                  <p>2022</p>
                </div>
                <div className="lg:mt-[30px]">
                  <p className="text-base">Type</p>
                  <p>Product Design, UI/UX</p>
                </div>
              </div>
              <div className="border-1 mt-[30px] inline-flex rounded border border-primaryGreen p-1">
                <p className="text-xl uppercase">self initiated</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>

      <section className="mt-[186px] bg-primaryGreen">
        <div className="flex w-full justify-center pt-[90px]">
          <div className="flex space-x-[43px]">
            <img className="pt-[176px]" src={ThriftItJeans} alt="" />
            <img className="object-contain" src={ThriftItJeans} alt="" />
          </div>
        </div>
        <div className="flex w-full justify-center space-x-[180px] pt-[160px]">
          <div>
            <img src={Y2k} alt="" />
          </div>
          <div>
            <div className="flex space-x-4">
              <div className="border-1 inline-flex h-min rounded-3xl border border-white px-4 py-1">
                <p className="uppercase text-white">New drop</p>
              </div>
              <div className="inline-flex h-min rounded-3xl bg-white px-4 py-1">
                <p className="uppercase">30% Off</p>
              </div>
              <div className="border-1 inline-flex h-min rounded-3xl border border-white px-4 py-1">
                <p className="text-white">Jeans</p>
              </div>
            </div>
            <div className="pt-[20px]">
              <p className="max-w-[500px] text-white">
                The top panel consists of tags that can be selected, and they
                keep refreshing according to the user’s search pattern. The
                items also indicate the number of times they have been used by
                the seller or if they belong to an export-rejected stock.
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full justify-center space-x-[100px] pt-[90px]">
          <div className="pt-[300px]">
            <img className="object-contain" src={ThriftNavbar} alt="" />
            <p className="max-w-[400px] pt-[64px] text-white">
              Get notified button essentially allows the user to be informed
              about new collection drops or any offers that the seller would be
              announcing on any given date. This information also gets collated
              on the calendar feature that will be discussed further.
            </p>
          </div>
          <img className="object-contain" src={ThriftItJeans} alt="" />
        </div>

        <div className="flex w-full justify-center space-x-[100px] pt-[130px]">
          <img className="object-contain" src={Calendar} alt="" />
          <div className="pt-[40px]">
            <p className="max-w-[420px] text-white">
              Found in the menu option on the nav bar, the calendar feature
              essentially helps you keep track of all your favorite stores and
              informs you about collection drops or offers timely.
            </p>
            <img
              className="object-contain pt-[62px]"
              src={CalendarMin}
              alt=""
            />
            <img
              className="object-contain pl-[62px] pt-[107px]"
              src={Affordable}
              alt=""
            />
          </div>
        </div>

        <div className="flex w-full justify-center space-x-[172px] pt-[130px]">
          <div>
            <img className="object-contain" src={Shirt} alt="" />
            <img className="object-contain pt-[60px]" src={Rachel} alt="" />
          </div>
          <img className="object-contain" src={ShoppingCart} alt="" />
        </div>

        <div className="flex justify-center space-x-[70px] pt-[200px]">
          <img className="object-contain" src={MindMap} alt="" />
          <p className="max-w-[450px] text-white">
            The idea was to bring all the thrift stores on one platform and to
            encourage thrift shopping among people. Social media portals like
            Instagram or Facebook have been known for promoting small businesses
            and thrifting, but here are a few drawbacks -
            <ul className="list-disc">
              <li className="pl-3 pt-4">
                Instagram and Facebook’s pages both work on the basis of ads and
                follower count, and higher the number of followers, higher
                becomes the credibility of the page. With Thrift It, all the
                products can essentially be compared with the help of customer
                reviews on a particular brand or business. Hence, reviews become
                the source of credibility among products.
              </li>
              <li className="pl-3 pt-4">
                Social media platforms essentially showcase one page at a time,
                so to switch to a new page the user should either use tags or
                type out the name of the business, which also limits the scope
                to compare multiple products together. With Thrift It one gets
                to view and compare all the products at once just like any
                E-commerce platform.
              </li>
            </ul>
          </p>
        </div>

        <div className="pb-10 pl-[100px] pt-[180px]">
          <div>
            <Link to={`/`}>
              <p className="text-2xl text-white">Home</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thrift;
