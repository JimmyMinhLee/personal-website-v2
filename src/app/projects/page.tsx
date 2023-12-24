"use client";

import { CareerSection, CareerYear } from "@/components/CareerEntries";
import {
  Flex,
  Text,
  Stack,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Animate } from "@/components/Animate";
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
      <Animate delay={0.2}>
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
      <Animate delay={0.3}>
        <Flex direction="row" pt={2}>
          <Heading
            fontWeight={50}
            lineHeight={"100%"}
            justifyContent="left"
            fontSize={{ base: "lg", sm: "xl", md: "xl" }}
            m={0}
          >
            jimmylee.xyz
          </Heading>
        </Flex>
      </Animate>
      <Animate delay={0.4}>
        <Text>A personal website for me, built using Next.js & Chakra UI.</Text>
      </Animate>
      <Animate delay={0.3}>
        <Flex direction="row" pt={2}>
          <Heading
            fontWeight={50}
            lineHeight={"100%"}
            justifyContent="left"
            fontSize={{ base: "lg", sm: "xl", md: "xl" }}
            m={0}
          >
            Nomad
          </Heading>
        </Flex>
      </Animate>
      <Animate delay={0.4}>
        <Text>A social media application for wanderlusts. </Text>
      </Animate>
      <Animate delay={0.2}>
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
      <Animate delay={0.3}>
        <Flex direction="row" pt={2}>
          <Heading
            fontWeight={50}
            lineHeight={"100%"}
            justifyContent="left"
            fontSize={{ base: "lg", sm: "xl", md: "xl" }}
            m={0}
          >
            Boids
          </Heading>
        </Flex>
      </Animate>
      <Animate delay={0.4}>
        <Text>Flocking simulator built with C# and Unity. </Text>
      </Animate>
      <Animate delay={0.3}>
        <Flex direction="row" pt={2}>
          <Heading
            fontWeight={50}
            lineHeight={"100%"}
            justifyContent="left"
            fontSize={{ base: "lg", sm: "xl", md: "xl" }}
            m={0}
          >
            Too Many Cooks
          </Heading>
        </Flex>
      </Animate>
      <Animate delay={0.4}>
        <Text>Overcooked, but with Zombies!</Text>
      </Animate>
    </Stack>
  );
}
