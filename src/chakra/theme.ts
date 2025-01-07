/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: Object) => ({
    "html, body": {
      background: mode(colors.primary, colors.primary)(props),
    },
  }),
};

const fonts = {
  heading: "'Fustat', sans-serif",
  name: "'Style Script', sans-serif",
  subheading: "'Contrail One', sans-serif",
  body: "'Fustat', sans-serif",
};

const fontSizes = {
  huge: "1000000px",
};

const colors = {
  primary: "#171616",
  primaryAccent: "#DAC444",
  secondaryAccent: "#2C7848",
  heading: "#E7E4DD",
  text: "#E7E4DD",
};

const components = {
  Heading: {
    sizes: {
      responsive: {
        fontSize: ["7xl", "8xl", "9xl", "11xl"],
      },
      name: {
        fontSize: ["7xl", "8xl", "9xl", "80px"],
      },
    },
    baseStyle: {
      textColor: colors.heading,
      fontSize: ["4xl", "5xl", "7xl", "8xl"],
      fontFamily: fonts.heading,
    },
    variants: {
      name: {
        textColor: colors.heading,
        textTransform: "none",
      },
      subheading: {
        textColor: colors.heading,
        fontSize: ["xl", "2xl", "3xl", "4xl"],
        textTransform: "uppercase",
        fontWeight: "regular",
        fontFamily: fonts.heading,
      },
      subsubheading: {
        textColor: colors.heading,
        fontSize: ["lg", "lg", "xl", "2xl"],
        textTransform: "uppercase",
        fontWeight: "regular",
        fontFamily: fonts.heading,
      },
      subsubsubheading: {
        textColor: colors.heading,
        fontSize: ["md", "md", "lg", "xl"],
        textTransform: "none",
        fontWeight: "regular",
        fontFamily: fonts.heading,
      },
    },
  },
  Text: {
    sizes: {
      responsive: {
        fontSize: ["xl", "2xl", "3xl", "4xl"],
        lineHeight: "none",
      },
    },
    baseStyle: {
      textColor: colors.text,
      fontFamily: fonts.body,
    },
  },
};

export const theme = extendTheme({
  fonts,
  styles,
  components,
  colors,
  fontSizes,
});
