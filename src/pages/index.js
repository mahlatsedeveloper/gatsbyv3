import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Seo title="Home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage