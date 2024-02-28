"use client";

import { Stack, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { AnimateChildren } from "@/components/animation/AnimateChildren";

function Entry(title: string, href: string) {
  return (
    <Stack direction="row" alignItems="center">
      <Link href={href} alignItems="center">
        <Text variant="section-subtitle">{title}</Text>
      </Link>
    </Stack>
  );
}

function _Heading(title: string) {
  return (
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
      {title}
    </Heading>
  );
}
export default function Page() {
  return (
    <AnimateChildren delay={0.2}>
      <Stack>
        {_Heading("Post Graduate")}
        {Entry("[0] Software Engineer  @ DoorDash", "/career/doordash")}
        {_Heading("College")}
        {Entry("[fin] Graduated with a B.A. in Computer Science", "/career")}
        {Entry("[5] President @ UpSync Consulting ", "/career/cal")}
        {Entry("[4] Mentor @ Anova ", "/career/cal")}
        {Entry("[3] Project Leader @ Codeology ", "/career/cal")}
        {Entry("[2] SWE Intern @ Ridgeline ", "/career/ridgeline")}
        {Entry("[1] SWE Intern @ Playstation", "/career/playstation")}
        {Entry("[0] SWE Intern @ RED Digital Cinema", "/career/red")}
      </Stack>
    </AnimateChildren>
  );
}
