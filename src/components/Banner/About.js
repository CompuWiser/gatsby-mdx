import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import Title from './Title';
import SocialLinks from '../../constants/socialLinks';

const query = graphql`
  {
    file(relativePath: { eq: "banner-about.jpeg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default () => {
  const fixedImage = useStaticQuery(query).file.childImageSharp.fixed;

  return (
    <Wrapper>
      <Title title='about me' />
      <Image fixed={fixedImage} className='img' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi.</p>
      <SocialLinks styleClass='banner-icons'></SocialLinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`;
