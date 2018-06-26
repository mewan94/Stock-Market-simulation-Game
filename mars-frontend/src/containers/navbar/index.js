import React from 'react';
import NavItem from '../../components/navitem';
import './index.css';

export const NavBar = (props) => {
    return(
        <ul>
            <NavItem name="home"/>
            <NavItem name="options"/>
        </ul>
    )
}

export default NavBar