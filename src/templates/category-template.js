import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero   from '../components/Hero';
import Posts  from '../components/Posts';

export default ({ data, pageContext }) => (
  <Layout>
    <Hero />
    <Posts posts={data.categories.nodes} title={`category / ${pageContext.category}`} />
  </Layout>
);

export const query = graphql`
  query MyQuery($category: String!) {
    categories: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          category
          readTime
          date(formatString: "MMMM Do, YYYY")
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