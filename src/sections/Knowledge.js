
import * as React from 'react'
import { Image, Box, Divider, Heading, useMediaQuery } from '@chakra-ui/react'
import SectionWrapper from '../components/SectionWrapper'
import SectionTitle from '../components/SectionTitle'
import Slider from 'react-slick'

const Knowledge = () => {
  const [isMobile] = useMediaQuery('(max-width: 750px)')
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: 2,
  }

  return (
    <SectionWrapper>
      <SectionTitle>Knowledge</SectionTitle>

      <Heading as="h6" size="md" mb={4} fontWeight="400">My Tech Stack</Heading>
      <Slider {...settings}>
        <Box px={4}><Image src="/knowledge/react.jpg" alt="React" /></Box>
        <Box px={4}><Image src="/knowledge/reactnative.jpg" alt="React Native" /></Box>
        <Box px={4}><Image src="/knowledge/redux.jpg" alt="Redux" /></Box>
        <Box px={4}><Image src="/knowledge/jest.jpg" alt="Jest" /></Box>
        <Box px={4}><Image src="/knowledge/js.jpg" alt="Javascript" /></Box>
        <Box px={4}><Image src="/knowledge/html.jpg" alt="HTML" /></Box>
        <Box px={4}><Image src="/knowledge/css.jpg" alt="CSS" /></Box>
        <Box px={4}><Image src="/knowledge/node.jpg" alt="Node" /></Box>
        <Box px={4}><Image src="/knowledge/mongo.jpg" alt="Mongo" /></Box>
      </Slider>

      <Divider my={6} />

      <Heading as="h6" size="md" mb={4} fontWeight="400">My Toolkit</Heading>
      <Slider {...settings}>
        <Box px={4}><Image src="/knowledge/vscode.jpg" alt="VS Code" /></Box>
        <Box px={4}><Image src="/knowledge/insomnia.jpg" alt="Insomnia" /></Box>
        <Box px={4}><Image src="/knowledge/robo3t.jpg" alt="Robo 3T" /></Box>
        <Box px={4}><Image src="/knowledge/sourcetree.jpg" alt="Sourcetree" /></Box>
        <Box px={4}><Image src="/knowledge/figma.jpg" alt="Figma" /></Box>
        <Box px={4}><Image src="/knowledge/slack.jpg" alt="Slack" /></Box>
      </Slider>

      <Divider my={4} />

      <Heading as="h6" size="md" mb={4} fontWeight="400">Other</Heading>
      <Slider {...settings}>
        <Box px={4}><Image src="/knowledge/firebase.jpg" alt="Firebase" /></Box>
        <Box px={4}><Image src="/knowledge/gtm.jpg" alt="Google Tag Manager" /></Box>
        <Box px={4}><Image src="/knowledge/wordpress.jpg" alt="Wordpress" /></Box>
        <Box px={4}><Image src="/knowledge/craft.jpg" alt="Craft CMS" /></Box>
      </Slider>
    </SectionWrapper>
  )
}

export default Knowledge
