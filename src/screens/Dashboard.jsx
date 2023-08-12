import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <Tabs align="center">
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
      </Tabs>
      <p>Payment</p>
      <p>Projects</p>
      <p>Collaborate</p>
    </>
  );
}
