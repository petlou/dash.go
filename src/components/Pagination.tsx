import { Box, Button, Stack } from '@chakra-ui/react';

export function Pagination() {
  return (
    <Stack
      direction={'row'}
      spacing={6}
      marginTop={8}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction={'row'} spacing={2}>
        <Button
          size={'sm'}
          fontSize={'xs'}
          width={4}
          colorScheme={'yellow'}
          _disabled={{
            bgColor: 'yellow.500',
            cursor: 'default',
          }}
        >
          1
        </Button>
        <Button
          size={'sm'}
          fontSize={'xs'}
          width={4}
          background={'gray.700'}
          _hover={{
            background: 'gray.600',
          }}
        >
          2
        </Button>
        <Button
          size={'sm'}
          fontSize={'xs'}
          width={4}
          background={'gray.700'}
          _hover={{
            background: 'gray.600',
          }}
        >
          3
        </Button>
        <Button
          size={'sm'}
          fontSize={'xs'}
          width={4}
          background={'gray.700'}
          _hover={{
            background: 'gray.600',
          }}
        >
          4
        </Button>
        <Button
          size={'sm'}
          fontSize={'xs'}
          width={4}
          background={'gray.700'}
          _hover={{
            background: 'gray.600',
          }}
        >
          5
        </Button>
      </Stack>
    </Stack>
  );
}
