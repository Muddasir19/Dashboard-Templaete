import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { CgAdd, CgRemove } from "react-icons/cg";

const PriceSection = () => {
  const timestamps = ["7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="24">Wallet Balance</Text>
          </HStack>

          <HStack spacing={4}>
            <HStack>
              <Text fontSize="24px" fontWeight="medium">
                0.9876623
              </Text>

              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="12px">20%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button leftIcon={<Icon as={CgAdd} />}>Buy</Button>
          <Button leftIcon={<Icon as={CgRemove} />}>Sell</Button>
        </HStack>
      </Flex>

      <Tabs variant="unstyled">
       <Flex justify="end">
       <TabList bg="black.5">
          <Tab _selected={{ color: "black", bg: "black.20" }}>5m</Tab>
          <Tab _selected={{ color: "black", bg: "black.20" }}>4H</Tab>
          <Tab _selected={{ color: "black", bg: "black.20" }}>1H</Tab>
          <Tab _selected={{ color: "black", bg: "black.20" }}>1W</Tab>
          <Tab _selected={{ color: "black", bg: "black.20" }}>1M</Tab>
        </TabList>
       </Flex>

      </Tabs>

      <Image w="100%" src="./tasks.PNG" mt="48px" />

      <HStack justify="space-between">
        {timestamps.map((e) => (
          <Text key={e} fontSize="16px" color="black.80">
            {e}
          </Text>
        ))}
      </HStack>
    </CustomCard>
  );
};

export default PriceSection;
