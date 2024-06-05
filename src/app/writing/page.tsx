"use client";

import { Stack, Heading, Flex, Link, Text, Divider } from "@chakra-ui/react";

import { Section } from "@/components/styled/styled";
import { AnimateChildren } from "@/components/animation/AnimateChildren";

export default function Page() {
  return (
    <AnimateChildren delay={0.2}>
      <Stack>
        <Heading
          variant="section-subtitle"
          fontWeight={100}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight={"100%"}
          as="h3"
          justifyContent="left"
          m={0}
        >
          Under Construction
        </Heading>
        <div></div>
      </Stack>
    </AnimateChildren>
  );
}
