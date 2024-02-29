"use client";

import {
  Stack,
  Heading,
  Text,
  Divider,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
  Card,
  Box,
  StackDivider,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { AnimateChildren } from "@/components/animation/AnimateChildren";

export default function Page() {
  return (
    <AnimateChildren delay={0.2}>
      <Stack>
        <Heading variant="section-title"> About Me </Heading>
        <Text variant="section-subtitle"> Overview </Text>
        <Text>
          I&apos;m a software engineer at DoorDash based out of Southern
          California. I currently work in the infrastructure organization to
          build all sorts of cool products for our engineers. I attended UC
          Berkeley from 2018 - 2022, and also did a lot of cool campus
          organizations during my time there.
        </Text>
        <br />
        <Tabs isFitted orientation="vertical">
          <TabList>
            <Tab> SWE @ DoorDash </Tab>
            <Tab>Alum @ Cal </Tab>
            <Tab>SWE Intern @ Ridgeline </Tab>
            <Tab>SWE Intern @ Playstation </Tab>
            <Tab>SWE Intern @ RED Digital Cinema</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Card>
                <CardHeader>
                  <Text m={0} variant="section-subtitle">
                    Summary
                  </Text>
                </CardHeader>
                <CardBody>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        When?
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        June &apos;22 - Current
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Overview
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        Code coverage, storefront testing, context propogation
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </TabPanel>

            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </AnimateChildren>
  );
}
