import { Flex, Button, Stack } from '@chakra-ui/react';
import Head from 'next/head';

import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>SignIn | dash.Go</title>
      </Head>
      <Flex
        width={'100vw'}
        height={'100vh'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flex
          as={'form'}
          width={'100%'}
          maxWidth={400}
          background={'gray.800'}
          padding={8}
          borderRadius={8}
          flexDirection={'column'}
        >
          <Stack spacing={4}>
            <Input name={'email'} label={'E-mail'} type={'email'} />
            <Input name={'password'} label={'Password'} type={'password'} />
          </Stack>

          <Button
            type={'submit'}
            marginTop={6}
            colorScheme={'yellow'}
            size={'lg'}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
