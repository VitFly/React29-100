import React from 'react';
import k from './Articles.module.css';
import Post from './Post/Post'

const Articles = () => {

  let PostData = [
    {id:1, comment:'Hey man, how are you?', likecounts:' 220 likes!' },
    {id:2, comment:'Hey bro, i am okay', likecounts:' 170 likes!'},
    {id:3, comment:'Saruman' },
    {id:4, comment:'Gandalfs Gray!' },
    {id:5, comment:'Theoden Rhokhansky' }
]

    return (
        <div className={k.content} >
          <div className={k.articles}>
            Some article
          </div>
          <div>
              <Post comment={PostData[0].comment} likecounts={PostData[0].likecounts} />
              <Post comment={PostData[1].comment} likecounts={PostData[1].likecounts} />
              <Post comment={PostData[2].comment} likecounts={PostData[2].likecounts} />
              <Post comment={PostData[3].comment} likecounts={PostData[3].likecounts} />
              <Post comment={PostData[4].comment} likecounts={PostData[4].likecounts} />
          </div>
      </div>
    )
}

export default  Articles;