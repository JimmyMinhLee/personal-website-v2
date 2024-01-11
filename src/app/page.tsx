"use client";

import Paragraph from "@/styled/paragraph";
import { Link } from "@chakra-ui/next-js";
import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Animate } from "@/components/Animate";

export default function Home() {
  return (
    <Stack justifyContent="space-around" alignItems={"flex-start"}>
      <Animate delay={0.2}>
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
      </Animate>
      <Animate delay={0.4}>
        <Paragraph>
          my name is jimmy. i&apos;m a software engineer based in southern
          california, currently working in the infrastructure organization at
          doordash. i love to make music, play volleyball, and spend time with
          my family and dog.
        </Paragraph>
      </Animate>

      <Animate delay={0.6}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          variant="section-title"
          justifyContent="left"
          m={0}
        >
          what&apos;s here?
        </Heading>
      </Animate>
      <Animate delay={0.8}>
        <Paragraph>
          {"here you can find my "}
          <Link href="/career">
            <Text
              as={"span"}
              bgGradient={useColorModeValue(
                "linear(to-l, #066465, #919800)",
                "linear(to-l, #E0d917, #7cc0d8)"
              )}
              bgClip="text"
            >
              resume & career
            </Text>
          </Link>
          {", "}
          <Link href="/projects">
            <Text
              as={"span"}
              bgGradient={useColorModeValue(
                "linear(to-l, #FF1D07, #771A00)",
                "linear(to-l, #E08C99, #7cc0d8)"
              )}
              bgClip="text"
            >
              personal projects
            </Text>
          </Link>
          {", and "}
          <Link href="/writing">
            <Text
              as={"span"}
              bgGradient={useColorModeValue(
                "linear(to-l, #9E0C23, #07694A)",
                "linear(to-l, #BF67C1, #E9BC4E)"
              )}
              bgClip="text"
            >
              writing
            </Text>
          </Link>
          {
            ". this website aims to keep track of all the things i've been working on, and store notes that i might need for the future."
          }
        </Paragraph>
      </Animate>
    </Stack>
  );
}
