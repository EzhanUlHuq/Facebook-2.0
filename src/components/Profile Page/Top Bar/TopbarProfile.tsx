import React from 'react';

const TopbarProfile = () => {
    return(
        <div className = "profile-info-container">
        <img src="Images/cover.png" alt = "" className='cover-img' />
        <div className="profile-details">
          <div className="pd-left">
            <div className="pd-row">
              <img src = "Images/profile.png" alt = "" className = "pd-image"/>
              <div>
                <h3>Jack Nicholson</h3>
                <p>120 Friends - 20 mutual</p>
                <img src = "Images/member-1.png" />
                <img src = "Images/member-2.png" />
                <img src = "Images/member-3.png" />
                <img src = "Images/member-4.png" />
              </div>
            </div>
          </div>
          <div className="pd-right">
            <button type = "button"><img src = "Images/add-friends.png"/>Friend</button>
            <button type = "button"><img src = "Images/message.png"/>Message</button>
            <br />
          </div>
        </div>
        <hr />
        <div className = "pd-bottom">
          <button type = "button">Posts</button>
          <button type = "button">About</button>
          <button type = "button">Friends</button>
          <button type = "button">Photos</button>
          <button type = "button">Videos</button>
          <button type = "button">Check-ins</button>
          <button type = "button">More</button>
          <a href = "#"><img src="Images/more.png"/></a>
        </div>  
      </div>
    )
}

export default TopbarProfile 
