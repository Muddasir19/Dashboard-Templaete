
import { Stack,HStack,Text, Heading, Box } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { BsArrowDownUp } from 'react-icons/bs'
import { RxDashboard } from 'react-icons/rx'
import { Link, useLocation } from 'react-router-dom'

const Sidenav = () => {

  const location = useLocation();
  const isActiveLink = (link) =>{
    return location.pathname === link;
  }

    const navLinks = [
        {
            icon:RxDashboard,
            text:"Dashboard",
            link:"/",
        },
        {
            icon: BsArrowDownUp ,
            text:"Transcation",
            link:"/Transaction",
        },
    ]
    
  return (
    // display flex and flex direction column is already assigned in stack
    <Stack bg="white" justify="space-between" boxShadow={{
      base:'none', lg:"lg"
    }} W={{base:"full",lg:"16rem"}} h={{base:"98vh",lg:"100vh"}} 
    
    
    >
      <Box>
      <Heading pt="56px" fontSize="20px" textAlign="center">
        Side Menu
      </Heading>
      
      <Box mt="6" mx="3" >
      {
        navLinks.map((nav)=>(
            //display flex align item center 
            <Link to={nav.link}  key={nav.text} >
            <HStack  py="3" px="4" 
            borderRadius="10px"
            bg={isActiveLink(nav.link) ?"#F3F3F4":'transparent' }
            color={isActiveLink(nav.link) ?"#171717":"#797E82" }
             _hover={{
              bg:"#F3F3F4",
              color:"#171717"
             }}
          
            >
                <Icon as={nav.icon} />
                <Text fontWeight="medium" fontSize="14px" >{nav.text}</Text>

            </HStack>
            </Link>
        ))
      }
      </Box>

      </Box>
      
      

      <Box  mt="6" mx="3" mb="1px" >    
      <Link to="/Support">
      <HStack   py="3" px="4" 
            borderRadius="10px"
            bg={isActiveLink("/Support") ?"#F3F3F4":'transparent' }
            color={isActiveLink("/Support") ?"#171717":"#797E82" }
             _hover={{
              bg:"#F3F3F4",
              color:"#171717"
             }}
             
            >
                <Icon as={BiSupport} />
                <Text fontWeight="medium" fontSize="14px" >Support</Text>

            </HStack>
            </Link>


      </Box>




    </Stack>
  )
}

export default Sidenav
