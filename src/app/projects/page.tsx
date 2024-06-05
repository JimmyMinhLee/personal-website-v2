"use client";

import { Stack, Heading } from "@chakra-ui/react";
import { AnimateChildren } from "../../components/animation/AnimateChildren";

export default function Page() {
  return (
    <AnimateChildren delay={0.2}>
      <Stack>
        <Heading variant="section-title" mb={0}>
          Under Construction
        </Heading>
      </Stack>
    </AnimateChildren>
  );
}
