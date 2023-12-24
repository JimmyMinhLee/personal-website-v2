import { Container, Stack, Divider, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Banner } from "@/components/Banner";
import { IntroductionCard } from "@/components/IntroductionCard";
import { NavigationBar } from "@/components/NavigationBar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body>
        <Providers>
          <title>Jimmy Lee - Homepage</title>
          <Container maxW="4xl">
            <Flex justifyContent="center">
              <Stack align={"center"} spacing={{ base: 8, md: 10 }}>
                <NavigationBar />
                <Banner />
                <IntroductionCard />
                <Divider />
                <Container size="2xl">{children}</Container>
              </Stack>
            </Flex>
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
