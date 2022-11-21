import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const option = {
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
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-11-15T00:00:00.000Z",
      "2022-11-16T00:00:00.000Z",
      "2022-11-17T00:00:00.000Z",
      "2022-11-18T00:00:00.000Z",
      "2022-11-19T00:00:00.000Z",
      "2022-11-20T00:00:00.000Z",
      "2022-11-21T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 61, 18, 109] }];

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex
        width="100%"
        marginY="6"
        marginX="auto"
        paddingX="6"
        maxWidth={1480}
      >
        <SideBar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box
            padding="8"
            background="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Inscritos da semana
            </Text>
            <Chart options={option} series={series} type="area" height={160} />
          </Box>
          <Box
            padding="8"
            background="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Taxa de abertura
            </Text>
            <Chart options={option} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
