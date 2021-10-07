import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="Blog Posts">
    <Seo title="Blog Posts" />
      <ul>
        {
          data.allWpPost.nodes.map((post) => (
            <li key={post.id}><Link to={`/blog${post.uri}`}>{post.title}</Link></li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost {
      nodes {
        id
        title
        slug
        uri
      }
    }
  }
` 

export default BlogPage