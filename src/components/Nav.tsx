import { Box, Flex, Image, Link, List, ListItem } from "@chakra-ui/react";

export function Nav() {
  return <Flex
    justifyContent={'space-between'}
    alignItems={'center'}
    minW={'100%'}
    minH={'60px'}
    p={'0 0.5em'}
  >
    <Box
      maxW={"fit-content"}
    >
      <Image
        alt={"100Pvts"}
        src={'/logo.png'}
        width={'100px'} />
    </Box>
    <Box
      w={'50%'}
    >
      <List
        display={'flex'}
        flexDir={'row-reverse'}
        flexWrap={'wrap-reverse'}
        justifyContent={'space-around'}
      >
        {[
          { name: 'Lineage 2', prefix: 'lineage' },
          { name: 'Ragnarok', prefix: 'ragnarok' },
          { name: "World of Warcraft", prefix: 'wow' },
        ].map((game) => {
          return (
            <ListItem
              key={game.prefix}
              display={'inline-block'}
            >
              <Link
                isExternal
                href={`https://${game.prefix}-100pvts.netlify.app`}
              >
                {game.name}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  </Flex>;
}
