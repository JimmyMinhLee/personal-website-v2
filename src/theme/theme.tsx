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
      background: mode("#ebece9", "#202023")(props),
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
        fontWeight: 50,
        fontSize: { base: "sm", sm: "4xl", md: "6xl" },
        lineHeight: "110%",
        justifyContent: "left",
      },
      "section-title-without-underline": {
        fontWeight: 100,
        fontSize: { base: "3xl", sm: "4xl", md: "6xl" },
        lineHeight: "120%",
      },
    },
  },
  Text: {
    variants: {
      "section-subtitle": {
        marginBottom: 2,
        marginTop: 2,
        fontSize: { base: "lg", sm: "xl", md: "xl" },
        lineHeight: "100%",
        justifyContent: "left",
      },
    },
  },
};

const theme = extendTheme({ config, fonts, styles, components });
export default theme;
