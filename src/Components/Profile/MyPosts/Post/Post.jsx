import React from 'react';
import k from './Post.module.css';

const Post = (some) => {
    return (
        <div className={k.content} >
          <div>
            <img className={k.content__img} src="https://miro.medium.com/proxy/1*VWK_hk_UuSsksK0ao_xMUQ.jpeg" alt=""/>
          </div>
          {some.comment}
          {some.likecounts}
      </div>
    )
}

export default  Post;