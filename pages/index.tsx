import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Home: NextPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Nextjs - Typescript - Material - Starter</title>
      </Head>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Starter</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Home
