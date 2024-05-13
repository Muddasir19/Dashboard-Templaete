import { Button, Flex, Grid, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaRupeeSign } from "react-icons/fa6";

const Transaction = () => {
  const trans = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "Rs Deposit",
      amount: "100,000",
      timestamp: "2024-12-05 10:53 PM",
    },
    {
      id: "2",
      icon: FaRupeeSign,
      text: "asdasd",
      amount: "234234",
      timestamp: "asdasdasd",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "asdasd",
      amount: "1266333",
      timestamp: "asdasdasd",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb={6} >Recent Transcation</Text>
      <Stack>
        {trans.map((e) => (
          <Flex key={e.id} gap={4} w="full">
            <Grid
              placeItems="center"
              bg="black.5"
              boxSize={10}
              borderRadius="full"
            >
              <Icon as={e.icon} />
            </Grid>

            <Flex justify="space-between" w="full" >
              <Stack spacing={4}>
                <Text fontSize="16px" color="black.8" >{e.text}</Text>
                <Text fontSize="16px" color="black.4" >{e.timestamp}</Text>
              </Stack>
              <Text fontSize="16px" color="black.8" >{e.amount}</Text>

            </Flex>
          </Flex>
        ))}
      </Stack>
      <Button w="full" mt={6} colorScheme="gray" >View All</Button>
    </CustomCard>
  );
};

export default Transaction;
