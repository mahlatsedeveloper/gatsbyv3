import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Seo title="Home" />
      <title>Home</title>
      <h1>This is the home page</h1>
    </Layout>
  )
}

export default IndexPage