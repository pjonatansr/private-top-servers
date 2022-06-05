import { Box, Flex, Heading, Link, List, ListItem, OrderedList, UnorderedList, VStack } from "@chakra-ui/react";
import { config } from "../config";
import { Ads } from "./Ads";

export function Content() {
  return (<Box
    minW={'70vw'}
    position={'relative'}
    maxH='70vh'
    overflowY={'scroll'}
  >
    <Flex
      minW={'100%'}
    >
      <Box
        m={0}
        p={0}
        flexGrow={0}
      >
        <Box
          pos={'sticky'}
          top={0}
        >
          <List
            overflow={'hidden'}
            display={'flex'}
            flexFlow={'row wrap'}
          >
            {
              [...Array(10)].map((_, index) => {
                return (
                  <ListItem
                    key={index}
                    display={'flex-item'}
                    fontWeight={'bold'}
                    borderBottom={'1px dotted #0000009f'}
                    flex={'1 2 100%'}
                  >
                    <Link>
                      {`Option ${index + 1}`}
                    </Link>
                  </ListItem>
                )
              })
            }
          </List>
        </Box>
      </Box>
      <Box
        border={'1px solid #ccc'}
        flex={'1 0.5 100%'}
      >
        {Array(config.TOP_QUANTITY).fill(0).map((_, index) => {
          return (
            <Box
              key={index}
              border={'0.11em solid #eee'}
              bgColor={'#fff'}
              minH={'150px;'}
            >
              {index + 1}
            </Box>
          );
        })}
      </Box>
    </Flex >
  </Box >);
}
