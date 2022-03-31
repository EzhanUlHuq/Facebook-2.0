import React from 'react';

const WritePostContainer = () => {
    return(
        <div className="write-post-container">
        <div className="user-profile-write-post">
          <img src="Images/profile-pic.png" />
          <div className="write-post-input-box">
            <input type = 'text' placeholder = "What's on your mind, Azhan?" />
          </div>
        </div>
        <hr />
        <div className="post-input-container">
          <div className="add-post-links">
            <button type = "button"><img src="Images/facebook-livevideo-2.png" />Live Video</button>
            <button type = "button"><img src="Images/facebook-photos-2.png" />Photo/Video</button>
            <button type = "button"><img src="Images/feeling.png" />Feeling/Activity</button>
          </div>
        </div>
      </div>  
    )
}

export default WritePostContainer