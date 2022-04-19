import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems={'center'}>
      {showProfileData && (
        <Box marginRight={4} textAlign={'right'}>
          <Text>Peter Lourenço</Text>
          <Text color={'gray.300'} fontSize={'small'}>
            lourenco.pet@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size={'md'}
        name={'Peter Lourenço'}
        src={'https://github.com/petlou.png'}
      />
    </Flex>
  );
}
