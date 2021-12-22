import { Heading } from '@chakra-ui/react'

const SectionTitle = ({ children }) => (
  <Heading as="h3" size="lg" fontWeight="400" color="teal.500" mb={4}>
    {children}
  </Heading>
)

export default SectionTitle
