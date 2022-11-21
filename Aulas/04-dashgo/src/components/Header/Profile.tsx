import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box marginRight="4" textAlign="right">
        <Text>Maycon Batista</Text>
        <Text color="gray.300" fontSize="small">
          maycon.tiutrix@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Maycon Batista" src="" />
    </Flex>
  );
}
