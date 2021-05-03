import React from 'react';
import s from './Item.module.css';
import { NavLink } from 'react-router-dom';

const Item = (props) => {
  let path = '/dialogs/' + props.id
    return (
      <div className={s.dialogs__item__items + ' ' + s.active}>
         <NavLink to={path}>{props.name}</NavLink>  
      </div>
    )
}

export default  Item;