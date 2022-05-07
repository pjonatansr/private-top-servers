import { Box, Container, Heading, HStack, VStack } from "@chakra-ui/react"

export const Ads = (props: Record<string, unknown>) => {

  return (
    <Container
      {...props}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      textAlign={'center'}
    >
      <HStack
      >
        <Box

        >
          <Heading>
            Ads
          </Heading>
        </Box>
      </HStack>
    </Container >
  )
}

