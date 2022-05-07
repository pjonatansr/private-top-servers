import { Flex, HStack } from "@chakra-ui/react";
import { Ads } from "./Ads";
import { Content } from "./Content";

export function Main() {
  return <Flex
  >
    <Ads
      w='15vw'
      bgColor={'#dff'} />
    <HStack
      flexDir={'column'}
    >
      <Ads
        pos={'sticky'}
        top={'0'}
        minW={'100%'}
        minH='20vh'
        bgColor={'#faf'} />
      <Content />
    </HStack>
    <Ads
      w='15vw'
      bgColor={'#ffd'} />
  </Flex>;
}
