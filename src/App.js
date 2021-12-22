
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Intro from './sections/Intro'
import Knowledge from './sections/Knowledge'
import EmploymentHistory from './sections/EmploymentHistory'
import AboutMe from './sections/AboutMe'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = () => {
  return (
    <ChakraProvider>
      <Intro />
      <Knowledge />
      <EmploymentHistory />
      <AboutMe />
    </ChakraProvider>
  )
}

export default App
