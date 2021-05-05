import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
             <div className={s.nav__link}>
                <NavLink to='/profile'  activeClassName={s.active}>Profile</NavLink>
             </div>
            <div className={s.nav__link}>
                <NavLink to='/dialogs' activeClassName={s.active}> Messages</NavLink> 
            </div> 
            <div className={s.nav__link}>
                <NavLink to='/news' activeClassName={s.active}> News</NavLink> 
            </div> 
            <div className={s.nav__link}>
                <NavLink to='/music' activeClassName={s.active}> Music</NavLink>
             </div> 
            <div className={s.nav__link}>
                <NavLink to='/settings' activeClassName={s.active}> Settings</NavLink>
             </div> 
             <div className={s.nav__link}>
                <NavLink to='/aboutus' activeClassName={s.active}>About Us</NavLink>
             </div> 
      </nav>
    )
}

export default Nav;