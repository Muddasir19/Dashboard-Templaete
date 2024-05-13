import {
    Box,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";


const SupportCard = ({leftComponent,icon,title,text}) => {
  return (
    <Flex gap="4" >
      <Stack w="350px" >
        <Icon as={icon} boxSize="24px" color="p.purple" />
        <Text fontWeight="medium" fontSize="32px">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>

      <Box maxW="550px" w="full">
      {leftComponent}
      </Box>


      
    </Flex>
  );
};

export default SupportCard;
