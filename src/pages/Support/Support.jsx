import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from 'react-icons/ai';
import InfoCard from '../Dashboard/components/InfoCard';
import { Stack } from '@chakra-ui/react';

const Support = () => {
  return (
    <DashboardLayout title="Support" >
      <Stack spacing="80px" >
      <SupportCard 
      leftComponent={<ContactCard/>} 
      icon={IoMdMail}
      title="Contact Us"
      text="Have a Quetion? Feel Free To Ask."
      />
      <SupportCard 
      leftComponent={<InfoCard
        tagText="Contact"  text="Learn more about out sevices" inverted
      />}
      icon={AiTwotoneMessage}
      title="Live Chat"
      text="Chat With us now."
      />
      </Stack>
    </DashboardLayout>
  )
}

export default Support
 