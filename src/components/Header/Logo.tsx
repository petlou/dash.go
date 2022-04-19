import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight={'bold'}
      letterSpacing={'tight'}
      width={64}
    >
      dash
      <Text
        as={'span'}
        // fontSize={'6xl'}
        // lineHeight={'normal'}
        color={'pink.500'}
      >
        .
      </Text>
      Go
    </Text>
  );
}
