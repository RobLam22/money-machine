import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      {/* <Tabs align="center">
        <TabList>
          <Tab>Dashboard</Tab>
          <Tab>Projects</Tab>
          <Tab>Payment</Tab>
          <Tab>Collaborate</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}

      <div class="max-w-7xl mx-auto relative text-gray-700 body-font">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 md:flex-row">
          <a
            href="#_"
            class="flex items-center order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center"
          >
            <span class="text-xl font-black leading-none text-gray-900 select-none logo">
              Netflix<span class="text-blue-600">.</span>
            </span>
          </a>
          <div class="relative flex flex-col md:flex-row items-center">
            <nav class="flex flex-wrap items-center pt-2 pb-2 pb-5 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
              <a
                href="#projects"
                class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
              >
                Home
              </a>
              <a
                href="#_"
                class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
              >
                Features
              </a>
              <a
                href="#_"
                class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
              >
                How It Works
              </a>
              <a
                href="#_"
                class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
              >
                Pricing
              </a>
              <a
                href="#_"
                class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable"
              >
                Faq
              </a>
            </nav>
            <div class="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
              <a
                href="#_"
                class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-blue-600 secondary_text link-editable"
              >
                Sign in
              </a>
              <a
                href="#_"
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 secondary_text btn-editable"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div class="px-12 text-center sm:px-0" data-content="features">
              <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-blue-50 sm:w-12 sm:h-12 bg-editable">
                <svg
                  class="w-8 h-8 text-blue-600 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
              <h6
                class="mb-2 text-sm font-bold leading-5 tracking-wider text-gray-900 uppercase primary_text editable"
                data-subcontent="feature-title"
              >
                What's better than curling up on the couch with a good show?
                Binge-watching your favorite series on Netflix, of course! With
                Netflix, you can watch shows online, anytime, anywhere. And with
                new episodes added all the time, there's always something new to
                discover.
              </h6>
              <div
                class="mb-2 text-gray-700 secondary_text editable"
                data-subcontent="feature-content"
              >
                <span class="placeholder small"></span>
                <span class="placeholder small"></span>
              </div>
            </div>
            <div class="px-12 text-center sm:px-0" data-content="features">
              <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-blue-50 sm:w-12 sm:h-12 bg-editable">
                <svg
                  class="w-8 h-8 text-blue-600 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
              <h6
                class="mb-2 text-sm font-bold leading-5 tracking-wider text-gray-900 uppercase primary_text editable"
                data-subcontent="feature-title"
              >
                Binge away
              </h6>
              <div
                class="mb-2 text-gray-700 secondary_text editable"
                data-subcontent="feature-content"
              >
                {" "}
                With Netflix, you can watch entire seasons of your favorite
                shows in one sitting. No more waiting a week for the next
                episode.
              </div>
            </div>
            <div class="px-12 text-center sm:px-0" data-content="features">
              <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-blue-50 sm:w-12 sm:h-12 bg-editable">
                <svg
                  class="w-8 h-8 text-blue-600 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
              <h6
                class="mb-2 text-sm font-bold leading-5 tracking-wider text-gray-900 uppercase primary_text editable"
                data-subcontent="feature-title"
              >
                Netflix for everyone
              </h6>
              <div
                class="mb-2 text-gray-700 secondary_text editable"
                data-subcontent="feature-content"
              >
                {" "}
                Whether you're a movie buff or a TV addict, Netflix has
                something for everyone. With a huge selection of movies, TV
                shows, and documentaries, there's always something new to watch.
              </div>
            </div>
            <div class="px-12 text-center sm:px-0" data-content="features">
              <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-blue-50 sm:w-12 sm:h-12 bg-editable">
                <svg
                  class="w-8 h-8 text-blue-600 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
              <h6
                class="mb-2 text-sm font-bold leading-5 tracking-wider text-gray-900 uppercase primary_text editable"
                data-subcontent="feature-title"
              >
                Netflix has something for everyone. Whether you're looking for a
                new release or a classic film, there's always something new and
                exciting to watch on Netflix. Plus, with our easy-to-use
                interface, you can keep track of your watching history and pick
                up where you left off,
              </h6>
              <div
                class="mb-2 text-gray-700 secondary_text editable"
                data-subcontent="feature-content"
              >
                <span class="placeholder small"></span>
                <span class="placeholder small"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>Payment</p>
      <p id="projects">Projects</p>
      <p>Collaborate</p>
    </>
  );
}
