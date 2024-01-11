"use client";

import { CareerSection, CareerYear } from "@/components/CareerEntries";
import {
  Flex,
  Stack,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Divider,
} from "@chakra-ui/react";
import { Animate } from "@/components/Animate";
import { Link } from "@chakra-ui/next-js";
import Paragraph from "@/styled/paragraph";
export default function Page() {
  return (
    <Stack>
      <Animate delay={0.2}>
        <Heading
          variant="section-title"
          fontWeight={100}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          as="h3"
          justifyContent="left"
          m={0}
        >
          my career
        </Heading>
      </Animate>
      <Animate delay={0.3}>
        <Flex direction="row">
          <Link href="/career/doordash">
            <CareerSection>
              <CareerYear>
                Software Engineer @ DoorDash (2022 → Current)
              </CareerYear>
            </CareerSection>
          </Link>
        </Flex>
      </Animate>
      <Animate delay={0.4}>
        <Text>
          Working at DoorDash on the test platform team. Built out a code
          coverage ecosystem & working on test quarantine algorithms.
        </Text>
      </Animate>
      <Divider />
      <Animate delay={0.5}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              UC Berkeley Alumni (Fall 2018 → Spring 2022)
            </CareerYear>
          </CareerSection>
        </Flex>
        <Text>
          B.A. in Computer Science with minor in Data Science, GPA: 3.5
        </Text>
      </Animate>
      <Divider />
      <Animate delay={0.7}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              Software Engineering Intern @ Ridgeline (Summer 2021)
            </CareerYear>
          </CareerSection>
        </Flex>
        <Text>Built keyboard shortcuts in the Ridgeline application.</Text>
      </Animate>
      <Divider />
      <Animate delay={0.9}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              Software Engineering Intern @ Playstation (Summer 2020)
            </CareerYear>
          </CareerSection>
        </Flex>
        <Text>Built a schema translation pipeline used in P.S. Now.</Text>
      </Animate>
      <Divider />
      <Animate delay={1}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              Software Engineering Intern @ RED Digital Cinema (Summer 2019)
            </CareerYear>
          </CareerSection>
        </Flex>
        <Text>
          Built an E2E hardware testing application for launch of the RED
          Komodo.
        </Text>
      </Animate>
      <Divider />
    </Stack>
  );
}
