"use client";

import { Flex, Link, Heading, Stack, Tag, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { HiGlobe } from "react-icons/hi";
import { CareerSection, CareerYear } from "./CareerEntries";
export const ProjectEntry = ({
  name,
  description,
  startYear,
  endYear,
  githubLink,
  href,
}: {
  name: string;
  description: string;
  githubLink: string;
  startYear: string;
  endYear: string;
  delay: number;
  href: string | undefined;
}) => {
  return (
    <Stack direction="column">
      <Flex direction="row" pt={2}>
        <Stack direction="row">
          <CareerSection>
            <Text variant="section-subtitle">{name}</Text>
          </CareerSection>
        </Stack>
      </Flex>
    </Stack>
  );
};
