import { Box, Flex, Heading, HStack, VStack } from "@chakra-ui/react"

export const Ads = (props: Record<string, unknown>) => {

  return (
    <Flex
      {...props}
      maxH='100vh'
      display={['none', 'none', 'none', 'flex-item']}
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
    </Flex >
  )
}

