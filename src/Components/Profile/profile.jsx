import React from 'react';
import k from './profile.module.css';
import Articles from './Atrticles/Articles'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={k.content} >
          <ProfileInfo />
          <Articles />
      </div>
    )
}

export default  Profile;