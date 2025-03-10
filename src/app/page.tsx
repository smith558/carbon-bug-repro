"use client";

import {Button, Checkbox, Layer, Tab, TabList, TabPanel, TabPanels, Tabs, TextInput} from "@carbon/react";

export default function Home() {
  return (
    <div>
      <Tabs>
        <TabList contained>
          <Tab>Dashboard</Tab>
          <Tab>Monitoring</Tab>
          <Tab>Activity</Tab>
          <Tab>Analyze</Tab>
          <Tab disabled>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>
            <Layer>
              <form style={{
                margin: '2em'
              }}>
                <legend className={`cds--label`}>Validation example</legend>
                <Checkbox id="cb" labelText="Accept privacy policy"/>
                <Button style={{
                  marginTop: '1rem',
                  marginBottom: '1rem'
                }} type="submit">
                  Submit
                </Button>
                <TextInput id='asd' type="text" labelText="Text input label" helperText="Optional help text"/>
              </form>
            </Layer>
          </TabPanel>
          <TabPanel>Tab Panel 3</TabPanel>
          <TabPanel>Tab Panel 4</TabPanel>
          <TabPanel>Tab Panel 5</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
