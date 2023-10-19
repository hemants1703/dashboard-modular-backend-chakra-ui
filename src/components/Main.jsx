import {
  Grid,
  GridItem,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Tfoot,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import StatCard from "./StatCard";
import data from "../data.json";

function Main() {
  const pictureLink =
    "https://images.unsplash.com/photo-1682687982468-4584ff11f88a?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem
        rowSpan={1}
        colSpan={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HStack padding="5px">
          {data.headingStats.map((statData, index) => {
            return (
              <StatCard
                key={index}
                label={statData.label}
                number={statData.number}
                helptext={statData.helpText}
              />
            );
          })}
        </HStack>
      </GridItem>
      <GridItem
        colSpan={2}
        display={"flex"}
        justifyContent={"start"}
        alignItems={"center"}
        gap={"5px"}
      >
        {data.circularStats.map((circularStat, index) => {
          return (
            <Flex
              key={index}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"5px"}
            >
              <CircularProgress
                value={circularStat.value}
                size={"100px"}
                color={circularStat.value > 50 ? "subtleBlue" : "subtleRed"}
              >
                <CircularProgressLabel>
                  {circularStat.value}%
                </CircularProgressLabel>
              </CircularProgress>
              <Text>{circularStat.label}</Text>
            </Flex>
          );
        })}
      </GridItem>
      <GridItem
        colSpan={3}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Card maxW="sm">
          <CardBody>
            <Image
              src={pictureLink}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{"Random Text"}</Heading>
              <Text>
                {
                  "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                }
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem
        colSpan={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TableContainer width={"500px"}>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </GridItem>
    </Grid>
  );
}

export default Main;
