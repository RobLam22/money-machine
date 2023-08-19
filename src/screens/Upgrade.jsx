export default function Upgrade() {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="flex flex-col max-w-7xl px-12 mx-auto lg:px-8">
          <h1
            id="upgrade"
            className="max-w-md text-5xl font-extrabold text-gray-900 sm:mx-auto lg:max-w-none sm:text-center primary_text editable"
          >
            Upgrade to Premium
          </h1>
          <p
            className="max-w-md mx-auto mt-3 text-xl text-center text-gray-500 max-w-none secondary_text editable"
            data-content="website-subheadlines"
          >
            Enjoy all the premium benefits and features.
          </p>
          <div
            className="flex mx-auto mt-12 max-w-7xl"
            data-content="upgrade-features"
          >
            <div className="w-1/2">
              <div className="flex flex-col h-full bg-white border-2 border-gray-200 rounded-lg shadow-sm">
                <div className="px-10 pt-10 flex justify-center">
                  <span className="px-4 py-2 text-lg font-medium text-blue-600 bg-blue-50 rounded-full text-uppercase secondary_text bg-editable editable">
                    Premium
                  </span>
                </div>
                <div className="px-10 mt-4 flex justify-center">
                  <span className="mr-2 text-6xl text-black font-bold editable">
                    $20
                  </span>
                  <span className="text-xl font-bold text-gray-500 align-text-top">
                    /mo
                  </span>
                </div>
                <div className="p-10 mt-auto bg-white-50">
                  <div className="mt-8">
                    <a
                      href="https://buy.stripe.com/fZe5nOgBY90m7eg3cg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 active:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-25 btn-editable"
                    >
                      Upgrade Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* rhs */}
            <div className="w-1/2 px-8">
              <div className="mt-10 flex flex-col items-center space-y-8 text-lg">
                <div className="text-center space-y-4">
                  <strong className="text-gray-900 text-xl mb-2 border-b border-gray-400 inline-block">
                    Exclusive A.I Tools:
                  </strong>
                  <ul className="space-y-2 list-none">
                    <li className="text-gray-700">
                      <strong>Article Generator</strong>
                    </li>
                    <li className="text-gray-700">
                      <strong>Social Media Posts</strong>
                    </li>
                    <li className="text-gray-700">
                      <strong>Sentence Expander</strong>
                    </li>
                    <li className="text-gray-700">
                      <strong>Keyword Suggestions SEO</strong>
                    </li>
                  </ul>
                </div>

                <div className="text-center space-y-4">
                  <strong className="text-gray-900 text-xl mb-2 border-b border-gray-400 inline-block">
                    Full Access:
                  </strong>
                  <p className="text-gray-700">
                    Enjoy unrestricted access to every corner of the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
