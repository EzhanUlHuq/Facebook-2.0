import React from 'react';

const PostButtons = () => {
    return(
        <div className="post-row-buttons">
            <div className="button-like">
            <button type = "button"><img src = "Images/facebook-like-2.png" />Like</button>
            </div>
            <div className="button-comment">
            <button type = "button"><img src = "Images/facebook-comment-2.png" />Comment</button>
            </div>
            <div className="button-share">
            <button type = "button"><img src = "Images/facebook-share-2.png" />Share</button>
            </div>
        </div>
    )
}

export default PostButtons