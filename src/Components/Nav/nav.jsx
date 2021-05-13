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
             <div className={s.nav__link__last}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                <div className={s.frineds} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iEXq5Tq8suPbnZd51iuXk2m7Q64Zide5WA&usqp=CAU" alt=""/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iEXq5Tq8suPbnZd51iuXk2m7Q64Zide5WA&usqp=CAU" alt=""/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iEXq5Tq8suPbnZd51iuXk2m7Q64Zide5WA&usqp=CAU" alt=""/>
                </div>
                <div className={s.names}>
                Artur
                Alex
                Roma
                </div>
             </div> 
      </nav>
    )
}

export default Nav;