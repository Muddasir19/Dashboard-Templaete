import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa6";
import TransactionTable from "./components/TransactionTable";
import { BiSearch } from "react-icons/bi";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 234,
    },
    {
      name: "Deposite",
      count: 100,
    },
    {
      name: "Withdraw",
      count: 50,
    },
    {
      name: "Trade",
      count: 84,
    },
  ];
  return (
    <DashboardLayout title="Transaction" >
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={FaDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="16px">
        <Tabs>
          <TabList  pt={4} display="flex" w="full" justifyContent="space-between" >
            <HStack>
            {tabs.map((tab) => (
              <Tab display="flex" gap="2" pb="4" key={tab.name}>
                {tab.name}
                <Tag colorScheme="gray" borderRadius="full">
                  {tab.count}
                </Tag>
              </Tab>
            ))}
            </HStack>

            <InputGroup maxW="200px"  pr="6">
              <InputLeftElement pointerEvents="none">
                <BiSearch color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search By ID" />
            </InputGroup>

          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
