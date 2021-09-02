import * as React from 'react'

import Layout from '../components/layout'
import Greeting from '../components/greeting';

const IndexPage = ()=>{
  return (
    <Layout pageTitle="Home Page">
      <p>This is a tutorial</p>
      <Greeting name="Mahlatse" />
    </Layout>
  );
}
export default IndexPage