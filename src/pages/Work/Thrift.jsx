import Navbar from "../../components/Navbar";
import ThriftItJeans from "../../assets/thrift-it-jeans.png";
import Y2k from "../../assets/Y2k.png";
import Calendar from "../../assets/calendar.png";
import CalendarMin from "../../assets/calendar-min.png";
import { Link } from "react-router-dom";
import Affordable from "../../assets/affordable.png";
import ShoppingCart from "../../assets/shopping-bag.png";
import Shirt from "../../assets/shirt.png";
import Rachel from "../../assets/unique-collection.png";
import MindMap from "../../assets/Mind-map.png";
import Jeans from "../../assets/Jeans-new.png";
import Nav from "../../assets/Nav.png";
import NewDrop from "../../assets/New-drop.png";

const Thrift = () => {
  return (
    <div>
      <Navbar />
      <section className="px-6 pb-12 pt-[53px] lg:px-[72px]">
        <div>
          <h1 className="m-0 text-5xl lg:text-8xl">Thrift it</h1>
          <div className="lg:flex lg:space-x-52 lg:pt-10">
            <div className="flex flex-col pt-4 sm:w-9/12 lg:w-8/12">
              <p className="text-base lg:text-2xl">
                Thrift It is an app concept that helps people find new thrift
                shops, and assists with tracking their favourite collection
                drops. Thrift It can help make thrifting easier and more
                accessible for people. It is an initiative to encourage
                thrifting among people by reducing the consumerism that has
                contributed to our landfills, which has been a huge contributor
                to Climate Change.
              </p>
              <p className="p-top-padding text-base lg:text-2xl">
                Thrift It is a self initiated project that started off during my
                summer break to explore app ideas and experiment with the
                approach towards a design language.
              </p>
            </div>
            <div>
              <div className="flex w-full justify-between pt-6 sm:justify-start sm:space-x-6 lg:flex-col lg:space-x-0">
                <div>
                  <p className="text-xs lg:text-base">Year</p>
                  <p className="text-xl lg:text-2xl">2022</p>
                </div>
                <div className="lg:mt-[30px]">
                  <p className="text-xs lg:text-base">Type</p>
                  <p className="text-xl lg:text-2xl">Product Design, UI/UX</p>
                </div>
              </div>
              <div className="border-1 mt-[30px] hidden rounded border border-primaryGreen p-1 lg:inline-flex">
                <p className="text-xl uppercase">self initiated</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>

      <section className="bg-primaryGreen px-6 pt-10">
        <div className="flex space-x-10 overflow-hidden lg:flex-row lg:justify-center">
          <img
            className="w-1/2 max-w-[410px] object-contain lg:pt-[176px]"
            src={ThriftItJeans}
            alt=""
          />
          <img
            className="w-1/2 max-w-[410px] object-contain"
            src={ThriftItJeans}
            alt=""
          />
        </div>

        <div className="flex w-full flex-row pt-32 lg:justify-evenly lg:pt-[160px]">
          <div>
            <div className="flex w-full flex-row space-x-1">
              <div className="border-1 inline-flex h-min rounded-3xl border border-white px-2 py-1 lg:px-4">
                <p className="super-small uppercase text-white">New drop</p>
              </div>
              <div className="inline-flex h-min rounded-3xl bg-white px-2 py-1 lg:px-4">
                <p className="super-small uppercase">30% Off</p>
              </div>
              <div className="border-1 inline-flex h-min rounded-3xl border border-white px-2 py-1 lg:px-4">
                <p className="super-small text-white">Jeans</p>
              </div>
            </div>
            <div className="pt-3">
              <p className="max-w-[320px] text-xs text-white sm:text-base lg:text-xl">
                The top panel consists of tags that can be selected, and they
                keep refreshing according to the user’s search pattern.
              </p>
              <p className="p-top-padding max-w-[320px] text-xs text-white sm:text-base lg:text-xl">
                The items also indicate the number of times they have been used
                by the seller or if they belong to an export-rejected stock.
              </p>
            </div>
          </div>
          <div className="min-w-[160px] pt-3">
            <img className="object-contain" src={Y2k} alt="" />
          </div>
        </div>

        <div className="flex min-h-[440px] w-full flex-row justify-center space-x-5 pt-32 lg:flex-row lg:space-x-[100px] lg:pt-[90px]">
          <img
            className="w-1/2 max-w-[414px] object-contain"
            src={Jeans}
            alt=""
          />
          <div className="flex flex-col justify-center lg:justify-start lg:pt-48">
            <img
              className="w-full max-w-[414px] object-contain"
              src={Nav}
              alt=""
            />
            <div className="max-w-[400px] pt-4 lg:pt-16">
              <p className="text-xs text-white sm:text-base lg:text-xl">
                Get notified button essentially allows the user to be informed
                about new collection drops or any offers that the seller would
                be announcing on any given date.
              </p>
              <p className="p-top-padding text-xs text-white sm:text-base lg:text-xl">
                This information also gets collated on the calendar feature that
                will be discussed further.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center space-x-[100px] pt-32 lg:flex-row">
          <div className="flex justify-center space-x-6 lg:space-x-10">
            <div>
              <img
                className="max-w-[162px] object-contain pt-10 lg:max-w-[300px]"
                src={NewDrop}
                alt=""
              />
              <img
                className="object-contain pt-5 lg:w-full lg:max-w-[280px]"
                src={CalendarMin}
                alt=""
              />
              <p className="max-w-[420px] pt-10 text-xs text-white sm:text-base lg:text-xl">
                Found in the menu option on the nav bar, the calendar feature
                essentially helps you keep track of all your favorite stores and
                informs you about collection drops or offers timely.
              </p>
              <img
                className="hidden w-full max-w-[300px] object-contain lg:inline lg:pt-10"
                src={Affordable}
                alt=""
              />
            </div>
            <div className="space-y-5">
              <img
                className="w-full max-w-[414px]  object-contain"
                src={Calendar}
                alt=""
              />
              <img
                className="w-full max-w-[300px] object-contain lg:hidden"
                src={Affordable}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-evenly space-x-4 pt-32 lg:flex-row lg:space-x-10 lg:pt-[130px]">
          <img
            className="w-1/2 max-w-[414px] object-contain"
            src={ShoppingCart}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <img
              className="w-full max-w-[400px] object-contain"
              src={Shirt}
              alt=""
            />
            <img
              className="w-full max-w-[360px] object-contain pt-4 lg:pt-[60px]"
              src={Rachel}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center pt-32 lg:flex-row lg:space-x-16 lg:pt-[200px] xl:w-full">
          <div className="flex flex-col lg:w-10/12 lg:flex-row lg:space-x-16">
            <img
              className="w-full object-contain lg:max-w-[500px]"
              src={MindMap}
              alt=""
            />
            <div className="pt-16 sm:w-9/12">
              <p className="text-xs text-white sm:text-base">
                The idea was to bring all the thrift stores on one platform and
                to encourage thrift shopping among people. Social media portals
                like Instagram or Facebook have been known for promoting small
                businesses and thrifting, but here are a few drawbacks:
              </p>
              <p className="p-top-padding text-xs text-white sm:text-base">
                Instagram and Facebook’s pages both work on the basis of ads and
                follower count, and higher the number of followers, higher
                becomes the credibility of the page. With Thrift It, all the
                products can essentially be compared with the help of customer
                reviews on a particular brand or business. Hence, reviews become
                the source of credibility among products.
              </p>
              <p className="p-top-padding text-xs text-white sm:text-base">
                Social media platforms essentially showcase one page at a time,
                so to switch to a new page the user should either use tags or
                type out the name of the business, which also limits the scope
                to compare multiple products together. With Thrift It one gets
                to view and compare all the products at once just like any
                E-commerce platform.
              </p>
            </div>
          </div>
        </div>

        <div className="pb-10 pl-[100px] pt-[170px]">
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
