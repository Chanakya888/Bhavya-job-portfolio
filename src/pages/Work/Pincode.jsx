import React from "react";
import ProjectIntro from "../../components/ProjectIntro";
import SideLineContainer from "../../components/pincode/SideLineContainer";
import Footer from "../../components/Footer";
import Why_1 from "../../assets/pincode/why_1.mp4";
import CreateAndSave from "../../assets/pincode/Create_and_save.mp4";
import TrackVisited from "../../assets/pincode/track_visited.mp4";
import Explore from "../../assets/pincode/explore.png";
import AddNotes from "../../assets/pincode/add_notes.png";
import ExploreButton from "../../assets/pincode/explore_button.png";
import FeatureBreakDownMedia from "../../components/pincode/FeatureBreakDownMedia";
import useScreenWidth from "../../hooks/useScreenWidth";
import FeatureBreakDownMediaBig from "../../components/pincode/FeatureBreakDownMediaBig";
import Navigation from "../../components/pincode/Navigation";
import ExploreBanner from "../../components/pincode/ExploreBanner";
import AddNotesBanner from "../../components/pincode/AddNotesBanner";
const Pincode = () => {
  return (
    <div>
      <div className="mt-4 flex w-full justify-center bg-primaryGreen px-4 py-3">
        <div className="flex space-x-1">
          <p className="text-base lg:pt-0">💡</p>
          <p className="text-left text-base text-white">
            We are in the process of developing the app for this project
          </p>
        </div>
      </div>
      <div className="-mt-4">
        <ProjectIntro
          title="pincode"
          year="2024"
          type="UX/UI Design"
          type2="SELF INITIATED"
        >
          <p className="text-base lg:text-xl">
            Pincode is a simple way to find and share places online. It is a
            community-driven platform, where people get to share their favorite
            spots, eateries, hangouts, must-do activities or just a list of
            places (or pin codes as we call it) on the public digital forum. To
            us Pincode is more than just a list; it could be a collective memory
            of places, or a shared narrative curated by those who resonate with
            the essence of the place.
          </p>
          <p className="text-base lg:pt-6 lg:text-xl">
            Pincode adds the layer of personal touch. It is fueled by the
            passion and insights of the locals. People who have been living in
            your visiting cities for years together sharing what their idea of
            the place is like. Each pincode creator has the opportunity to add a
            personal note. These notes can be more than practical tips or
            recommendations; they could be stories, anecdotes, nuances or
            idiosyncrasies that add to the flavor of the place.
          </p>
        </ProjectIntro>
      </div>
      <section className="bg-pincodeYellow">
        <div className="p-container px-6 pt-10 lg:px-12 lg:pt-16 xl:px-18 xl:pt-20">
          <p className="text-xl xl:text-3.5xl">Why did I create the Pincode?</p>
          <div className="pt-2 lg:flex lg:flex-row-reverse lg:justify-end lg:pt-6">
            <div className="lg:pl-28">
              <p className="text-base lg:w-[317px] lg:text-xl">
                I’ve loved travelling lately and discovering off-the grid
                experiences of a place or seeking out rare local cuisines had
                become the highlights of my trips.
              </p>
              <p className="text-base lg:w-[317px] lg:text-xl">
                With Pincode, I wanted it to serve as a digital marker for
                people to discover and engage with personal recommendations,
                stories, and insights curated by locals and enthusiasts alike.
              </p>
            </div>
            <div className="-mx-6 pt-5 lg:mx-0 lg:max-w-[500px] lg:pt-0 xl:max-w-[630px]">
              <video src={Why_1} autoPlay loop muted playsInline width="100%" />
            </div>
          </div>
        </div>

        <section className="px-6 pt-8 lg:px-12 lg:pt-20 xl:px-18">
          <p className="pb-2 text-xl xl:text-3.5xl">
            What are the highlight features of the app?
          </p>
          <div className="make-all-p  xl:pt-6">
            <p className="lg:max-w-[362px]">
              The primary goal was to create a simple intuitive interface for
              our very first version, focusing on basic actions:
            </p>
            <div className="pt-4 lg:flex lg:justify-between lg:space-x-4">
              <p className="lg:max-w-[362px]">
                01. Finding nearby Pincodes: Users can effortlessly explore
                nearby places. The concept simplifies the process by allowing
                users to either enter a name in the search bar or browse based
                on their interests.
              </p>
              <p className="pt-4 lg:max-w-[362px] lg:pt-0">
                Search results automatically display matched interest places in
                the vicinity, including personally curated Pincodes by other
                users. Users have the flexibility to toggle between viewing
                Pincodes exclusively or accessing default search results.
              </p>
              <FeatureBreakDownMedia />
              <div className="pt-4 lg:pt-0">
                <SideLineContainer text="The Term Pincode: In the context of this project,  Pincode represents a collection of places shared within the platform's community. " />
              </div>
            </div>
          </div>
          <FeatureBreakDownMediaBig />
        </section>

        <section className="px-6 pt-8 lg:flex lg:justify-between lg:space-x-8 lg:px-12 lg:pt-20 xl:px-18">
          <div className="make-all-p lg:max-w-[360px]">
            <p className="text-xl"> 02. Create and Save Pincodes: </p>
            <div className="p-container ">
              <p>
                Users can actively engage with locations by marking them as
                visited or adding them to their personalized Pincode list.
              </p>
              <p>
                This functionality allows users to curate a personalized Pincode
                list, ensuring convenient access to a diverse range of preferred
                locations and experiences.
              </p>
            </div>
          </div>
          <div className="pt-5 lg:max-w-[524px] lg:pt-0">
            <div className="-mx-6 bg-transparentPincodeYellow pl-20 pt-24 lg:mx-0">
              <video
                src={CreateAndSave}
                autoPlay
                loop
                muted
                playsInline
                className=""
              />
            </div>
          </div>
        </section>

        <section className="px-6 pt-8 lg:flex lg:justify-between lg:px-12 lg:pt-20 xl:px-18">
          <div className="make-all-p lg:max-w-[360px]">
            <p className="text-xl">03. Track Visited Cities or Countries:</p>
            <div className="p-container ">
              <p>
                Keep a tally of the number of cities or countries visited. Upon
                accessing their profile or menu page, users can view the total
                number of collected Pincodes.{" "}
              </p>
              <p>
                Additionally, by marking places as visited, these locations are
                automatically added to a list of visited cities or countries,
                offering a glimpse to all the places pinned adding in to the of
                “Joy of exploring” experience.
              </p>
            </div>
          </div>
          <div className="pt-5 lg:max-w-[524px] lg:pt-0">
            <div className="-mx-6 bg-transparentPincodeYellow pl-20 pt-24 lg:mx-0">
              <video
                src={TrackVisited}
                autoPlay
                loop
                muted
                playsInline
                className=""
              />
            </div>
          </div>
        </section>

        <section className="px-6 pt-8 lg:px-12 lg:pt-20 xl:px-18">
          <div className="make-all-p lg:flex lg:justify-between">
            <div className="max-w-[360px]">
              <p className="text-xl">04. Add Notes to Pincodes:</p>
              <p>
                Personalize saved places with little notes, anecdotes or
                reminders.
              </p>
              <p className="pt-4">
                This feature allows users to infuse their experiences with
                unique stories, cherished memories, or practical tips,
                transforming each pinned location into a personalized curation.
              </p>
            </div>
            <p className="max-w-[360px] pt-4 lg:pt-0">
              Whether it's an off grid place discovered during travels or a
              favorite local haunt, users can capture the essence of each place
              in their own words, adding a narrative to their Pincode
              collection."
            </p>
            <div className="pt-4 lg:pt-0">
              <SideLineContainer text="The notes are personal to the users nobody else can view the notes unless its been added to their Pincode list." />
            </div>
          </div>
          <AddNotesBanner />
        </section>

        <section className="px-6 pt-8 lg:px-12 lg:pt-20 xl:px-18">
          <div className="make-all-p lg:flex lg:justify-between">
            <div className="max-w-[360px]">
              <p className="text-xl">05. The Explore Button:</p>
              <p>
                The "Explore" button on the homepage functions similarly to the
                random search.
              </p>
              <p className="lg:pt-4">
                Users get to discover countries and explore the Pincode entries
                associated with those places.
              </p>
            </div>
            <p className="max-w-[360px]">
              This feature is designed to capture the essence of spontaneous
              exploration, offering users an opportunity to uncover new facets
              of places worldwide. Whether seeking to learn about unfamiliar
              locales or simply indulging in the perspectives of locals, it
              promises an engaging and immersive experience.
            </p>
            <div className="hidden pt-4 lg:block">
              <img
                src={Explore}
                alt="Explore button"
                className="ml-auto max-w-[135px]"
              />
            </div>
          </div>
          <div className="pt-9 lg:hidden">
            <img
              src={Explore}
              alt="Explore button"
              className="ml-auto max-w-[135px]"
            />
          </div>

          <ExploreBanner />
        </section>

        <section className="lg:pt-20">
          <div className="px-6 pt-8 lg:px-12 xl:px-18">
            <p className="text-xl lg:text-3.5xl">Navigating on Pincode</p>
          </div>
          <Navigation />
          <div className="pt-8 lg:flex lg:w-full lg:px-12 lg:pt-[120px] xl:px-18 xl:pt-[160px]">
            <div className="lg:w-1/2"></div>
            <div className="make-all-p p-container px-6  lg:w-1/2 lg:max-w-[520px]">
              <p>
                Pincode is a space for finding, saving, and sharing places. It's
                like having a local guide wherever you go, showing you the
                hidden gems and while exploring different experiences of a
                place.
              </p>
              <p>
                Going further we are looking to make Pincode a platform where
                you can follow other explorers and creators, discovering new
                places through each others accounts.
              </p>
              <p>
                No complicated algorithms or tracking here – just a simple sense
                of community centered around places. Pincode is where every pin
                is a story, and every place leads to a new adventure.
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer color="green" bgColor="bg-pincodeYellow" />
    </div>
  );
};

export default Pincode;
