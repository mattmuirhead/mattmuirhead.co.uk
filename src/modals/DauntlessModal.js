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

const DauntlessModal = () => {
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
          <ModalBody width="100%" maxWidth="750px" m="0 auto" overflow="hidden">
            <Image width="100%" maxWidth="150px" alignSelf="center" src="/employment/dauntless.jpg" alt="Dauntless" />
            <Heading as="h3" size="md" fontWeight="400" color="teal.500">Lead Web/UI Developer</Heading>
            <Text fontSize="sm" mb={4}>
              Epsom, Surrey | September 2015 - July 2019
            </Text>

            <Slider {...settings}>
              <Image src="/employment/dauntless/Amazon_animation.gif" alt="Amazon animation" />
              <Image src="/employment/dauntless/BLR_locations.png" alt="BLR Locations page" />
              <Image src="/employment/dauntless/EWT_360_images.gif" alt="EWT 360 glasses" />
              <Image src="/employment/dauntless/mf_animation.gif" alt="MF animation" />
              <Image src="/employment/dauntless/mf_homepage_full_cropped.png" alt="MF homepage" />
              <Image src="/employment/dauntless/SMR_results.png" alt="SMR results page" />
              <Image src="/employment/dauntless/USS_website_mockup.jpg" alt="USS mockups" />
            </Slider>

            <Text mt={8} fontSize="sm">
              <UnorderedList my={4}>
                <ListItem>Lead a team of developers to produce a broad range of digital applications and WordPress websites. • Development of multiple UI component kits in React</ListItem>
                <ListItem>Worked with and advised the design team on latest digital trends, and best practices</ListItem>
                <ListItem>Helped put together scope of works and proposals in order to help win work opportunities</ListItem>
                <ListItem>Met clients face-to-face for meetings and training purposes, including international clients • Carried out interviews to hire for our New York and Phoenix offices</ListItem>
              </UnorderedList>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DauntlessModal