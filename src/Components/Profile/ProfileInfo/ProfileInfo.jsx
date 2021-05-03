import React from 'react';
import k from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
          <div>
             <img className={k.pro__info__img} src ='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg' alt=''/>
          </div>
          <div className={k.ava__description}>
            ava + description
          </div>
      </div>
    )
}

export default  ProfileInfo;