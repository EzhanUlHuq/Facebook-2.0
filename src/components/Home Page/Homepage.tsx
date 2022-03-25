import React, { useState } from 'react';
import Image from 'next/image';


const Homepage = () => {
    return(
        <>
            <div className="container">
                <div className="left-sidebar">
                <div className = 'nav-user-icon'>
                    <img src="Images/profile-pic.png" alt="" />
                </div>
                <div className="nav-user-name">
                    <p>Azhan Ul Huq</p>
                </div>
                <div className="imp-links">
                    <a href = '#'><img src = 'Images/friends.png' />Friends</a>
                    <a href = '#'><img />Saved</a>
                    <a href = '#'><img src = 'Images/group.png' />Groups</a>
                    <a href = '#'><img src = 'Images/marketplace.png' />Marketplacea</a>
                    <a href = '#'><img src = 'Images/watch.png' />Watch</a>
                </div>
                </div>
                <div className="main-content">

                </div>
                <div className="right-sidebar">

                </div>
            </div>
        </>
    )
}

export default Homepage