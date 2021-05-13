import React from 'react';
import k from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {
  
  let PostsElements 
  = props.mypost.map( p => <Post comment={p.comment} likecounts={p.likecounts} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text)
  }
  
    return (
        <div className={k.content} >
          <div className={k.articles}>
            <div>
              <p className={k.MainPost}>
                My Posts
              </p>
            </div>
             <textarea ref={newPostElement} className={k.form} name="NewPost" id="1" cols="80" rows="8"></textarea>
           <div>
              <button onClick={ addPost } className={k.button}>Add post</button>
           </div>
          </div>
          <div>
              {PostsElements}
          </div>
      </div>
    )
}

export default  Posts;