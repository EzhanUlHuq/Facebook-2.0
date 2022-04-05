import React from 'react';
import LeftSidebarProfile from '../Left Sidebar/LeftSidebarProfile';
import PostSectionProfile from '../Posts Section/PostSectionProfile';
const MainContentProfile = () => {
    return(
        <div className="profile-info">
            <LeftSidebarProfile />
            <PostSectionProfile />
        </div>
    )
}

export default MainContentProfile