import { Box, Container, Heading, HStack, VStack, Image } from "@chakra-ui/react"
import { config } from "../config"
import { Ads } from "./Ads"

export const Home = () => {

  return (
    <Container
      h='100vh'
      w='100vw'
      display={'flex'}
      justifyContent={'center'}
    >
      <Box
        minW='100vw'
        minH='100vh'
        display={'flex'}
        flexWrap={'wrap'}
      >
        <Box
          minW='100vw'
          h='20vh'
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          textAlign={'center'}
          bgImage={`url(${config.LOGO})`}
          bgSize={'cover'}
          bgPosition={'center'}
        >
          <Heading
            w={'100%'}
            bgColor={'#fffa'}
            padding={'1%'}
            boxShadow={'0 0 10px #ffff'}
          >
            {config.GAME_NAME}: Top {`${config.TOP_QUANTITY}`} Private Servers
          </Heading>
        </Box>

        <HStack
          minW='100vw'
          h='80vh'
          bgColor={'#0001'}
        >
          <Ads
            h='100%'
            bgColor={'#fff'}
            w='15vw'
          ></Ads>
          <VStack
            minW='70vw'
            h='80vh'
            overflow='scroll'
          >
            <Ads
              minW={'100%'}
              minH='150px'
              bgColor={'#fff'}
            ></Ads>
            <Box
              overflow='scroll'
              minW='70vw'
            >
              {
                Array(config.TOP_QUANTITY).fill(0).map((_, index) => {
                  return (
                    <Box
                      key={index}
                      minW={'100%'}
                      border={'1px solid #ccc'}
                      bgColor={'#fff'}
                      minH={'150px;'}
                    >
                      {index + 1}
                    </Box>
                  )
                })
              }
            </Box>

          </VStack>
          <Ads
            h='100%'
            bgColor={'#fff'}
            w='15vw'
          ></Ads>
        </HStack>
      </Box>
    </Container >
  )
}

