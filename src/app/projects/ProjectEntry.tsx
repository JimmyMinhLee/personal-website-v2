import { Animate } from "@/components/Animate";
import { Flex, Link, Heading, Stack, Tag, Text, Badge } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
export const ProjectEntry = ({
  name,
  description,
  startYear,
  endYear,
  githubLink,
  delay,
}: {
  name: string;
  description: string;
  githubLink: string;
  startYear: string;
  endYear: string;
  delay: number;
}) => {
  return (
    <Stack direction="column">
      <Animate delay={delay}>
        <Flex direction="row" pt={2}>
          <Stack direction="row">
            <Heading
              fontWeight={"bold"}
              lineHeight={"100%"}
              justifyContent="left"
              fontSize={{ base: "lg", sm: "xl", md: "xl" }}
              m={0}
            >
              {name}
            </Heading>
            <Tag size="sm">
              {startYear} - {endYear}{" "}
            </Tag>
            <Link
              isExternal
              href={`https://www.github.com/JimmyMinhLee/${githubLink}`}
            >
              <FaGithub />
            </Link>
          </Stack>
        </Flex>
      </Animate>
      <Animate delay={delay + 0.1}>
        <Text>{description}</Text>
      </Animate>
    </Stack>
  );
};
