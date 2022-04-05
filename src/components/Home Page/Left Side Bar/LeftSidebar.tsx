import React from 'react';

const LeftSidebar = () => {
    return(
        <div className="left-sidebar">
        <div className="imp-links">
          <a href = '#'><img src = 'Images/profile-pic.png' />Ezhan Ul Huq</a>
          <a href = '#'><img src = 'Images/friends.png' />Friends</a>
          <a href = '#'><img src = 'Images/facebook-saved.png'/>Saved</a>
          <a href = '#'><img src = 'Images/group.png' />Groups</a>
          <a href = '#'><img src = 'Images/marketplace.png' />Marketplace</a>
          <a href = '#'><img src = 'Images/watch.png' />Watch</a>
          <a href = '#'><img src = 'Images/facebook-more2.png' />See More</a>
        </div>
        <div className="shortcut-links">
          <p>Your Shortcuts</p>
          <a href = "#"><img src = "Images/shortcut-1.png"/>Web Developers</a>
          <a href = "#"><img src = "Images/shortcut-2.png"/>Web Designers</a>
          <a href = "#"><img src = "Images/shortcut-3.png"/>Full Stack Web Development </a>
          <a href = "#"><img src = "Images/shortcut-4.png"/>Website Experts</a>
        </div>
        </div>
    )
}

export default LeftSidebar