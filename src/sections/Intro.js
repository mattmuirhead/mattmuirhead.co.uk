
import * as React from 'react'
import { Flex, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react'
import CallToAction from '../components/CallToAction'

const Intro = () => {
  const [isMobile] = useMediaQuery('(max-width: 750px)')

  return (
    <Flex py="150px" width="100%" maxWidth="750px" px={4} m="0 auto">
      <Flex alignSelf="center">
        {!isMobile &&
          <Image src="/logo.png" alt="Matt Muirhead Logo" width="100%" alignSelf="flex-start" maxWidth="130px" mt={2} mr={6} />
        }
        <Flex direction="column" alignSelf="center">
          <Heading as="h1" size="4xl">Matt Muirhead</Heading>
          <Heading as="h2" size="xl" mb={1}>Software Engineer</Heading>
          <Text fontSize="2xl" color="teal.500" mb={8}>Specialising in pixel perfect user interfaces</Text>

          <CallToAction />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Intro
