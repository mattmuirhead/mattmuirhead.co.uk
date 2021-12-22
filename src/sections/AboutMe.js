
import * as React from 'react'
import { Text } from '@chakra-ui/react'
import SectionWrapper from '../components/SectionWrapper'
import SectionTitle from '../components/SectionTitle'

const AboutMe = () => {
  return (
    <SectionWrapper>
      <SectionTitle>About me</SectionTitle>
      <Text fontSize="lg">I’m a driven and enthusiastic Software Engineer specialising in React and JavaScript. I have a keen eye for design and pride myself in creating pixel perfect, responsive web applications. I believe in creating interfaces that not only functionally work but are also a joy for the user to experience. I have worked in multiple engineering teams, varying in size, and am comfortable in Scrum and Waterfall teams.</Text>
    </SectionWrapper>
  )
}

export default AboutMe
