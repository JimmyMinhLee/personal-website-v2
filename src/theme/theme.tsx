"use client";

import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Sets the original color mode value used by Chakra
const config = {
  useSystemColorMode: false,
};

const styles = {
  // Sets the background
  global: (props: Object) => ({
    "html, body": {
      background: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        fontWeight: 100,
        fontSize: { base: "3xl", sm: "4xl", md: "6xl" },
        lineHeight: "110%",
      },
      "section-title-without-underline": {
        marginBottom: 3,
        fontWeight: 100,
        fontSize: { base: "2xl", sm: "3xl", md: "4xl" },
        lineHeight: "110%",
      },
    },
  },
  Text: {
    variants: {
      "section-subtitle": {
        marginBottom: 2,
        marginTop: 3,
        fontWeight: "bold",
        fontSize: { base: "lg", sm: "xl", md: "2xl" },
        lineHeight: "100%",
        justifyContent: "left",
      },
    },
  },
};

const theme = extendTheme({ config, fonts, styles, components });
export default theme;
