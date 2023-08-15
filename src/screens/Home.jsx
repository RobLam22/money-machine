import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white py-16"></div>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1
                className="text-5xl font-extrabold text-black primary_text editable"
                data-content="website-headlines"
              >
                Generate Content, Copy & Images with AI
              </h1>
              <p
                className="mx-auto text-xl text-gray-600 secondary_text editable"
                data-content="website-subheadlines"
              >
                Use AI to boost your traffic and save hours of work.
                Automatically write unique, engaging and high-quality copy or
                content: from long-form blog posts or landing pages to digital
                ads in seconds.
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <a
                  onClick={() => navigate("signin")}
                  className="inline-flex items-center justify-center h-12 px-6 mr-1 font-medium transition duration-200 rounded shadow-md primary_button_background bg-blue-600 text-white primary_button_text focus:shadow-outline focus:outline-none btn-editable"
                >
                  Try It Free
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-original-title=""
                    title=""
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                {/* <a
                  href="#_"
                  className="flex items-center h-12 px-6 py-3 rounded-md text-blue-600 bg-blue-100 btn-editable"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div
              className="w-full h-auto relative rounded-md shadow-xl sm:rounded-xl"
              data-rounded="rounded-xl"
              data-rounded-max="rounded-full"
            >
              <img
                src="https://cdn.copymatic.ai/editor/img/rectangle.jpg"
                className="rounded-md img-editable"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="px-12 text-center sm:px-0" data-content="features">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-blue-50 sm:w-12 sm:h-12 bg-editable">
                <svg
                  className="w-8 h-8 text-blue-600 sm:w-10 sm:h-10"
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
                className="mb-2 text-sm font-bold leading-5 tracking-wider text-gray-900 uppercase primary_text editable"
                data-subcontent="feature-title"
              >
                Powered by AI
              </h6>
              <div
                className="mb-2 text-gray-700 secondary_text editable"
                data-subcontent="feature-content"
              >
                {" "}
                The GPT-3 AI language model is nothing like you've seen before:
                natural, unique and creative.
                <span className="placeholder small"></span>
                <span className="placeholder small"></span>
              </div>
            </div>
            <div className="px-12 text-center sm:px-0" data-content="features">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-blue-50 sm:w-12 sm:h-12 bg-editable">
                <svg
                  className="w-8 h-8 text-blue-600 sm:w-10 sm:h-10"
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
                className="mb-2 text-sm font-bold leading-5 tracking-wider text-gray-900 uppercase primary_text editable"
                data-subcontent="feature-title"
              >
                Grammar check
              </h6>
              <div
                className="mb-2 text-gray-700 secondary_text editable"
                data-subcontent="feature-content"
              >
                {" "}
                Don't let poor grammar hurt your visitor's trust, Copymatic can
                check and rewrite your content.
              </div>
            </div>
            <div className="px-12 text-center sm:px-0" data-content="features">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-blue-50 sm:w-12 sm:h-12 bg-editable">
                <svg
                  className="w-8 h-8 text-blue-600 sm:w-10 sm:h-10"
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
                className="mb-2 text-sm font-bold leading-5 tracking-wider text-gray-900 uppercase primary_text editable"
                data-subcontent="feature-title"
              >
                Powerful settings
              </h6>
              <div
                className="mb-2 text-gray-700 secondary_text editable"
                data-subcontent="feature-content"
              >
                {" "}
                Adjust the creativity level or the tone of voice to generate the
                perfect copy for your business.
              </div>
            </div>
            <div className="px-12 text-center sm:px-0" data-content="features">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-blue-50 sm:w-12 sm:h-12 bg-editable">
                <svg
                  className="w-8 h-8 text-blue-600 sm:w-10 sm:h-10"
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
                className="mb-2 text-sm font-bold leading-5 tracking-wider text-gray-900 uppercase primary_text editable"
                data-subcontent="feature-title"
              >
                Sentence rewriter
              </h6>
              <div
                className="mb-2 text-gray-700 secondary_text editable"
                data-subcontent="feature-content"
              >
                {" "}
                AI understands your sentence and rewrites it in a completely
                unique and smart way.
                <span className="placeholder small"></span>
                <span className="placeholder small"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="px-4 py-16 mx-auto sm:max-w-7xl md:max-w-7xl lg:max-w-7xl md:px-24 lg:px-8 lg:py-20">
          <div
            className="grid gap-6 row-gap-10 lg:grid-cols-2"
            data-content="how-it-works"
          >
            <div className="lg:py-6 lg:pr-16">
              <h2 className="mb-8 font-bold text-black text-4xl primary_text editable">
                How it works
              </h2>
              <div className="flex" data-subcontent="step_1">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-blue-600"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          stroke-miterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        ></line>
                        <polyline
                          fill="none"
                          stroke-miterlimit="10"
                          points="19,15 12,22 5,15"
                        ></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8 w-full">
                  <p
                    className="mb-2 text-xl text-gray-900 font-bold primary_text editable"
                    data-subcontent="step-title"
                  >
                    Sign up for a free trial
                  </p>
                  <p
                    className="text-base text-gray-600 secondary_text editable"
                    data-subcontent="step-content"
                  >
                    Enter your email address and create a password.
                  </p>
                </div>
              </div>
              <div className="flex" data-subcontent="step_2">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-blue-600"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          stroke-miterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        ></line>
                        <polyline
                          fill="none"
                          stroke-miterlimit="10"
                          points="19,15 12,22 5,15"
                        ></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8 w-full">
                  <p
                    className="mb-2 text-xl text-gray-900 font-bold primary_text editable"
                    data-subcontent="step-title"
                  >
                    Start watching
                  </p>
                  <p
                    className="text-base text-gray-600 secondary_text editable"
                    data-subcontent="step-content"
                  >
                    Browse our library of TV shows and movies and start watching
                    on your device.
                  </p>
                </div>
              </div>
              <div className="flex" data-subcontent="step_3">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-6 text-blue-600"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <polyline
                          fill="none"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          points="6,12 10,16 18,8"
                        ></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pt-1 pb-0 w-full">
                  <p
                    className="mb-2 text-xl text-gray-900 font-bold primary_text editable"
                    data-subcontent="step-title"
                  >
                    Cancel anytime
                  </p>
                  <p
                    className="text-base text-gray-600 secondary_text editable"
                    data-subcontent="step-content"
                  >
                    You can cancel your free trial at any time.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="inset-0 object-cover w-full rounded shadow-lg h-96 lg:absolute lg:h-full img-editable"
                src="https://cdn.copymatic.ai/editor/img/rectangle-v.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="flex flex-col max-w-7xl px-12 mx-auto lg:px-8">
          <h1 className="max-w-md text-5xl font-extrabold text-gray-900 sm:mx-auto lg:max-w-none sm:text-center primary_text editable">
            Pricing
          </h1>
          <p
            className="max-w-md mx-auto mt-3 text-xl text-center text-gray-500 max-w-none secondary_text editable"
            data-content="website-subheadlines"
          >
            Simple and easy plans, perfect for the individual or a team!
          </p>
          <div
            className="flex mx-auto mt-12 max-w-7xl"
            data-content="pricing-features"
          >
            <div className="w-full max-w-md px-0 mx-auto mb-6 w-1/3 px-3 mb-0">
              <div className="flex flex-col h-full mb-10 bg-white border-2 border-gray-200 rounded-lg shadow-sm sm:mb-0">
                <div className="px-10 pt-10">
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full text-uppercase secondary_text bg-editable editable">
                    Free
                  </span>
                </div>

                <div className="px-10 mt-4">
                  <span className="text-5xl text-black font-bold editable">
                    $0
                  </span>
                  <span className="text-xl font-bold text-gray-500">/mo</span>
                </div>

                <div className="px-10 pb-10 mt-3">
                  <p className="text-lg leading-7 text-gray-500 secondary_text editable">
                    Test out our features
                  </p>
                </div>

                <div className="p-10 mt-auto bg-gray-50">
                  <ul className="flex flex-col">
                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Test out some responses
                        </p>
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Limited access
                        </p>
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Word caps
                        </p>
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Character limit
                        </p>
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a
                      href="#_"
                      className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 active:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-25 btn-editable"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md px-0 mx-auto mb-6 w-1/3 px-3 mb-0">
              <div className="flex flex-col h-full mb-10 bg-white border-2 border-gray-200 rounded-lg shadow-sm ring-8 ring-opacity-25 ring-blue-300 sm:mb-0">
                <div className="px-10 pt-10">
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full leading-nine text-uppercase secondary_text bg-editable editable">
                    Pro
                  </span>
                </div>

                <div className="px-10 mt-4">
                  <span className="text-5xl text-black font-bold editable">
                    $10
                  </span>
                  <span className="text-xl font-bold text-gray-500">/mo</span>
                </div>

                <div className="px-10 pb-10 mt-3">
                  <p className="text-lg leading-7 text-gray-500 secondary_text editable">
                    Basic features for individuals
                  </p>
                </div>

                <div className="p-10 mt-auto bg-gray-50">
                  <ul className="flex flex-col">
                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Unlimited words
                        </p>
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Unlimited chat access
                        </p>
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Unlimited projects
                        </p>
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Access to everything
                        </p>
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <a
                      href="#_"
                      className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 active:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-25 btn-editable"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md px-0 mx-auto mb-6 w-1/3 px-3 mb-0">
              <div className="flex flex-col h-full mb-10 bg-white border-2 border-gray-200 rounded-lg shadow-sm sm:mb-0">
                <div className="px-10 pt-10">
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full text-uppercase secondary_text bg-editable editable">
                    Premium
                  </span>
                </div>

                <div className="px-10 mt-4">
                  <span className="text-5xl text-black font-bold editable">
                    $20
                  </span>
                  <span className="text-xl font-bold text-gray-500">/mo</span>
                </div>

                <div className="px-10 pb-10 mt-3">
                  <p className="text-lg leading-7 text-gray-500 secondary_text editable">
                    Premium features for teams and enterprise
                  </p>
                </div>

                <div className="p-10 mt-auto bg-gray-50">
                  <ul className="flex flex-col">
                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          100 users
                        </p>
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Collaborative workspace
                        </p>
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Multiple languages
                        </p>
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="flex items-center text-green-500">
                        <svg
                          className="w-4 h-4 mr-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                        </svg>

                        <p
                          className="text-gray-700 text-base w-full secondary_text editable"
                          data-subcontent="feature"
                        >
                          Plagarism checker
                        </p>
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <a
                      href="#_"
                      className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 active:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-25 btn-editable"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-20 pb-24 mx-auto md:px-2 bg-white">
        <div className="max-w-6xl px-8 mx-auto lg:px-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-3xl primary_text editable">
            Frequently Asked Questions
          </h2>
          <div className="text-sm border-t border-b border-gray-200 divide-y divide-gray-200">
            <div className="faq is_retractable">
              <div className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none">
                <h4
                  className="secondary_text text-gray-900 text-base w-full editable"
                  data-content="faq"
                >
                  How long can the articles be?
                </h4>
                <svg
                  className="flex-none w-4 h-4 ml-4 transition transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <p
                className="pb-5 pr-0 text-gray-700 secondary_text text-sm md:pr-40 editable"
                // style="display:none"
                data-subcontent="faq-answers"
              >
                One of our tools is a long-form article writer which is
                specifically designed to generate unlimited content per article.
                It lets you generate the blog title, outline, introduction, long
                paragraphs, or complete your text in seconds.
              </p>
            </div>
            <div className="faq is_retractable">
              <div className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none">
                <h4
                  className="secondary_text text-gray-900 text-base w-full editable"
                  data-content="faq"
                >
                  Is there a free trial?
                </h4>
                <svg
                  className="flex-none w-4 h-4 ml-4 transition transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <p
                className="pb-5 pr-0 text-gray-700 secondary_text text-sm md:pr-40 editable"
                // style="display:none"
                data-subcontent="faq-answers"
              >
                Yes, our free trial includes 10 credits which let you try all of
                our AI tools with some limited functionality. With 10 credits
                you can generate about 1,000 words of blog content. Give it a
                try!
              </p>
            </div>
            <div className="faq is_retractable">
              <div className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none">
                <h4
                  className="secondary_text text-gray-900 text-base w-full editable"
                  data-content="faq"
                >
                  Do you offer an API?
                </h4>
                <svg
                  className="flex-none w-4 h-4 ml-4 transition transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <p
                className="pb-5 pr-0 text-gray-700 secondary_text text-sm md:pr-40 editable"
                // style="display:none"
                data-subcontent="faq-answers"
              >
                At this time we do not have an API ready but is in the works!
              </p>
            </div>
            <div className="faq is_retractable">
              <div className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none">
                <h4
                  className="secondary_text text-gray-900 text-base w-full editable"
                  data-content="faq"
                >
                  How long would it take to write an article with AI?
                </h4>
                <svg
                  className="flex-none w-4 h-4 ml-4 transition transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <p
                className="pb-5 pr-0 text-gray-700 secondary_text text-sm md:pr-40 editable"
                // style="display:none"
                data-subcontent="faq-answers"
              >
                Using Copymatic would help you to supercharge your content
                production by writing long articles in minutes, not hours. We
                estimate that it takes about 5 min to write a long-form article.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
