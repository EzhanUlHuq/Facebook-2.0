import React, { useState } from 'react';
import { useRouter } from 'next/router'




var Navbar = () => {

    const router = useRouter()
    console.log(router.pathname)
    const param = () =>{
        if(router.pathname === "/profile"){
            console.log("abc")
            return(<button type = "button" style={{border : "none"}}><img src = '/Images/facebook-home-9.png' /></button>)
            
        }
        else if(router.pathname === "/"){
            console.log("bcd")
            return(<button type = "button"><img src = '/Images/facebook-home-6.png' /></button>)
        }

    }
    

    return(
        <>
            <nav>
                <div className="nav-right">
                    <img src = '/Images/facebook-logo.png' className = 'logo' />
                    <div className="search-box">
                        <img src="/Images/search.png" />
                        <input type = 'text' placeholder = 'Search Facebook' />
                    </div>
                </div>
                <div className="nav-center">
                    {param()}
                    <button type = "button"><img src = '/Images/facebook-watch-3.png' /></button>
                    <button type = "button"><img src = '/Images/facebook-marketplace-2.png' /></button>
                    <button type = "button"><img src = '/Images/facebook-gaming-4.png' /></button>
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