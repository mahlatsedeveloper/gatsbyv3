import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({data}) => {

  return (
    <Layout pageTitle={data.post.title}>
    <Seo title={data.post.title} />
		<h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
		<div dangerouslySetInnerHTML={{ __html: data.post.content }} />
		<p key={data.post.categories.nodes.id}>{data.post.categories.nodes.name}</p>
    </Layout>
  )
}



export const postQuery = graphql`
	query ($id: String!) {
		post: wpPost(id: { eq: $id }) {
			id
			title
			content
			uri
			slug
      		date(formatString: "MMMM D, YYYY")
			categories {
				nodes {
					id
					name
					uri
					slug
				}
			}
		}
	}
`;

export default BlogPost