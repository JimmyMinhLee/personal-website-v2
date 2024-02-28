"use client";

import { Stack, Heading, Flex, Link, Text, Divider } from "@chakra-ui/react";

import { CareerSection } from "@/components/CareerEntries";
import { Animate } from "@/components/Animate";

export default function Page() {
  return (
    <Animate delay={0.2}>
      <Stack>
        <Heading
          pt={4}
          variant="section-subtitle"
          fontWeight={100}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight={"100%"}
          as="h3"
          justifyContent="left"
          m={0}
        >
          RPG: Developer Logs
        </Heading>
        <Flex direction="row">
          <Link href="/writing/devlog-one">
            <CareerSection>
              <Text variant="section-subtitle"> [1] Creating The Game </Text>
            </CareerSection>
          </Link>
        </Flex>
        <div></div>
      </Stack>
    </Animate>
  );
}
