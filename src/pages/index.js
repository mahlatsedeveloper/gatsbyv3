import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Seo title="Home" />
      <Hero tagline="Your tagline" heading="Medium length display headline." description="Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page." button_text="Show me" button_description="It will take you to candy shop." read_more_text="Read more about it" />
    </Layout>
  )
}

export default IndexPage