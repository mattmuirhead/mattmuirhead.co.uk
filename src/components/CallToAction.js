
import * as React from 'react'
import { Button, Link, Stack, useMediaQuery } from '@chakra-ui/react'

const CallToAction = () => {
  const [isMobile] = useMediaQuery('(max-width: 750px)')

  return (
    <Stack direction={isMobile ? "column" : "row"} spacing={4} align="left">
      <Link width={isMobile && "100%"} href="/matt_muirhead_CV_2021.pdf" isExternal style={{ textDecoration: 'none' }}>
        <Button width={isMobile && "100%"} colorScheme='teal' bg="teal.500" variant='solid'>
          Download my CV
        </Button>
      </Link>

      <Link width={isMobile && "100%"} href="mailto:matt.rob.muirhead@googlemail.com" isExternal style={{ textDecoration: 'none' }}>
        <Button width={isMobile && "100%"} colorScheme='teal' color="teal.500" borderColor="teal.500" variant='outline'>
          Contact me
        </Button>
      </Link>
    </Stack>
  )
}

export default CallToAction