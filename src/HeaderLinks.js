import React from 'react';
import { NavLink  } from 'react-router-dom';

const HeaderLink = props => <NavLink {...props} 
  className="button" 
  activeClassName="is-primary"
/>;

export default function Header() {
  return (
    <div>
      <HeaderLink style={{ 'margin-right' : '22px' }} exact to="/">List </HeaderLink>
      <HeaderLink style={{ 'margin-right' : '22px' }} to="/thumbnail">Thumbnail</HeaderLink>
      <HeaderLink to="/gallery">Gallery</HeaderLink>
    </div>
  );
}