import React from 'react'
import { NavRoute } from '../Constant/NavRoute';
import { Link, NavLink } from 'react-router-dom';

const Menu = ({menuStyle, toggleMenu}) => {
  return (
    <div>
      <menu className={menuStyle}>
        {NavRoute.map(({id, name, path})=> (
            <div key={id}>
                <NavLink to={path} onClick={toggleMenu}>{name}</NavLink>
            </div>
        ))}
        </menu>
    </div>
  );
}

export default Menu
