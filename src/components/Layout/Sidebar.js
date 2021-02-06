import React from 'react';
import { IoMdClose } from 'react-icons/io';

import Links      from '../../constants/links';
import Categories from '../Categories';


export default ({ isOpen, toggle }) => (
  <aside className={`sidebar ${isOpen ? 'showSidebar' : ''}`}>
    <button className='close-btn' onClick={toggle}>
      <IoMdClose />
    </button>
    <div className='sidebar-container'>
      <Links styleClass='sidebar-links'>
        <Categories />
      </Links>
    </div>
  </aside>
);
