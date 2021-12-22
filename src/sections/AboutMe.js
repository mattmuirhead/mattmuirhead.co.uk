
import * as React from 'react'
import { Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import SectionWrapper from '../components/SectionWrapper'
import SectionTitle from '../components/SectionTitle'
import CallToAction from '../components/CallToAction'

const AboutMe = () => {
  const [isMobile] = useMediaQuery('(max-width: 750px)')

  return (
    <>
      <SectionWrapper>
        <SectionTitle>About me</SectionTitle>
        <Flex direction={isMobile ? 'column' : 'row'}>
          <Image maxWidth={!isMobile && "130px"} maxHeight={!isMobile && "130px"} borderRadius={4} src="/matt_muirhead.jpg" alt="Matt Muirhead" mr={!isMobile && 6} mb={4} />
          <Text mb={4}>
            Outside of work I like to keep active, I enjoy running, long walks and a round of golf whenever the weather permits. I also love to game, whether that’s exploring new worlds, jumping into my racing simulator or getting competitive online with my friends. Additionally I like exploring, finding hidden eating spots in London, and travelling further afield and learning about different cultures.
          </Text>
        </Flex>
      </SectionWrapper>

      <SectionWrapper>
        <CallToAction />
      </SectionWrapper>
    </>
  )
}

export default AboutMe
