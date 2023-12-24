"use client";

// source: https://github.com/craftzdog/craftzdog-homepage/blob/master/components/navbar.js

import {
  Box,
  Container,
  useColorModeValue,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import ThemeToggleButton from "./ThemeToggleButton";

export const NavigationBar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdoprFilter: "blur(10px)" }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap={"wrap"}
        alignItems="center"
        justifyItems="space-between"
      >
        <Link href="/">
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              jimmy lee
            </Heading>
          </Flex>
        </Link>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="/career">career</Link>
          <Link href="/projects">projects</Link>
          <Link href="/writing">writing</Link>
        </Stack>

        <Box flex={1} alignItems="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};
