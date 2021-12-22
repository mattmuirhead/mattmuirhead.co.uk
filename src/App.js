
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Intro from './sections/Intro'
import AboutMe from './sections/AboutMe'
import Knowledge from './sections/Knowledge'
import EmploymentHistory from './sections/EmploymentHistory'
import Interests from './sections/Interests'
import Footer from './sections/Footer'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'intersection-observer'

const App = () => {
  return (
    <ChakraProvider>
      <Intro />
      <AboutMe />
      <Knowledge />
      <EmploymentHistory />
      <Interests />
      <Footer />
    </ChakraProvider>
  )
}

export default App
