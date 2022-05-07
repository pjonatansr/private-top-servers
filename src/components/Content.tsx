import { Box, Flex, Heading, Link, List, ListItem, OrderedList, UnorderedList, VStack } from "@chakra-ui/react";
import { config } from "../config";
import { Ads } from "./Ads";

export function Content() {
  return (<Box
    minW={'70vw'}
    position={'relative'}
    maxH='70vh'
    overflow={'scroll'}
  >
    <Flex
      justifyContent={'flex-start'}
      minW={'100%'}
    >
      <Box
        m={0}
        p={0}
        bgColor={'#fff'}
        flexGrow={1}
      >
        <Box
          pos={'sticky'}
          top={0}
        >
          {
            [...Array(10)].map((_, index) => {
              return (
                <List
                  key={index}
                  p={1.5}
                  bgColor={'#fff'}
                >
                  <ListItem
                  >
                    <Link>
                      {`Option ${index + 1}`}
                    </Link>
                  </ListItem>
                </List>
              );
            })
          }
        </Box>
      </Box>
      <Box
        border={'1px solid #ccc'}
        flexGrow={4}
      >
        {Array(config.TOP_QUANTITY).fill(0).map((_, index) => {
          return (
            <Box
              key={index}
              border={'1px solid #dedede'}
              bgColor={'#fff'}
              minH={'150px;'}
            >
              {index + 1}
            </Box>
          );
        })}
      </Box>
    </Flex>
  </Box >);
}
