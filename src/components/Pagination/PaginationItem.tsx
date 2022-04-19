import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  number,
  isCurrent = false,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    );
  }

  return (
    <Button
      size={'sm'}
      fontSize={'xs'}
      width={4}
      background={'gray.700'}
      _hover={{
        background: 'gray.600',
      }}
    >
      {number}
    </Button>
  );
}
