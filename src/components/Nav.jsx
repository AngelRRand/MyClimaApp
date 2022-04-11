import React from 'react';
import Logo from '../img/logo.png'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
  return (
    
      <nav className="">
        <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="50" height="50" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
        </Link>
        <Link to='/About'>
          <span>About</span>
        </Link>
        <SearchBar
          onSearch={onSearch}
        />
      </nav>

  );
};

export default Nav;
