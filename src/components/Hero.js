import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const query = graphql`
  {
    person: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default ({ showPerson }) => {
  const fluidImage = useStaticQuery(query).person.childImageSharp.fluid;
  return (
    <header className='hero'>
      {showPerson && <Image fluid={fluidImage} className='hero-person' />}
    </header>
  );
};
