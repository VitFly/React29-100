import React from 'react';
import s from './Messages.module.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
  let path = '/dialogs/messages/' + props.id
    return (
      <div className={s.message}>
           <NavLink to={path}>{props.message}</NavLink>
      </div>                  
    )
}

export default  Message;