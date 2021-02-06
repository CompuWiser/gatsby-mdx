import React from 'react';
import SocialLinks from '../constants/socialLinks';

export default () => (
  <footer className='footer'>
    <div>
      <SocialLinks styleClass='footer-icons' />
      <p>&copy;{new Date().getFullYear()} MDXBlog. All rights reserved.</p>
    </div>
  </footer>
);
