import { Box } from "@chakra-ui/react"
import { config } from "../config"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Main } from "./Main"

export const Home = () => {
  return (
    <Box
      overflow={'hidden'}
    >
      <Header
        gameName={config.GAME_NAME}
        topQuantity={config.TOP_QUANTITY}
        banner={config.BANNER}
      />
      <Nav />
      <Main />
    </Box >
  )
}