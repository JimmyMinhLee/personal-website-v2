"use client";

import { CareerSection } from "@/components/CareerEntries";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Animate } from "@/components/Animate";
export default function Page() {
  return (
    <Animate delay={0.2}>
      <Stack>
        <Heading
          variant="section-title"
          fontWeight={100}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          as="h3"
          justifyContent="left"
          m={0}
        >
          Career
        </Heading>
        <Flex direction="row">
          <Link href="/career/doordash">
            <CareerSection>
              <Text variant="section-subtitle">
                SWE @ DoorDash (2022 → Current)
              </Text>
            </CareerSection>
          </Link>
        </Flex>
        <Text>
          Working at DoorDash on the test platform team. Built out a code
          coverage ecosystem & working on test quarantine algorithms.
        </Text>
        <div></div>
        <Flex direction="row">
          <CareerSection>
            <Text variant="section-subtitle">
              Alumni @ Cal (Fall 2018 → Spring 2022)
            </Text>
          </CareerSection>
        </Flex>
        <Text>
          B.A. in Computer Science with minor in Data Science, GPA: 3.5
        </Text>
        <div></div>
        <Flex direction="row">
          <CareerSection>
            <Text variant="section-subtitle">
              SWE Intern @ Ridgeline (Summer 2021)
            </Text>
          </CareerSection>
        </Flex>
        <Text>Built keyboard shortcuts in the Ridgeline application.</Text>
        <div></div>
        <Flex direction="row">
          <CareerSection>
            <Text variant="section-subtitle">
              SWE Intern @ Playstation (Summer 2020)
            </Text>
          </CareerSection>
        </Flex>
        <Text>Built a schema translation pipeline used in P.S. Now.</Text>
        <div></div>
        <Flex direction="row">
          <CareerSection>
            <Text variant="section-subtitle">
              SWE Intern @ RED Digital Cinema (Summer 2019)
            </Text>
          </CareerSection>
        </Flex>
        <Text>
          Built an E2E hardware testing application for launch of the RED
          Komodo.
        </Text>
        <div></div>
      </Stack>
    </Animate>
  );
}
