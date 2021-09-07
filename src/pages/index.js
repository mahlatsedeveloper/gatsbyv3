import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout'
import Greeting from '../components/greeting';

const IndexPage = ()=>{
  return (
    <Layout pageTitle="Home">
      <Greeting name="Mahlatse" />
      <StaticImage
        alt="home page image"
        src="../images/me.jpeg"
      />
    </Layout>
  );
}
export default IndexPage