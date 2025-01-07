"use client";

import { Box } from "@chakra-ui/react";
import Lenis from "lenis";
import { useEffect } from "react";

export default function PageContent({ children }: { children: any }) {
  useEffect(() => {
    const lenis = new Lenis();
    // @ts-ignore
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <Box
      maxW="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
}
