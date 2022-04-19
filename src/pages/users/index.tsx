import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Text,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>User | dash.Go</title>
      </Head>
      <Box>
        <Header />
        <Flex
          width={'100%'}
          maxWidth={1480}
          marginY={6}
          marginX={'auto'}
          paddingX={6}
        >
          <Sidebar />

          <Box flex={'1'} borderRadius={8} background={'gray.800'} padding={8}>
            <Flex
              marginBottom={8}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Heading size={'lg'} fontWeight={'normal'}>
                Usuários
              </Heading>
              <Link href="/users/create" passHref>
                <Button
                  as={'a'}
                  size={'sm'}
                  fontSize={'small'}
                  colorScheme={'yellow'}
                  leftIcon={<Icon as={RiAddLine} fontSize={20} />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            <Table colorScheme={'whiteAlpha'}>
              <Thead>
                <Tr>
                  <Th paddingX={[4, 4, 6]} color={'gray.300'} width={8}>
                    <Checkbox colorScheme={'yellow'} />
                  </Th>
                  <Th>Usuário</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                  <Th width={8}></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td paddingX={[4, 4, 6]}>
                    <Checkbox colorScheme={'yellow'} />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight={'bold'}>Peter Lourenço</Text>
                      <Text fontSize={'small'}>lourenco.pet@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>04 de abril, 2021</Td>}
                  <Td>
                    <Button
                      as={'a'}
                      size={'sm'}
                      fontSize={'small'}
                      colorScheme={'pink'}
                      leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                      iconSpacing={[0, 0, 0, 2]}
                    >
                      {isWideVersion && 'Editar'}
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>

            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
