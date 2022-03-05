import dynamic from 'next/dynamic';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import Head from 'next/head';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

import { Sidebar } from '../components/Form/Sidebar';
import { Header } from '../components/Header';

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-03-18T00:00:00.000Z',
      '2022-03-19T00:00:00.000Z',
      '2022-03-20T00:00:00.000Z',
      '2022-03-21T00:00:00.000Z',
      '2022-03-22T00:00:00.000Z',
      '2022-03-23T00:00:00.000Z',
      '2022-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: 'inscritos', data: [31, 120, 10, 28, 61, 18, 119] }];

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | dash.Go</title>
      </Head>

      <Flex direction="column" height="100vh">
        <Header />

        <Flex
          width="100%"
          maxWidth={1480}
          marginY={6}
          marginX="auto"
          paddingX={6}
        >
          <Sidebar />

          <SimpleGrid
            flex={1}
            gap={4}
            minChildWidth="320px"
            alignItems="flex-start"
          >
            <Box
              padding={8}
              background="gray.800"
              borderRadius={8}
              paddingBottom={4}
            >
              <Text fontSize="lg" marginBottom={4}>
                Inscritos da semana
              </Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
            <Box
              padding={8}
              background="gray.800"
              borderRadius={8}
              paddingBottom={4}
            >
              <Text fontSize="lg" marginBottom={4}>
                Taxa de abertura
              </Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
