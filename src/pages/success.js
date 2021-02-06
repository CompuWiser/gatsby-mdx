import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <section className='success-page'>
      <div className='page-center'>
        <h2>your submission was recieved ! </h2>
        <Link to='/' className='btn'>back home</Link>
      </div>
    </section>
  </Layout>
);
