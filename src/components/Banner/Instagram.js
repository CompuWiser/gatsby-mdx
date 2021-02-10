import React from 'react';
import Title from './Title';
//import Image from 'gatsby-image';
import styled from 'styled-components';
//import { graphql, useStaticQuery } from 'gatsby';

/* const query = graphql`
  {
    allInstaNode(limit: 1) {
      nodes {
        original
        id
        caption
      }
    }
  }
`; */

export default () => {
  //const instaNodes = useStaticQuery(query).allInstaNode.nodes;

  return (
    <Wrapper>
      <Title title='instagram'></Title>
      <div className='images'>
        {/* {instaNodes.map(({ original, caption, id }) => (
          <img src={original} alt={caption} key={id} width='200' />
        ))} */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`;
