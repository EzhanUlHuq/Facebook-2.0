import React from 'react';
import PostButtons from '../../../Profile Page/Posts Section/components/PostButtons';
import ActivityButtons from './ActivityButtons';
import CommentBox from './CommentBox';
import { UserProfile1, UserProfile2, UserProfile3 } from './UserProfiles';

export const Post1 = () => {
    return(
        <div className="post-container">
            <UserProfile1 />
            <p className = 'post-text'>Trying my best to redeem my self at Deltacron and rise from the ashes wish me luck!
            <br />
            <a href="#">#RisingAgain</a>
            &nbsp;&nbsp;
            <a href="#">#LearningCSS</a>
            </p>
            <ActivityButtons />
            <hr />
            <PostButtons />
            <hr />
            <CommentBox />
        </div>
    )
}

export const Post2 = () => {
    return(
        <div className="post-container">
            <UserProfile2 />
            <p className = 'post-text'>Enjoying a nice sunset at the beach with friends
            <br />
            <a href="#">#Party</a>
            &nbsp;&nbsp;
            <a href="#">#Friends</a>
            </p>
            <img src="Images/feed-image-2.png" className ="post-img"/>
            <ActivityButtons />
            <hr />
            <PostButtons />
            <hr />
            <CommentBox />
            
        </div>
    )
}

export const Post3 = () => {
    return(
        <div className="post-container">
            <UserProfile3 />
            <p className = 'post-text'>It is back to Uni Time this time ill graduate for sure!
            <br />
            <a href="#">#BackToUni</a>
            &nbsp;&nbsp;
            <a href="#">#Friends</a>
            </p>
            <img src="Images/feed-image-3.png" className ="post-img"/>
            <ActivityButtons />
            <hr />
            <PostButtons />
            <hr />
            <CommentBox />
        </div>
    )
}