import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`;

export default () => {
  const distinct = useStaticQuery(query).allMdx.distinct;

  return (
    <ul className='categories'>
      {distinct.map((category, index) => (
        <li key={index}>
          <Link to={`/${category}`} className='category'>
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};
