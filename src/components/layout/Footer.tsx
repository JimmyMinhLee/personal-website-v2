"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Stack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { AnimateChildren } from "../animation/AnimateChildren";

export const Footer = () => {
  return (
    <AnimateChildren delay={1}>
      <Box width={"100%"} p={12}>
        <Stack flexDirection="row" justifyContent="center">
          <Link href="https://www.github.com/JimmyMinhLee">
            <FaGithub color="#779ECB" />
          </Link>
          <Link href="mailto:jimmyminhlee@gmail.com">
            <HiMailOpen color="#779ECB" />
          </Link>
          <Link href="https://www.linkedin.com/in/JimmyMinhLee">
            <FaLinkedin color="#779ECB" />
          </Link>
        </Stack>
      </Box>
    </AnimateChildren>
  );
};
