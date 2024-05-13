import { Button, Container, Flex, Heading, Menu, MenuButton, MenuList, MenuItem, HStack, Box, Icon } from "@chakra-ui/react";
import React from "react";
import { FaBars, FaUserTie } from "react-icons/fa6";

const TopNav = ({title,onOpen}) => {
  return (
    <Box px="4" bg="white">
        <HStack justify="space-between"  maxW="70rem"  h="16" px="1" mx="auto"  >
        <Icon as={FaBars} onClick={onOpen} 
        display={{
          base:"block",
          lg:"none"
        }}
        />
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
        <Menu>
          <MenuButton as={Button} >
            <Icon as={FaUserTie} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
            
          </MenuList>
        </Menu>
      
    </HStack>
    </Box>
  );
};

export default TopNav;
