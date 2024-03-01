"use client";

import { Link } from "@chakra-ui/next-js";
import { Heading, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { AnimateChildren } from "@/components/animation/AnimateChildren";

export default function Home() {
  return (
    <AnimateChildren delay={0.2}>
      <Stack justifyContent="space-around" alignItems={"flex-start"}>
        <Heading
          variant="section-title"
          pb={2}
        >
          Hey!
        </Heading>
        <AnimateChildren delay={0.4}>
          <Text >
            My name is Jimmy. Welcome to my website. 
          </Text>
        </AnimateChildren>

        <AnimateChildren delay={0.6}>
        <Text
          variant="section-subtitle"
          pb={2}
        >
          What&apos;s here?
        </Text>
        <Text>
          {"You can find my "}
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
            " all documented here. This website aims to keep track of all the things I've been working on, and store notes that I might need for the future."
          }
        </Text>
        </AnimateChildren>
      </Stack>
    </AnimateChildren>
  );
}
