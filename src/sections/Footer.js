import * as React from 'react'
import { Flex, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex justifyContent="center" pt="40px" pb="70px">
      <Image src="/logo.png" alt="Matt Muirhead Logo" width="100%" maxWidth="70px" opacity="0.1" />
    </Flex>
  )
}

export default Footer