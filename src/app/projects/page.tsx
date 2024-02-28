"use client";

import { Stack, Heading } from "@chakra-ui/react";
import { ProjectEntry } from "@/components/ProjectEntry";
import { Animate } from "@/components/Animate";
import { Projects } from "@/components/projects";
import { Project } from "@/components/projects/Project";

const ProjectComponents = () => {
  return Projects.map((it: Project) => {
    return <ProjectEntry {...it} delay={0} key={it.name} />;
  });
};

export default function Page() {
  return (
    <Animate delay={0.2}>
      <Stack>
        <Heading variant="section-title" mb={0}>
          My Projects
        </Heading>
        <ProjectComponents />
      </Stack>
    </Animate>
  );
}
