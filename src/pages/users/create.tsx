import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { Input } from '../../components/Form/Input';

import { Sidebar } from '../../components/Form/Sidebar';
import { Header } from '../../components/Header';

export default function UserCreate() {
  return (
    <>
      <Head>
        <title>Create User | dash.Go</title>
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
            <Heading size={'lg'} fontWeight={'normal'}>
              Criar usuário
            </Heading>
            <Divider marginY={6} borderColor={'gray.700'} />

            <VStack spacing={8}>
              <SimpleGrid minChildWidth={'240px'} spacing={8} width={'100%'}>
                <Input name="name" type="name" label="Nome completo" />
                <Input name="email" type="email" label="E-mail" />
              </SimpleGrid>

              <SimpleGrid minChildWidth={'240px'} spacing={8} width={'100%'}>
                <Input name="password" type="password" label="Senha" />
                <Input
                  name="password_confirmation"
                  type="password"
                  label="Confirmação da senha"
                />
              </SimpleGrid>
            </VStack>

            <Flex marginTop={8} justifyContent={'flex-end'}>
              <HStack spacing={4}>
                <Button colorScheme={'whiteAlpha'}>Cancelar</Button>
                <Button colorScheme={'yellow'}>Salvar</Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
