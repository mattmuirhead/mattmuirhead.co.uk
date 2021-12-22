import { Flex } from '@chakra-ui/react'

const SectionWrapper = ({ children }) => (
  <Flex direction="column" width="100%" maxWidth="750px" px={4} pb={12} m="0 auto" overflow="hidden">
    {children}
  </Flex>
)

export default SectionWrapper
