import React from 'react'
import { NavRoute } from '../Constant/NavRoute';
import { Link, NavLink } from 'react-router-dom';

const Menu = ({toggleMenu}) => {
  return (
    <div>
      <menu className=''>
        {NavRoute.map((id, name, path)=> (
            <li key={id}>
                <NavLink to={path} onClick={toggleMenu}>{name}</NavLink>
            </li>
        ))}
        </menu>
    </div>
  );
}

export default Menu
