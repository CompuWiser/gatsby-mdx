import React from 'react';
import Post from './Post';
import Banner from '../Banner';

export default ({ posts, title }) => (
  <section className='posts'>
    <h3 className='posts-title'>{title}</h3>
    <div className='posts-center'>
      <article>
        {posts.map((post) => (
          <Post key={post.id} {...post}></Post>
        ))}
      </article>
      <article>
        <Banner />
      </article>
    </div>
  </section>
);
