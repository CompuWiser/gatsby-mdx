import React from 'react';
export default ({ children }) => (
  <code
    style={{
      background: 'var(--clr-grey-10)',
      color: 'var(--clr-grey-5)',
      padding: '1rem',
      borderRadius: 'var(--radius)'
    }}
  >
    {children}
  </code>
);
