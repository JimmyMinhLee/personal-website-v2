import { Animate } from "@/components/Animate";
import { Flex, Heading, Text } from "@chakra-ui/react";
export const ProjectEntry = ({
  name,
  description,
  delay,
}: {
  name: string;
  description: string;
  delay: number;
}) => {
  return (
    <>
      <Animate delay={delay}>
        <Flex direction="row" pt={2}>
          <Heading
            fontWeight={"bold"}
            lineHeight={"100%"}
            justifyContent="left"
            fontSize={{ base: "lg", sm: "xl", md: "xl" }}
            m={0}
          >
            {name}
          </Heading>
        </Flex>
      </Animate>
      <Animate delay={delay + 0.1}>
        <Text>{description}</Text>
      </Animate>
    </>
  );
};
