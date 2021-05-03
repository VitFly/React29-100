import React from 'react';
// import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import Item from './Item/Item'
import Message from './Messagess/Messages'

const Dialogs = () => {
// Это обькты и симуляция логики сервера !! данные приходят и я их записываю
    let Dialogs = [
        {id:1, name:'Vitalik' },
        {id:2, name:'Sasha' },
        {id:3, name:'Oleg' },
        {id:4, name:'Vitya' }
    ]

    let Messages = [
        {id:1, message:'Hello everybody' },
        {id:2, message:'this is 25th lesson of react way Samurai!!' },
        {id:3, message:'I am going up!!!' },
        {id:4, message:'And weell' }
    ]

    let DialogsElements = Dialogs.map( d => <Item name={d.name} id={d.id} />  )  

    let messageElement = Messages.map( m => <Message message={m.message}  id={m.id} />)

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