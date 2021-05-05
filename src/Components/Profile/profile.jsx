import React from 'react';
import k from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './MyPosts/Posts';

 

const Profile = (props) => {


    return (
        <div className={k.content} >
          <ProfileInfo />
          <Posts mypost={props.mypost} />
      </div>
    )
}

export default  Profile;