import { Box, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box width={"100%"} p={8}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Text> First Item </Text>
        <Text> Second Item </Text>
      </Stack>
    </Box>
  );
}
