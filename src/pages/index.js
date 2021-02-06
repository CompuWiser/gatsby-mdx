import React from 'react';
import { graphql } from 'gatsby';

import Hero   from '../components/Hero';
import Layout from '../components/Layout';
import Posts  from '../components/Posts';
import SEO    from '../components/SEO';

export default (props) => (
  <Layout>
    <SEO title='Home' />
    <Hero showPerson />
    <Posts posts={props.allMdx.nodes} title='recently published' />
  </Layout>
);

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        frontmatter {
          readTime
          title
          category
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
