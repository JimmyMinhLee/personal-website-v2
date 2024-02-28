"use client";

import { Stack, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Animate } from "@/components/Animate";

function CareerEntry(title: string, href: string) {
  return (
    <Stack direction="row" alignItems="center">
      <Link href={href} alignItems="center">
        <Text variant="section-subtitle">{title}</Text>
      </Link>
    </Stack>
  );
}

function CareerHeading(title: string) {
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
    <Animate delay={0.2}>
      <Stack>
        {CareerHeading("Post Graduate")}
        {CareerEntry("[0] Software Engineer  @ DoorDash", "/career/doordash")}
        {CareerHeading("College")}
        {CareerEntry(
          "[fin] Graduated with a B.A. in Computer Science",
          "/career"
        )}
        {CareerEntry("[5] President @ UpSync Consulting ", "/career/cal")}
        {CareerEntry("[4] Mentor @ Anova ", "/career/cal")}
        {CareerEntry("[3] Project Leader @ Codeology ", "/career/cal")}
        {CareerEntry("[2] SWE Intern @ Ridgeline ", "/career/ridgeline")}
        {CareerEntry("[1] SWE Intern @ Playstation", "/career/playstation")}
        {CareerEntry("[0] SWE Intern @ RED Digital Cinema", "/career/red")}
      </Stack>
    </Animate>
  );
}
