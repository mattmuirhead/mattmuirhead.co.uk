
import * as React from 'react'
import { Flex, Image, Heading, Button, useMediaQuery } from '@chakra-ui/react'
import SectionWrapper from '../components/SectionWrapper'
import SectionTitle from '../components/SectionTitle'
import ConcreteModal from '../modals/ConcreteModal'
import DauntlessModal from '../modals/DauntlessModal'
import FiredogModal from '../modals/FiredogModal'

const EmploymentHistory = () => {
  const [isMobile] = useMediaQuery('(max-width: 750px)')

  return (
    <SectionWrapper>
      <SectionTitle>Employment History</SectionTitle>
    
      <Flex width="100%" direction={isMobile ? 'column' : 'row'}> 
        <Flex flex={1} direction="column" my={2} px={2}>
          <Image width="100%" maxWidth="150px" alignSelf="center" src="/employment/concrete.jpg" alt="Concrete" mr={4} mb={2} />

          <Flex direction="column" textAlign="center">
            <Heading as="h5" size="sm" fontWeight="400">Software Engineer</Heading>

            <ConcreteModal />
          </Flex>
        </Flex>

        <Flex flex={1} direction="column" my={2} px={2}>
          <Image width="100%" maxWidth="150px" alignSelf="center" src="/employment/dauntless.jpg" alt="Dauntless" mr={4} mb={2} />

          <Flex direction="column" textAlign="center">
            <Heading as="h5" size="sm" fontWeight="400">Lead Web/UI Developer</Heading>

            <DauntlessModal />
          </Flex>
        </Flex>

        <Flex flex={1} direction="column" my={2} px={2}>
          <Image width="100%" maxWidth="150px" alignSelf="center" src="/employment/firedog.jpg" alt="Firedog" mr={4} mb={2} />

          <Flex direction="column" textAlign="center">
            <Heading as="h5" size="sm" fontWeight="400">Web and UI Developer</Heading>

            <FiredogModal />
          </Flex>
        </Flex>
      </Flex>
    </SectionWrapper>
  )
}

export default EmploymentHistory
