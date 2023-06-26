import Y2k from "../../assets/thrift-it/Y2k.png";
import Calendar from "../../assets/thrift-it/calendar.png";
import CalendarMin from "../../assets/thrift-it/calendar-min.png";
import Affordable from "../../assets/thrift-it/affordable.png";
import ShoppingCart from "../../assets/thrift-it/shopping-bag.png";
import Shirt from "../../assets/thrift-it/shirt.png";
import Rachel from "../../assets/thrift-it/unique-collection.png";
import MindMap from "../../assets/thrift-it/Mind-map.png";
import AllProducts from "../../assets/thrift-it/all-products.png";
import Menu from "../../assets/thrift-it/menu.png";
import Nav from "../../assets/thrift-it/nav-bar.png";
import NewDrop from "../../assets/thrift-it/New-drop.png";
import ProjectIntro from "../../components/ProjectIntro";
import Footer from "../../components/Footer";
import ThriftItJeans from "../../assets/thrift-it/thrift-it-jeans.png";

const Thrift = () => {
  return (
    <div>
      <ProjectIntro
        title="Thrift it"
        year="2022"
        type="Product Design, UI/UX"
        type2="SELF INITIATED"
      >
        <p>
          Thrift It is an app concept that helps people find new thrift shops,
          and assists with tracking their favourite collection drops. Thrift It
          can help make thrifting easier and more accessible for people. It is
          an initiative to encourage thrifting among people by reducing the
          consumerism that has contributed to our landfills, which has been a
          huge contributor to Climate Change.
        </p>
        <p>
          Thrift It is a self initiated project that started off during my
          summer break to explore app ideas and experiment with the approach
          towards a design language.
        </p>
      </ProjectIntro>
      <section className="bg-primaryGreen ">
        <div className="flex overflow-x-scroll px-6 pt-10 md:px-0 lg:flex-row lg:justify-center">
          <div className="max-h-[650px] w-1/2 max-w-[410px] lg:mt-[176px]">
            <img className="h-full w-full object-contain" src={Menu} alt="" />
          </div>
          <div className="max-h-[650px] w-1/2 max-w-[410px] ">
            <img
              className="h-full w-full object-contain"
              src={AllProducts}
              alt=""
            />
          </div>
        </div>
        <div className="px-6">
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
              <div className="p-container pt-3">
                <p className="max-w-[320px] text-xs text-white sm:text-base lg:text-xl">
                  The top panel consists of tags that can be selected, and they
                  keep refreshing according to the user’s search pattern.
                </p>
                <p className="max-w-[320px] text-xs text-white sm:text-base lg:text-xl">
                  The items also indicate the number of times they have been
                  used by the seller or if they belong to an export-rejected
                  stock.
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
              src={ThriftItJeans}
              alt=""
            />
            <div className="flex flex-col justify-center lg:justify-start lg:pt-48">
              <img
                className="w-full max-w-[414px] object-contain"
                src={Nav}
                alt=""
              />
              <div className="p-container max-w-[400px] pt-4 lg:pt-16">
                <p className="text-xs text-white sm:text-base lg:text-xl">
                  Get notified button essentially allows the user to be informed
                  about new collection drops or any offers that the seller would
                  be announcing on any given date.
                </p>
                <p className="text-xs text-white sm:text-base lg:text-xl">
                  This information also gets collated on the calendar feature
                  that will be discussed further.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col justify-center space-x-[100px] pt-32 lg:flex-row">
            <div className="flex justify-center space-x-6 lg:space-x-32">
              <div>
                <img
                  className="max-w-[162px] object-contain pt-10 lg:max-w-[300px]"
                  src={NewDrop}
                  alt=""
                />
                <img
                  className="max-w-[140px] object-contain pt-5 lg:w-full lg:max-w-[280px]"
                  src={CalendarMin}
                  alt=""
                />
                <p className="max-w-[420px] pt-10 text-xs text-white sm:text-base lg:max-w-[280px] lg:text-xl">
                  Found in the menu option on the nav bar, the calendar feature
                  essentially helps you keep track of all your favorite stores
                  and informs you about collection drops or offers timely.
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

          <div className="flex w-full justify-center space-x-4 pt-32 lg:flex-row lg:space-x-20 lg:pt-[130px]">
            <div className="max-h-[859px] w-1/2 max-w-[414px]">
              <img
                className="h-full w-full object-contain"
                src={ShoppingCart}
                alt=""
              />
            </div>
            <div className="flex w-1/2 flex-col justify-center lg:max-w-[400px]">
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
              <div className="p-container pt-16 sm:w-9/12">
                <p className="text-xs text-white sm:text-base lg:text-xl">
                  The idea was to bring all the thrift stores on one platform
                  and to encourage thrift shopping among people. Social media
                  portals like Instagram or Facebook have been known for
                  promoting small businesses and thrifting, but here are a few
                  drawbacks:
                </p>
                <p className=" text-xs text-white sm:text-base lg:text-xl">
                  Instagram and Facebook’s pages both work on the basis of ads
                  and follower count, and higher the number of followers, higher
                  becomes the credibility of the page. With Thrift It, all the
                  products can essentially be compared with the help of customer
                  reviews on a particular brand or business. Hence, reviews
                  become the source of credibility among products.
                </p>
                <p className=" text-xs text-white sm:text-base lg:text-xl">
                  Social media platforms essentially showcase one page at a
                  time, so to switch to a new page the user should either use
                  tags or type out the name of the business, which also limits
                  the scope to compare multiple products together. With Thrift
                  It one gets to view and compare all the products at once just
                  like any E-commerce platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer nextProject="small-web" />
      </section>
    </div>
  );
};

export default Thrift;
