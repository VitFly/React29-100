import React from 'react';
import k from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
          <div>
             <img className={k.pro__info__img} src ='https://images.theconversation.com/files/331760/original/file-20200430-42935-1u6jhco.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop' alt=''/>
          </div>
          <div className={k.ava}>
            <img src="https://lh3.googleusercontent.com/proxy/mqzYam7mTtQFmnu79TojyhQoobPebTf3h-ryPFAXmSWQEAUTKMFb6wJkE5RX0d3FU2nwc-GjJJ43mIFkkJGU6bfdMTYl9rbF5CJfTT3YtIgqD01uBZYdBec7wyEnBeBLk27CvQ" alt=""/>
              <div className={k.description}>
                  <p>A social network is a website that allows people with similar
                     interests to come together and share information, photos and videos. 
                     ... Those who engage on social network sites as a personal endeavor
                      interact by using various forms of media to discuss their lives and interests.</p>
              </div>
          </div>
      </div>
    )
}

export default  ProfileInfo;