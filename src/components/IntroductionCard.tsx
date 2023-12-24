"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

export const IntroductionCard = () => {
  return (
    <Box
      borderRadius="lg"
      p={6}
      textAlign="center"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      css={{ backdropFilter: "blur(10px)" }}
    >
      °˖✧◝(⁰▿⁰)◜✧˖° welcome to my website!
    </Box>
  );
};
