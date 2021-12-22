import * as React from 'react'
import { 
  Button, 
  Image,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalCloseButton, 
  ModalBody, 
  useDisclosure
} from '@chakra-ui/react'

const ConcreteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} colorScheme='teal' color="teal.500" borderColor="teal.500" variant="ghost" mt={4}>
        View more
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalCloseButton />
          <ModalBody width="100%" maxWidth="750px" m="0 auto" overflow="hidden">
            <Image width="100%" maxWidth="150px" alignSelf="center" src="/employment/concrete.jpg" alt="Concrete" />
            <Heading as="h3" size="md" fontWeight="400" color="teal.500">Software Engineer</Heading>
            <Text fontSize="sm" mb={4}>
              Farringdon, London | July 2019 - Present
            </Text>

            <Text mt={4} fontSize="sm">
              Concrete is, at its core, a task management system for the retail industry. However it has grown to include compliance, messaging and file management elements which connect brand HQs to the store workers.
              <br /><br />
              I primarily work on the Front End application, however am also comfortable creating and modifying application endpoints.
              <UnorderedList my={4}>
                <ListItem>Tech lead on all engagement and resource components of the application</ListItem>
                <ListItem>Built a real-time messaging system using Firebase</ListItem>
                <ListItem>Built the phone application using React Native</ListItem>
                <ListItem>Mentored several junior and legacy staff members, retraining them to use React • Build, refactor and write unit tests for components</ListItem>
                <ListItem>Worked heavily with the design team to improve the reusability of our components and design patterns</ListItem>
              </UnorderedList>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConcreteModal