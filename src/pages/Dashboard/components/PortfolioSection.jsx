import { Button, HStack, Heading, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="24px" mt="3"  justify="space-between"
    flexDir={{base:"column",xl:"row"}}
    
    >
     
     <HStack spacing={{base:4,md:16}} flexDir={{base:"column",md:"row"}} >
     <Stack>
        <HStack color="black.80">
          <Text fontSize="24">Total Portfolio Value</Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
        <Text fontStyle="h2" fontWeight="medium" >Rs 100,450.78</Text>
      </Stack>

      <Stack>
        <HStack color="black.80">
          <Text fontSize="24">Wallet Balance</Text>
        </HStack>

        <HStack spacing={4}>
          <HStack>
            <Text fontStyle="h2"fontWeight="medium">0.9876623</Text>
            <Tag colorScheme="gray">BTC</Tag>
          </HStack>
          <HStack>
            <Text fontStyle="h2"fontWeight="medium">234672.78</Text>
            <Tag colorScheme="gray">Pkr</Tag>
          </HStack>
        </HStack>
      </Stack>
     </HStack>


      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown}/>} >Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp}/>}>WithDraw</Button>
      </HStack>


    </HStack>
  );
};

export default PortfolioSection;
