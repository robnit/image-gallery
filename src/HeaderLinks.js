import React from 'react';
import { NavLink  } from 'react-router-dom';

const HeaderLink = props => <NavLink {...props} 
  className="nav-link" 
  activeClassName="active"
/>;

export default function Header() {
  return (
    <div>
      <HeaderLink exact to="/">List </HeaderLink><span> </span>
      <HeaderLink to="/thumbnail">Thumbnail</HeaderLink><span> </span>
      <HeaderLink to="/gallery">Gallery</HeaderLink><span> </span>
    </div>
  );
}