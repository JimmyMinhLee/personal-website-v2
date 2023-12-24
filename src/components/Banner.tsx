"use client";

import {
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Banner = () => {
  return (
    <Flex width="2xl" pt={28}>
      <Avatar
        borderColor={useColorModeValue("black", "white")}
        size="2xl"
        name="jimmyminhlee"
      />
      <Box p={4} pl={12}>
        <Heading
          as="h6"
          bgGradient={useColorModeValue(
            "linear(to-l, #000000, #0063d1)",
            "linear(to-l, #F88CA7, #FFFCA7)"
          )}
          bgClip="text"
        >
          jimmy minh lee
        </Heading>
        <Text fontSize="xl">software engineer, brother & dog dad</Text>
        <Text fontSize="sm">
          perfecting my craft, becoming a master of something
        </Text>
      </Box>
    </Flex>
  );
};
