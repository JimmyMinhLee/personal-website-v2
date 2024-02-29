import { Heading, ListItem, OrderedList, Text } from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Heading variant="section-title">{children}</Heading>,
    h2: ({ children }) => <Text variant="section-subtitle">{children}</Text>,
    p: ({ children }) => <Text>{children}</Text>,
    ol: ({ children }) => <OrderedList pb={4}>{children}</OrderedList>,
    li: ({ children }) => <ListItem> {children}</ListItem>,
  };
}
