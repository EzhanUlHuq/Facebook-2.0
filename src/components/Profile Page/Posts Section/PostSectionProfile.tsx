import React from 'react';
import { PostArray } from './components/PostArray';

const PostSectionProfile = () => {
    return(
        <div className="post-col">
        <div className="post-filter">
          <h3>Post</h3>
          <button type = "button"><img src = "Images/facebook-filter.png"/>Filter</button>
        </div>
        <PostArray />
        </div>
    )
}

export default PostSectionProfile