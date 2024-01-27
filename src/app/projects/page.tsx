"use client";

import { Stack, Heading } from "@chakra-ui/react";
import { ProjectEntry } from "@/components/ProjectEntry";
import { Animate } from "@/components/Animate";
import { Projects } from "@/components/projects";
import { Project } from "@/components/projects/Project";

const OngoingProjects = () => {
  return Projects.filter((it: Project) => it.status === "ongoing").map(
    (it: Project) => {
      return <ProjectEntry {...it} delay={0} key={it.name} />;
    }
  );
};
const PreviousProjects = () => {
  return Projects.filter((it: Project) => it.status === "completed").map(
    (it: Project) => {
      return <ProjectEntry {...it} delay={0} key={it.name} />;
    }
  );
};
const FutureProjects = () => {
  return Projects.filter((it: Project) => it.status === "future").map(
    (it: Project) => {
      return <ProjectEntry {...it} delay={0} key={it.name} />;
    }
  );
};

export default function Page() {
  return (
    <Animate delay={0.2}>
      <Stack>
        <Heading
          variant="section-title"
          fontWeight={100}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          as="h3"
          justifyContent="left"
          m={0}
        >
          Projects
        </Heading>
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
          Ongoing
        </Heading>
        {OngoingProjects()}
        <Heading
          variant="section-subtitle"
          fontWeight={100}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight={"100%"}
          as="h3"
          justifyContent="left"
          m={0}
          pt={2}
        >
          Future
        </Heading>
        {FutureProjects()}
        <Heading
          variant="section-subtitle"
          fontWeight={100}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight={"100%"}
          as="h3"
          justifyContent="left"
          m={0}
          pt={2}
        >
          Previous
        </Heading>
        {PreviousProjects()}
      </Stack>
    </Animate>
  );
}
