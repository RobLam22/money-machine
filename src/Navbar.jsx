import { Outlet } from "react-router";
import { NavLink } from "./NavLink";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import supabase from "./supabase";

export default function Navbar() {
  return (
    <div>
      <nav>
        {/* <Tabs>
          <TabList>
            <Tab>How It Works</Tab>
            <Tab>Pricing</Tab>
            <Tab>Features</Tab>
            <Tab>FAQ</Tab>
            <Tab>Login</Tab>
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

        <NavLink to="how">
          <h3>How It Works</h3>
        </NavLink>
        <NavLink to="pricing">
          <h3>Pricing</h3>
        </NavLink>
        <NavLink to="features">
          <h3>Features</h3>
        </NavLink>
        <NavLink to="faq">
          <h3>FAQ</h3>
        </NavLink>
        <NavLink to="login">
          <h3>Login</h3>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
