import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ tagText,imgURL,text,inverted}) => {
  return (
    <CustomCard bg={inverted?"purple.500":"white"}  bgImage={imgURL} bgSize="cover" bgRepeat="no-repeat">
      <Tag 
      bg={inverted?"white":"purple.500"} 
      color={inverted?"purple.500":"white"}>
        {tagText}
      </Tag>
      <Text fontSize="18px" mt="4" fontWeight="medium" >
       {text} 
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
