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
import ImageSubHeading from "../../assets/thrift-it/ImageSubHeading";

const Thrift = () => {
  return (
    <div>
      <ProjectIntro
        title="thrift-it"
        year="2022"
        type="Product Design, UI/UX"
        type2="SELF INITIATED"
      >
        <p>
          Thrift It is an app concept that helps people find new thrift shops,
          and assists with tracking their favourite collection drops. Thrift It
          can help make thrifting easier and more accessible for people.{" "}
        </p>
        <p>
          The app’s initiative aims to promote thrifting as a sustainable
          alternative, addressing the environmental impact of consumerism on
          landfills and its significant contribution to climate change.
        </p>
        <p>
          Thrift It is a self initiated passion project that started off during
          my summer break. The emphasis on a clean and intuitive interface
          within the app reflects the simplicity inherent in the thrifting
          process, making it easy for users to navigate and engage with the app.
        </p>
        <div className="flex max-w-[611px] space-x-2 pt-4 lg:space-x-3 lg:pt-6">
          <div className="w-1 bg-primaryGreen opacity-50"></div>
          <div className="p-container text-base xl:text-xl">
            <p>What is Thrifting/ Thrift Shopping?</p>
            <p>
              Thrifting is a sustainable concept focused on maximizing the
              lifespan of products, such as clothing items, before they are
              discarded into landfills.{" "}
            </p>
            <p>
              By giving these items a second life through resale, donation, or
              repurposing, thrifting helps reduce waste and promotes
              environmental conservation.
            </p>
          </div>
        </div>
      </ProjectIntro>

      <section className="bg-cream ">
        <div className="max-w-[522px] px-6 pt-12 lg:pl-20 lg:pt-28">
          <div className="p-container">
            <p className="text-base lg:text-2xl">
              Navigating you through Thrift It
            </p>
            <p className="text-sm lg:text-xl">
              The case study presents a breakdown of Thrift It's features, with
              a focus on exploring its user interfaces. The aim is to illuminate
              the distinctive characteristics of sustainable shopping
              facilitated by the platform.
            </p>
            <p className="text-sm lg:text-xl">
              By exploring each aspect, the case study elucidates an
              understanding of how Thrift It sets itself apart within the realm
              of thrift commerce. Further exploring the unique ethos propelling
              the thrifting community towards a more eco-conscious future.
            </p>
          </div>
        </div>
        <div className="flex space-x-6 px-6 pt-10 md:px-0 lg:flex-row lg:justify-center lg:space-x-0">
          <div className="max-h-[650px] w-1/2 max-w-[410px] lg:mt-[176px]">
            <img className="h-full w-full object-contain" src={Menu} alt="" />
            <ImageSubHeading subHeading="Menu" />
          </div>
          <div className="max-h-[650px] w-1/2 max-w-[410px] ">
            <img
              className="h-full w-full object-contain"
              src={AllProducts}
              alt=""
            />
            <ImageSubHeading subHeading="Homepage" />
          </div>
        </div>
        <div className="px-6">
          <div className="flex w-full flex-row justify-around pt-32 lg:justify-evenly lg:pt-[160px]">
            <div className="w-[163px] lg:w-[353px]">
              <div className="flex w-full flex-row justify-between space-x-1 lg:w-[260px]">
                <div className="border-1 inline-flex h-min rounded-3xl border border-primaryGreen px-2 py-1 lg:px-4">
                  <p className="super-small uppercase text-primaryGreen">
                    New drop
                  </p>
                </div>
                <div className="inline-flex h-min rounded-3xl bg-primaryGreen px-2 py-1 lg:px-4">
                  <p className="super-small uppercase text-cream">30% Off</p>
                </div>
                <div className="border-1 inline-flex h-min rounded-3xl border border-primaryGreen px-2 py-1 lg:px-4">
                  <p className="super-small text-primaryGreen">Jeans</p>
                </div>
              </div>
              <div className="p-container pt-3">
                <p className="max-w-[320px] text-xs text-primaryGreen sm:text-base lg:text-xl">
                  At the top of the homepage, you'll find selectable tags that
                  update based on the user's search behavior.
                </p>
                <p className="max-w-[320px] text-xs text-primaryGreen sm:text-base lg:text-xl">
                  Furthermore, the purple circular tags on the garments indicate
                  either the number of times they've been worn by the seller or
                  if they belong to an export-rejected stock.
                </p>
              </div>
            </div>
            <div className="flex max-w-[165px] items-start justify-start pt-3 lg:max-w-[370px] lg:pt-0">
              <img className="object-contain" src={Y2k} alt="" />
            </div>
          </div>

          <div className="flex min-h-[440px] w-full flex-row justify-center space-x-5 pt-32 lg:flex-row lg:space-x-[100px] lg:pt-[90px]">
            <div className="flex flex-col justify-center lg:justify-start lg:pt-48">
              <img
                className="w-full max-w-[414px] object-contain"
                src={Nav}
                alt=""
              />
              <div className="p-container max-w-[400px] pt-4 lg:pt-16">
                <p className="text-xs text-primaryGreen sm:text-base lg:text-xl">
                  Get notified button essentially allows the user to be informed
                  about new collection drops or any offers that the seller would
                  be announcing on any given date.
                </p>
                <p className="text-xs text-primaryGreen sm:text-base lg:text-xl">
                  This information also gets collated on the calendar feature
                  that will be discussed further.
                </p>
                <p>
                  On the product page, you can access insights into the
                  sustainability impact of your purchase that calculates the
                  estimated reduction in carbon emissions or water usage
                  compared to purchasing a new item. This highlights the
                  environmental benefit of choosing thrifted goods.
                </p>
              </div>
            </div>
            <div>
              <img
                className="h-full max-h-[750px] w-full max-w-[414px] object-contain"
                src={ThriftItJeans}
                alt=""
              />
              <ImageSubHeading subHeading="Product page" />
            </div>
          </div>

          <div className="flex w-full flex-col justify-center space-x-[100px] pt-32 lg:flex-row">
            <div className="flex justify-center space-x-6 lg:space-x-32">
              <div>
                <img
                  className="max-w-[162px] object-contain lg:max-w-[300px]"
                  src={NewDrop}
                  alt=""
                />
                <img
                  className="max-w-[140px] object-contain pt-5 lg:w-full lg:max-w-[280px]"
                  src={CalendarMin}
                  alt=""
                />
                <p className="max-w-[420px] pt-10 text-xs text-primaryGreen sm:text-base lg:max-w-[280px] lg:text-xl">
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
                <div>
                  <img
                    className="max-h-[750px] w-full max-w-[414px]  object-contain"
                    src={Calendar}
                    alt=""
                  />
                  <ImageSubHeading subHeading="Calendar" />
                </div>
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
                className="h-full max-h-[750px] w-full object-contain"
                src={ShoppingCart}
                alt=""
              />
              <ImageSubHeading subHeading="Shopping Cart" />
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

          <div className="flex w-full justify-center pt-32">
            <img
              className="max-w-[360px] object-contain lg:max-w-[700px] "
              src={MindMap}
              alt=""
            />
          </div>
          <div className="pt-16 lg:pr-20 lg:pt-28">
            <div className="p-container sm:w-9/12 lg:ml-auto lg:w-[479px]">
              <p className="text-base lg:pb-2 lg:text-2xl">
                Enhancing Thrift-commerce
              </p>
              <p className="text-xs text-primaryGreen sm:text-base lg:text-xl">
                The concept behind Thrift It was to consolidate all thrift
                stores onto a single platform, while promoting thrift shopping
                among users. While social media platforms like Instagram and
                Facebook have played a role in promoting small businesses and
                thrift stores, they come with certain drawbacks:
              </p>
              <ul className="list-disc pl-4">
                <li className="pl-2 pt-4">
                  <p className=" text-xs text-primaryGreen sm:text-base lg:text-xl">
                    Both Instagram and Facebook rely on ads and follower counts,
                    where a higher follower count implies greater credibility
                    for a page. Thrift It takes the review approach, allowing
                    products to be compared based on customer reviews for a
                    specific brand or business, placing emphasis on reviews as a
                    source of credibility.
                  </p>
                </li>
                <li className="pl-2 pt-4">
                  <p className=" text-xs text-primaryGreen sm:text-base lg:text-xl">
                    Social media platforms typically display one page at a time,
                    requiring users to use tags or type out business names to
                    switch between pages, or search for a particular product,
                    limiting the ability to compare multiple products
                    simultaneously. Thrift It addresses this limitation by
                    providing users the ability to view and compare all products
                    at once, similar to the experience on traditional e-commerce
                    platforms.
                  </p>
                </li>
                <li className="pl-2 pt-4">
                  <p className=" text-xs text-primaryGreen sm:text-base lg:text-xl">
                    In addition, the challenge of tracking thrifted items is
                    addressed through Thrift It's calendar feature. Thrifting
                    often involves keeping tabs on various drops and events,
                    which can be a hassle. The calendar feature aims to simplify
                    this process, ensuring users stay up-to-date with the latest
                    releases and events within the thrift community.
                  </p>
                </li>
                <li className="pl-2 pt-4">
                  <p className=" text-xs text-primaryGreen sm:text-base lg:text-xl">
                    Furthermore, adding analytics such as carbon footprint can
                    enhance the app's usefulness and provide valuable insights,
                    particularly in today's fast fashion generation. Thrift It
                    aims to encourage users to be more mindful of the planet's
                    health, given the abundance of clothing already available
                    for the next decade. Thus, Thrift It can serve as the
                    platform to promote sustainability and responsible
                    consumption practices
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer nextProject="small-web" color="primaryGreen" />
      </section>
    </div>
  );
};

export default Thrift;
