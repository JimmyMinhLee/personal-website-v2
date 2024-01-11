"use client";

import { Animate } from "@/components/Animate";
import {
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function DoorDash() {
  return (
    <Animate delay={0.4}>
      <Heading variant="section-title-without-underline"> DoorDash </Heading>
      <Text variant="section-subtitle">Overview</Text>
      <Text pb={4}>
        I started working at DoorDash right after graduating from UC Berkeley in
        summer of 2022. My initial role at the company was on an internal tools
        team that built applications for our non-engineering partners to use.
        Eventually, I landed on the test platform team, where my work primarily
        involved building infrastructure for code coverage ingestion & flaky
        test detection/quarantining.
      </Text>
      <Text variant="section-subtitle">Test Quarantining</Text>
      <Text pb={4}>
        I'm currently starting to work on developing an algorithm for test
        quarantining & flaky test detection.
      </Text>
      <Text variant="section-subtitle">Code Coverage</Text>
      <Text pb={4}>
        A majority of my work at DoorDash revolved around building tooling for
        engineers to easily monitor & track their unit test & system test
        coverage.
      </Text>
      <Text variant="section-subtitle">Internal Tools</Text>
      <Text pb={4}>
        My first work at DoorDash was to migrate some internal tools from our
        old Django monolith to React.
      </Text>
    </Animate>
  );
}
