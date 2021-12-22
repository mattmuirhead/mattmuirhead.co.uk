import React, { useRef } from "react"
import { Flex, SlideFade} from "@chakra-ui/react"
import { useIsVisible } from "react-is-visible"

const SectionWrapper = ({ children }) => {
  const wrapperRef = useRef()
  const isVisible = useIsVisible(wrapperRef)

  return (
    <SlideFade in={isVisible} offsetY="100px">
      <Flex ref={wrapperRef} direction="column" width="100%" maxWidth="750px" px={4} pb={12} m="0 auto" overflow="hidden">
        {children}
      </Flex>
    </SlideFade>
  )
}

export default SectionWrapper
