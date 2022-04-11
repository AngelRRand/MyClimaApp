import React from 'react';
import Logo from '../img/logo.png'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
  return (

    <nav className="flex justify-around space-x-4 bg-neutral-900 shadow-lg shadow-yellow-500/50">
      <Link to='/'>
        <div className='text-5xl font-extrabold'>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-300 ">
            Clima
          </span>
        </div>
      </Link>
      <Link to='/About'>
        <span className="text-5xl font-extrabold text-orange-400/100 ">About</span>
      </Link>
      <SearchBar
        onSearch={onSearch}
      />
    </nav>

  );
};

export default Nav;
