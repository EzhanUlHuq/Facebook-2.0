import React from 'react';

const LeftSidebarProfile = () => {
    return(
        <div className="info-col">
        <div className="profile-intro">
          <h3>Intro</h3>
          <p className = "intro-text">Believe in yourself and you can do unbelievable things. <img src = "Images/feeling.png" /></p>
          <hr />
          <ul>
            <li><img src = "Images/profile-job.png"/>Employee at Deltacron</li>
            <li><img src = "Images/profile-study.png"/>Studied at FC College</li>
            <li><img src = "Images/profile-home.png"/>Lives in Lahore</li>
            <li><img src = "Images/profile-location.png"/>From Karachi, Pakistan</li>
          </ul>
        </div>
        <div className="profile-intro">
          <div className="title-box">
            <h3>Photos</h3>
            <a href = "">All Photos</a>
          </div>
          <div className="photo-box">
            <div><img src="Images/photo1.png"/></div>
            <div><img src="Images/photo2.png"/></div>
            <div><img src="Images/photo3.png"/></div>
            <div><img src="Images/photo4.png"/></div>
            <div><img src="Images/photo5.png"/></div>
            <div><img src="Images/photo6.png"/></div>
          </div>
        </div>
        <div className="profile-intro">
          <div className="title-box">
            <h3>Friends</h3>
            <a href = "">All Friends</a>
          </div>
          <p>120 (10 mutual)</p>
          <div className="friends-box">
            <div><img src="Images/member-1.png"/><p>John D</p></div>
            <div><img src="Images/member-2.png"/><p>Nathan D</p></div>
            <div><img src="Images/member-3.png"/><p>George A</p></div>
            <div><img src="Images/member-4.png"/><p>Michael K</p></div>
            <div><img src="Images/member-5.png"/><p>Bradon S</p></div>
            <div><img src="Images/member-6.png"/><p>James C</p></div>
            <div><img src="Images/member-7.png"/><p>Francis P</p></div>
            <div><img src="Images/member-8.png"/><p>Anthony M</p></div>
            <div><img src="Images/member-9.png"/><p>Jack J</p></div>
          </div>
        </div>
      </div>
    )
}

export default LeftSidebarProfile
