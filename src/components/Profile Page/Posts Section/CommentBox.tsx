import React from 'react';

const CommentBox = () => {
    return(
        <div className="user-profile-profile-page">
            <img src="Images/profile-pic.png" />
            <div className="write-post-search-box">
                <input type = 'text' placeholder = "Write a comment..." />
            </div>
        </div>
    )
}

export default CommentBox