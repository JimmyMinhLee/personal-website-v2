import { Container, Stack, Divider, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Banner } from "@/components/Banner";
import { NavigationBar } from "@/components/NavigationBar";

export const metadata: Metadata = {
  title: "jimmyminhlee",
  description: "a personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div>
        <title>Jimmy Lee - Homepage</title>
        <Container maxW="4xl">
          <Flex justifyContent="center">
            <Stack align={"center"} spacing={{ base: 8, md: 10 }}>
              <NavigationBar />
              <Banner />
              <Container size="md">
                <Divider />
              </Container>
              {children}
            </Stack>
          </Flex>
        </Container>
      </div>
    </Providers>
  );
}
