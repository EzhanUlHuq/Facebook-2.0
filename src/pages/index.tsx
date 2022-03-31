import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Landing from '../layouts/Landing'
import Footer from "../components/Footer/Footer"

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <Landing>
      <div className="container">
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
        
        <div className="main-content">
          <div className="story-gallery">
            <div className="story story1">
              <div className="create-story">
                <img src="Images/upload.png" />
                <p>Create Story</p>
              </div>
            </div>
            <div className="story story2">
              <img src="Images/member-1.png" />
              <p>Alison</p>
            </div>
            <div className="story story3">
              <img src="Images/member-2.png" />
              <p>Jackson</p>
            </div>
            <div className="story story4">
              <img src="Images/member-3.png" />
              <p>Samona</p>
            </div>
            <div className="story story5">
              <img src="Images/member-4.png" />
              <p>John Doe</p>
            </div>
          </div>

          <div className="write-post-container">
            <div className="user-profile">
              <img src="Images/profile-pic.png" />
              <div className="write-post-input-box">
                <input type = 'text' placeholder = "What's on your mind, Azhan?" />
              </div>
            </div>
            <hr />
            <div className="post-input-container">
              <div className="add-post-links">
                <button type = "button"><img src="Images/facebook-livevideo-2.png" />Live Video</button>
                <button type = "button"><img src="Images/facebook-photos-2.png" />Photo/Video</button>
                <button type = "button"><img src="Images/feeling.png" />Feeling/Activity</button>
              </div>
            </div>
          </div>

          <div className="create-room">
            <button><img src = "Images/facebook-createroom-2.png" /><p>Create Room</p></button>
            <img src = "Images/member-1.png"/>
            <img src = "Images/member-2.png"/>
            <img src = "Images/member-3.png"/>
            <img src = "Images/member-4.png"/>
            <img src = "Images/member-5.png"/>
          </div>

          <div className="home-post-container">
            <div className="post-row">
              <div className="user-profile">
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
            <img src="Images/feed-image-1.png" className ="post-img"/>
            <div className="post-row">
              <div className="activity-icons">
                <div><img src="Images/like-blue.png"/> 120</div>
                <div><img src="Images/comments.png"/> 45</div>
                <div><img src="Images/share.png"/> 20</div>
              </div>
            </div>
            <hr />
            <div className="post-row-buttons">
              <div className="button-like">
                <button type = "button"><img src = "Images/facebook-like-2.png" />Like</button>
              </div>
              <div className="button-comment">
                <button type = "button"><img src = "Images/facebook-comment-2.png" />Comment</button>
              </div>
              <div className="button-share">
                <button type = "button"><img src = "Images/facebook-share-2.png" />Share</button>
              </div>
              <div className="post-profile-icon">
                <img src="Images/profile-pic.png"/>
              </div>
            </div>
          </div>

          <div className="home-post-container">
            <div className="post-row">
              <div className="user-profile">
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
            <hr />
            <div className="post-row">
              <div className="activity-icons">
                <div><img src="Images/like.png"/> 20</div>
                <div><img src="Images/comments.png"/> 2</div>
                <div><img src="Images/share.png"/> 20</div>
              </div>
            </div>
            <hr />
            <div className="post-row-buttons">
              <div className="button-like">
                <button type = "button"><img src = "Images/facebook-like-2.png" />Like</button>
              </div>
              <div className="button-comment">
                <button type = "button"><img src = "Images/facebook-comment-2.png" />Comment</button>
              </div>
              <div className="button-share">
                <button type = "button"><img src = "Images/facebook-share-2.png" />Share</button>
              </div>
              <div className="post-profile-icon">
                <img src="Images/profile-pic.png"/>
              </div>
            </div>
          </div>

          <div className="home-post-container">
            <div className="post-row">
              <div className="user-profile">
                <img src="Images/member-2.png" />
                <div>
                  <p>Ezhan Ul Huq</p>
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
            <hr />
            <div className="post-row">
              <div className="activity-icons">
                <div><img src="Images/like-blue.png"/> 30</div>
                <div><img src="Images/comments.png"/> 20</div>
                <div><img src="Images/share.png"/> 20</div>
              </div>
            </div>
            <hr />
            <div className="post-row-buttons">
              <div className="button-like">
                <button type = "button"><img src = "Images/facebook-like-2.png" />Like</button>
              </div>
              <div className="button-comment">
                <button type = "button"><img src = "Images/facebook-comment-2.png" />Comment</button>
              </div>
              <div className="button-share">
                <button type = "button"><img src = "Images/facebook-share-2.png" />Share</button>
              </div>
              <div className="post-profile-icon">
                <img src="Images/profile-pic.png"/>
              </div>
            </div>
          </div>

          <button type="button" className="load-more-btn">Load More</button>

        </div>

        <div className="right-sidebar">
         
          <div className = 'pages'>
            <p>Your Pages</p>
              <a href = "#"><img src = "Images/shortcut-1.png"/>Page 1</a>
              <a href = "#"><img src = "Images/shortcut-2.png"/>Page 2</a>
              <a href = "#"><img src = "Images/shortcut-3.png"/>Page 3</a>
              <a href = "#"><img src = "Images/shortcut-4.png"/>Page 4</a>
          </div>
            <div className="contacts-title">
              <div>
                <p>Contacts</p>
              </div>
              <div className = "contacts-ul">
                <ul>
                  <li><img src = "Images/setting.png"/></li>
                  <li><img src = "Images/search.png"/></li>
                  <li><img src = "Images/facebook-more2.png"/></li>
                </ul>
              </div>
            </div>
            <div className="online-list">
              <div className="online">
                <img src = "images/member-1.png" />
              </div>
              <p>Alison Mina</p>
            </div>
            <div className="online-list">
              <div className="online">
                <img src = "images/member-2.png" />
              </div>
              <p>Jackson Ashton</p>
            </div>
            <div className="online-list">
              <div className="online">
                <img src = "images/member-3.png" />
              </div>
              <p>Samona Rose</p>
            </div>
            <div className="online-list">
              <div className="online">
                <img src = "images/member-6.png" />
              </div>
              <p>Max Hawl</p>
            </div>
            <div className="online-list">
              <div className="online">
                <img src = "images/member-7.png" />
              </div>
              <p>Eddie Roll</p>
            </div>
        </div>
      </div>
     <Footer />
    </Landing>
  )
}

export default Home
