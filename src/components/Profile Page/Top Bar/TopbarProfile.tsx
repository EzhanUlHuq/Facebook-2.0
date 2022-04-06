import React from 'react';
import BottomButtons from './components/BottomButtons';
import AddFriend from './components/AddFried';

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
        <AddFriend />
        </div>
        <hr />
        <BottomButtons />
      </div>
    )
}

export default TopbarProfile 
