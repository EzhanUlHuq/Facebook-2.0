import React, { useState } from 'react';
import Image from 'next/image';



var Navbar = () => {


    return(
        <>
            <nav>
                <div className="nav-right">
                    <img src = '/Images/facebook-logo.png' className = 'logo' />
                    <div className="search-box">
                        <img src="/Images/search.png" />
                        <input type = 'text' placeholder = 'Search' />
                    </div>
                  
                </div>
                <div className="nav-center">
                    <ul>
                        <li><img src = '/Images/facebook-home.png' /></li>
                        <li><img src = '/Images/facebook-friends.png' /></li>
                        <li><img src = '/Images/facebook-groups.png' /></li>
                        <li><img src = '/Images/facebook-gaming.png' /></li>
                    </ul>
                </div>
                <div className="nav-left">
                        <div className = 'nav-user-icon online'>
                            <img src="Images/profile-pic.png" alt="" />
                        </div>
                        <div className="nav-user-name">
                            <p>Azhan</p>
                        </div>
                        <ul>
                            <li><img src = '/Images/facebook-menu.png' /></li>
                            <li><img src = '/Images/messenger-icon.png' /></li>
                            <li><img src = '/Images/notification.png' /></li>
                            <li className = 'notification'><img src = '/Images/facebook-more.png' /></li>
                        </ul>
                </div>
            </nav>
        </>
    );
}


export default Navbar;