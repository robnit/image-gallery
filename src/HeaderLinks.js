import React from 'react';
import { NavLink  } from 'react-router-dom';

const HeaderLink = props => <NavLink {...props} 
  className="nav-link" 
  activeClassName="active"
/>;

export default function Header() {
  return (
    <div>
      <HeaderLink exact to="/">List</HeaderLink>
      <HeaderLink to="/thumbnail">Thumbnails</HeaderLink>
      <HeaderLink to="/gallery">Gallery</HeaderLink>
    </div>
  );
}