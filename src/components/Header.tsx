import { Text, Box, Heading } from "@chakra-ui/react"

interface Props {
  gameName: string;
  topQuantity: number;
  banner: string;
}

export const Header = ({ gameName, topQuantity, banner }: Props) => {
  return (
    <Box
      position={'relative'}
      top={'0'}
      left={'0'}
      width={'100%'}
      textAlign={'center'}
      bgImage={`url(${banner})`}
      bgSize={'cover'}
      bgPosition={'center'}
    >
      <Box
        p={'1rem'}
        bgColor={'#fffa'}
      >

        <Heading
          fontSize={'2rem'}
          fontWeight={'bold'}
        >
          <Text>
            {gameName}

          </Text>
          <Text>
            Top {topQuantity} Private Servers
          </Text>
        </Heading>
        <Text
          fontSize={'1rem'}
        >
          Rating available since {new Date().toLocaleDateString('en-US')}
        </Text>

      </Box>
    </Box>
  )
}