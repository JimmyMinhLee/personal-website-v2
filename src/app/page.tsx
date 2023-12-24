"use client";

import Paragraph from "@/styled/paragraph";
import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Container, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack justifyContent="space-around" alignItems={"flex-start"}>
      <Heading
        fontWeight={100}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
        as="h3"
        variant="section-title"
        justifyContent="left"
        m={0}
      >
        who am i?
      </Heading>
      <Paragraph>
        my name is jimmy. i&apos;m a software engineer based in southern
        california, currently working in the infrastructure organization at
        doordash. i love to make music, play volleyball, and spend time with my
        family and dog.
      </Paragraph>

      <Heading
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
        variant="section-title"
        justifyContent="left"
        m={0}
      >
        what&apos;s here?
      </Heading>
      <Paragraph>
        {"here you can find my "}
        <Link href="/career">
          <Text
            as={"span"}
            bgImage={"linear(to-l, #e66465, #9198e5)"}
            bgClip="text"
          >
            resume & career
          </Text>
        </Link>
        {", "}
        <Link href="/projects">
          <Text
            as={"span"}
            bgGradient={"linear(to-l, #0FFFF0, #0063FF)"}
            bgClip="text"
          >
            personal projects
          </Text>
        </Link>
        {", and "}
        <Link href="/writing">
          <Text
            as={"span"}
            bgGradient={"linear(to-l, #0FFFF0, #0063FF)"}
            bgClip="text"
          >
            writing
          </Text>
        </Link>
        {
          ". this website aims to keep track of all the things i've been working on, and store notes that i might need for the future."
        }
      </Paragraph>
    </Stack>
  );
}
