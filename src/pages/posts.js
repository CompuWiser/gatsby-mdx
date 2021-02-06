import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero   from '../components/Hero';
import Posts  from '../components/Posts';

export default (props) => (
  <Layout>
    <Hero />
    <Posts posts={props.data.allMdx.nodes} title='all posts' />
  </Layout>
);

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          readTime
          category
          date(formatString: "MMMM Do, YYYY")
          author
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        id
      }
    }
  }
`;