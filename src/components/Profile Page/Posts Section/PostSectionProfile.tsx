import React from 'react';
import PostButtons from './components/PostButtons';
import CommentBox from './components/CommentBox';

const PostSectionProfile = () => {
    return(
        <div className="post-col">
        <div className="post-filter">
          <h3>Post</h3>
          <button type = "button"><img src = "Images/facebook-filter.png"/>Filter</button>
        </div>
        <div className="post-container">
          <div className="post-row">
            <div className="user-profile-profile-page">
              <img src="Images/profile-pic.png" />
              <div>
                <p>Ezhan Ul Huq</p>
                <small>March 19 2022, 13:40</small>
              </div>
            </div>
            <a href="#"></a>
          </div>
          <p className = 'post-text'>Trying my best to redeem my self at Deltacron and rise from the ashes wish me luck!
          <br />
          <a href="#">#RisingAgain</a>
          &nbsp;&nbsp;
          <a href="#">#LearningCSS</a>
          </p>
          <div className="post-row">
            <div className="activity-icons">
              <div><img src="Images/like-blue.png"/> 120</div>
            </div>
            <div className = "activity-shares-comments">
                <p>10 comments</p>
                <p>2 shares</p>
            </div>
          </div>
          <hr />
          <PostButtons />
          <hr />
          <CommentBox />
        </div>
        <div className="post-container">
          <div className="post-row">
            <div className="user-profile-profile-page">
              <img src="Images/member-1.png" />
              <div>
                <p>Alison Mina</p>
                <small>March 11 2022, 11:40</small>
              </div>
            </div>
            <a href="#"></a>
          </div>
          <p className = 'post-text'>Enjoying a nice sunset at the beach with friends
          <br />
          <a href="#">#Party</a>
          &nbsp;&nbsp;
          <a href="#">#Friends</a>
          </p>
          <img src="Images/feed-image-2.png" className ="post-img"/>
          
          <div className="post-row">
            <div className="activity-icons">
              <div><img src="Images/like.png"/>27</div>
            </div>
            <div className = "activity-shares-comments">
                <p>13 comments</p>
                <p>3 shares</p>
            </div>
          </div>
          <hr />
          <PostButtons />
          <hr />
          <CommentBox />
        </div>
        <div className="post-container">
          <div className="post-row">
            <div className="user-profile-profile-page">
              <img src="Images/member-2.png" />
              <div>
                <p>Jacob Jack</p>
                <small>March 19 2022, 13:40</small>
              </div>
            </div>
            <a href="#"></a>
          </div>
          <p className = 'post-text'>It is back to Uni Time this time ill graduate for sure!
          <br />
          <a href="#">#BackToUni</a>
          &nbsp;&nbsp;
          <a href="#">#Friends</a>
          </p>
          <img src="Images/feed-image-3.png" className ="post-img"/>
          <div className="post-row">
            <div className="activity-icons">
              <div><img src="Images/like-blue.png"/> 30</div>
            </div>
            <div className = "activity-shares-comments">
                <p>10 comments</p>
                <p>2 shares</p>
            </div>
          </div>
          <hr />
          <PostButtons />
          <hr />
          <CommentBox />
        </div>
        </div>
    )
}

export default PostSectionProfile