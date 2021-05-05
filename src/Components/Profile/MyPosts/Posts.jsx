import React from 'react';
import k from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {
  
  let PostsElements 
  = props.mypost.map( p => <Post comment={p.comment} likecounts={p.likecounts} />)


    return (
        <div className={k.content} >
          <div className={k.articles}>
            Some article
          </div>
          <div>
              {PostsElements}
          </div>
      </div>
    )
}

export default  Posts;