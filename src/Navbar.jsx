import { useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { NavLink } from "./NavLink";
import { SessionsContext } from "./SessionsContext";
import supabase from "./supabase";

export default function Navbar() {
  const navigate = useNavigate();
  const SessionCheck = useContext(SessionsContext);
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto relative text-gray-700 body-font">
          <div className="container flex flex-col flex-wrap items-center justify-between py-5 md:flex-row">
            <a
              href="#_"
              className="flex items-center order-first font-medium text-gray-00 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center"
            >
              <div className="text-center sm:text-left">
                {SessionCheck.session === null ? (
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    All A.I.
                  </h1>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      Welcome back!
                    </h1>
                    <p className="mt-1.5 text-sm text-gray-500">
                      What can AI do for you today?
                    </p>
                  </>
                )}
              </div>
            </a>
            <div className="relative flex flex-col md:flex-row items-center">
              <nav className="flex flex-wrap items-center pt-2 pb-2 pb-5 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
                {SessionCheck.session && (
                  <NavLink to="/dashboard">
                    <h3 className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable">
                      Dashboard
                    </h3>
                  </NavLink>
                )}
                <NavLink to="/">
                  <h3 className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable">
                    Home
                  </h3>
                </NavLink>
                <NavLink to="howitworks">
                  <h3 className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable">
                    How It Works
                  </h3>
                </NavLink>
                <NavLink to="pricing">
                  <h3 className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable">
                    Pricing
                  </h3>
                </NavLink>
                <NavLink to="faq">
                  <h3 className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable">
                    FAQ
                  </h3>
                </NavLink>
              </nav>
              <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                {SessionCheck.session === null ? (
                  <>
                    <NavLink to="signin">
                      <h3 className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-blue-600 secondary_text link-editable">
                        Sign In
                      </h3>
                    </NavLink>
                    <NavLink to="signup">
                      <h3 className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 secondary_text btn-editable">
                        Sign up
                      </h3>
                    </NavLink>
                  </>
                ) : (
                  <NavLink>
                    <h3
                      className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 secondary_text btn-editable"
                      onClick={() => {
                        supabase.auth.signOut();
                        navigate("/");
                      }}
                    >
                      Logout
                    </h3>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      <div>
        <nav></nav>
      </div>
    </>
  );
}
