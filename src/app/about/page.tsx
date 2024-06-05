"use client";

import { Stack, Heading, Text } from "@chakra-ui/react";
import { AnimateChildren } from "@/components/animation/AnimateChildren";
import Timeline from "@/components/about/Timeline";

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
      </Stack>
      <Text pt={6} pb={0} variant="section-subtitle">
        {" "}
        Timeline{" "}
      </Text>
      <Timeline />
    </AnimateChildren>
  );
}
