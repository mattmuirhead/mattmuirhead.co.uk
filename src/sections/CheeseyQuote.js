
import * as React from 'react'
import { Heading } from '@chakra-ui/react'
import SectionWrapper from '../components/SectionWrapper'

const CheeseyQuote = () => {
  return (
    <SectionWrapper>
      <Heading color="teal.500" fontWeight="400" fontStyle="italic" size="lg" textAlign="center" mb={6}>"This is a cheesy quote, may or may not keep this in."</Heading>
    </SectionWrapper>
  )
}

export default CheeseyQuote
