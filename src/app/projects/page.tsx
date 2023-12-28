"use client";

import { Stack, Heading, Divider, useColorModeValue } from "@chakra-ui/react";
import { Animate } from "@/components/Animate";
import { ProjectEntry } from "./ProjectEntry";
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
          my projects
        </Heading>
      </Animate>
      <Animate delay={0.3}>
        <Heading
          variant="section-title"
          fontWeight={100}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight={"100%"}
          as="h3"
          justifyContent="left"
          m={0}
        >
          ongoing
        </Heading>
      </Animate>
      <ProjectEntry
        delay={0.4}
        name="jimmylee.xyz"
        description="my personal website, built using next.js & chakra ui."
        startYear="2023"
        endYear="ongoing"
        githubLink="/personal-next-website"
      />
      <Animate delay={0.45}>
        <Divider m={4} borderColor={useColorModeValue("", "gray")} />
      </Animate>
      <Animate delay={0.3}>
        <Heading
          variant="section-title"
          fontWeight={100}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight={"100%"}
          as="h3"
          justifyContent="left"
          m={0}
        >
          future
        </Heading>
      </Animate>
      <ProjectEntry
        delay={0.5}
        name="nomad"
        description="social media application for wanderlusts"
        startYear="tbd"
        endYear="tbd"
        githubLink=""
      />
      <ProjectEntry
        delay={0.5}
        name="mail deleter"
        description="google chrome extension for deleting old emails"
        startYear="tbd"
        endYear="tbd"
        githubLink=""
      />
      <Animate delay={0.55}>
        <Divider m={4} borderColor={useColorModeValue("", "gray")} />
      </Animate>
      <Animate delay={0.6}>
        <Heading
          variant="section-title"
          fontWeight={100}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight={"100%"}
          as="h3"
          justifyContent="left"
          m={0}
        >
          previous
        </Heading>
      </Animate>
      <ProjectEntry
        delay={0.7}
        name="too many cooks"
        description="overcooked but with zombies."
        startYear="2019"
        endYear="2019"
        githubLink="too-many-cooks"
      />
      <ProjectEntry
        delay={0.8}
        name="boids"
        description="flocking simulation in unity."
        startYear="2020"
        endYear="2020"
        githubLink="boids"
      />
    </Stack>
  );
}
