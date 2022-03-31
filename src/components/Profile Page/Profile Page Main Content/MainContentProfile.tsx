import React, { useState } from 'react';
import LeftSidebarProfile from '../Profile Page Left Sidebar/LeftSidebarProfile';
import PostSectionProfile from '../Profile Page Posts Section/PostSectionProfile';
const MainContentProfile = () => {
    return(
        <div className="profile-info">
            <LeftSidebarProfile />
            <PostSectionProfile />
        </div>
    )
}

export default MainContentProfile