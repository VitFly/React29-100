import React from 'react';
// import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import Item from './Item/Item'
import Message from './Messagess/Messages'

const Dialogs = (props) => {


    let DialogsElements = props.dialogs.map( d => <Item name={d.name} id={d.id} />  )  

    let messageElement = props.message.map( m => <Message message={m.message}  id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;