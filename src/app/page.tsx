"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <h1> Hello world first </h1>
      <AnimatedSection delay={0.2}>
        <h1> Hello world </h1>
      </AnimatedSection>
    </>
  );
}
