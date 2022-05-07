import type { NextPage } from 'next'
import Head from 'next/head'
import { Home } from '../components/Home'
import { config } from '../config'

const PrivateServerHome: NextPage = () => {
  return (
    <>
      <Head>
        <title> {config.GAME_NAME} | Top {config.TOP_QUANTITY} Private Servers </title>
      </Head>
      <Home />
    </>
  )
}

export default PrivateServerHome
