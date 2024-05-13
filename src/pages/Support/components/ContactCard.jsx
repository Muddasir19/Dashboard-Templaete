import React from 'react'
import {
    Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactCard = () => {

  return (
    <div>
        <Card p="6" borderRadius="1rem">
        <Text fontWeight="medium" fontSize="sm">
          You will recieve respose within 4 hours.
        </Text>

        <HStack>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>SurName</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea type="email" />
        </FormControl>
        <Checkbox defaultChecked>Agree with <Box as="span" color="p.purple">terms and condition</Box>.</Checkbox>
        <Stack>
            <Button>Send a Message</Button>
            <Button colorScheme="gray">Book a Meeting</Button>
        </Stack>
      </Card>
      
    </div>
  )
}

export default ContactCard
