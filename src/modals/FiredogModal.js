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
import Slider from 'react-slick'

const FiredogModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    accessibility: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme='teal' color="teal.500" borderColor="teal.500" variant="ghost" mt={4}>
        View more
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalCloseButton />
          <ModalBody maxWidth="750px" m="0 auto">
            <Image width="100%" maxWidth="150px" alignSelf="center" src="/employment/firedog.jpg" alt="Firedog" />
            <Heading as="h3" size="md" fontWeight="400" color="teal.500">Web and UI Developer</Heading>
            <Text fontSize="sm" mb={4}>
              Old Street, London | September 2013 - August 2015
            </Text>

            <Slider {...settings}>
              <Image src="/employment/firedog/BHA_Racecourse.jpg" alt="BHA Racecourse page" />
              <Image src="/employment/firedog/BHA_News.jpg" alt="BHA News page" />
              <Image src="/employment/firedog/BHA_Navigation_v2.jpg" alt="BHA Navigation" />
              <Image src="/employment/firedog/BHA_Printouts.jpg" alt="BHA Printouts" />
            </Slider>

            <Text mt={8} fontSize="sm">
              <UnorderedList my={4}>
                <ListItem>Worked with a team of developers and designers to concept, produce and maintain custom WordPress themes, static web pages and email templates</ListItem>
                <ListItem>Production of iOS application using PhoneGap</ListItem>
                <ListItem>Optimization of page speed and SEO</ListItem>
                <ListItem>Training clients on how to use their website</ListItem>
                <ListItem>Designing interactive wireframes</ListItem>
              </UnorderedList>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FiredogModal