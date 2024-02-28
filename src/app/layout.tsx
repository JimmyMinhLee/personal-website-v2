import { Container, Stack, Divider, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { Footer } from "@/components/layout/Footer";
import { Head } from "@/components/layout/Head";

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
              <NavigationBar />
              <Stack align={"center"} spacing={{ base: 8, md: 10 }}>
                <Head />
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
