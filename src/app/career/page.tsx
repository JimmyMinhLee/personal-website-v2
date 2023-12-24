"use client";

import { CareerSection, CareerYear } from "@/components/CareerEntries";
import {
  Flex,
  Stack,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Animate } from "@/components/Animate";
export default function Page() {
  return (
    <Stack>
      <Animate delay={0.2}>
        <Heading
          variant="section-title"
          fontWeight={100}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          as="h3"
          justifyContent="left"
          m={0}
        >
          my career
        </Heading>
      </Animate>
      <Animate delay={0.3}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              Software Engineer @ DoorDash (2022 → Current)
            </CareerYear>
          </CareerSection>
        </Flex>
      </Animate>
      <Animate delay={0.4}>
        <UnorderedList>
          <ListItem>
            SWE on the Test Platform team, under Developer Platform.
          </ListItem>
          <ListItem>
            Responsible for most things related to code coverage @ DoorDash,
            built a dashboard for surfacing metrics, CI integrations for
            uploading to our vendor, and working alongside our vendor on
            scalability & reliability.
          </ListItem>
          <ListItem>
            Built alerting & detection mechanisms for context propogation leaks,
            analyzed it, and working to stop them from occurring.
          </ListItem>
          <ListItem>
            Lead on internal service for fetching & aggregating data across all
            levels of the testing pyramid.
          </ListItem>
        </UnorderedList>
      </Animate>
      <Animate delay={0.5}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>Graduated from UC Berkeley (Spring 2022)</CareerYear>
          </CareerSection>
        </Flex>
        <UnorderedList>
          <ListItem>
            B.A. in Computer Science with minor in Data Science, GPA: 3.5
          </ListItem>
        </UnorderedList>
      </Animate>
      <Animate delay={0.6}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>President @ Upsync Berkeley (2021 → 2022)</CareerYear>
          </CareerSection>
        </Flex>
        <UnorderedList>
          <ListItem>
            President of 50+ undergraduate consultants, managed 12 consulting
            projects ranging from small startups to F500 across both semesters.
          </ListItem>
          <ListItem>
            Raised income of club from $1,000 in &apos;18-&apos;20 to over
            $10,000 a semester.
          </ListItem>
          <ListItem>
            Retention rate increased from 35% to 82%, member satisfaction from
            22% to 78%.
          </ListItem>
        </UnorderedList>
      </Animate>
      <Animate delay={0.7}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              Software Engineering Intern @ Ridgeline (Summer 2021)
            </CareerYear>
          </CareerSection>
        </Flex>
        <UnorderedList>
          <ListItem>
            Built keyboard shortcuts in the Ridgeline application.
          </ListItem>
        </UnorderedList>
      </Animate>
      <Animate delay={0.8}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              Tutor @ CS 170 (Advanced Algorithms) (Fall 2021)
            </CareerYear>
          </CareerSection>
        </Flex>
        <UnorderedList>
          <ListItem>
            Ran office hours, helped in discussions, showed students how to get
            the intuition behind algorithms.
          </ListItem>
        </UnorderedList>
      </Animate>
      <Animate delay={0.9}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              Software Engineering Intern @ Playstation (Summer 2020)
            </CareerYear>
          </CareerSection>
        </Flex>
        <UnorderedList>
          <ListItem>
            Built a schema translation pipeline used in P.S. Now.
          </ListItem>
        </UnorderedList>
      </Animate>
      <Animate delay={1}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              Software Engineering Intern @ RED Digital Cinema (Summer 2019)
            </CareerYear>
          </CareerSection>
        </Flex>
        <UnorderedList>
          <ListItem>
            Built an E2E hardware testing application for launch of the RED
            Komodo.
          </ListItem>
        </UnorderedList>
      </Animate>
      <Animate delay={1.1}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              Project Lead @ Berkeley Codeology (2019 → 2022)
            </CareerYear>
          </CareerSection>
        </Flex>
        <UnorderedList>
          <ListItem>
            Taught students how to build video games over the course of the
            semester for 4 semesters.
          </ListItem>
        </UnorderedList>
      </Animate>
      <Animate delay={1.2}>
        <Flex direction="row">
          <CareerSection>
            <CareerYear>
              Student Mentor @ Berkeley Anova (2019 → 2022)
            </CareerYear>
          </CareerSection>
        </Flex>
        <UnorderedList>
          <ListItem>
            Taught computer science to underresourced schools in the Oakland
            area.
          </ListItem>
        </UnorderedList>
      </Animate>
    </Stack>
  );
}
