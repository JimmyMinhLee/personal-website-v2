"use client";

import { theme } from "@/chakra/theme";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  AspectRatio,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      w="8xl"
    >
      <Hero />
      {/* <AboutMe /> */}
    </Box>
  );
};

const Hero = () => {
  return (
    <Box h="100vh">
      <Heading zIndex={4} mt={10}>
        Jimmy Lee
      </Heading>
      <Box display="flex">
        <AspectRatio ratio={16 / 9} w="4xl" p={8}>
          <Image src="/bench.jpg" filter="grayscale(40%)" pr={8} />
        </AspectRatio>
        <Stack>
          <Heading variant="subheading">About Me</Heading>
          <Text>
            Vietnamese Software Engineer from Orange County, California.
          </Text>
          <Text>
            Currently SWE2 @ DoorDash, Co-Founder at Eos Design Studio.
          </Text>
          <Text>I will finish this website soon.</Text>
        </Stack>
      </Box>
    </Box>
  );
};

const AboutMe = () => {
  return (
    <Box bgColor={theme.colors.primary} position="relative" h="100vh" w="100%">
      <Text> Hello </Text>
    </Box>
  );
};

export default Page;
