"use client";

import {
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  useColorModeValue,
  VStack 
} from "@chakra-ui/react";

export const Head = () => {
  return (
    <>
      <Flex maxWidth="4xl" pt={28}>
        <Avatar
          borderColor={useColorModeValue("black", "white")}
          borderStyle="solid"
          showBorder={true}
          size="2xl"
          name="jimmyminhlee"
          src={"/jimmy.jpeg"}
          borderRadius="full"
        />
        <VStack p={4} pl={12} alignItems="left">
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
          <Text display={{ sm: "inline-flex" }} fontSize="xl">
            software engineer, brother & dog dad
          </Text>
          <Text display={{ base: "none", sm: "inline-flex" }} fontSize="sm">
            perfecting my craft, becoming a master of something
          </Text>
        </VStack>
      </Flex>
      <Box
        borderRadius="lg"
        p={6}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        °˖✧◝(⁰▿⁰)◜✧˖° welcome to my website!
      </Box>
    </>
  );
};
