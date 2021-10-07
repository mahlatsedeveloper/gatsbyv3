import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const PageTemplate = ({data}) => {

  return (
    <Layout pageTitle={data.page.title}>
        <Seo title={data.page.title} />
		<h1 dangerouslySetInnerHTML={{ __html: data.page.title }} />
		<div dangerouslySetInnerHTML={{ __html: data.page.content }} />
    </Layout>
  )
}

export const pageQuery = graphql`
	query ($id: String!) {
		page: wpPage(id: { eq: $id }) {
			id
			title
			content
		}
	}
`;


export default PageTemplate