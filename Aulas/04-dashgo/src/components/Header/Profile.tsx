import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Maycon Batista</Text>
          <Text color="gray.300" fontSize="small">
            maycon.tiutrix@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Maycon Batista"
        src="https://github.com/MayconTrix.png"
      />
    </Flex>
  );
}
