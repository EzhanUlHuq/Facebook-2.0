import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Landing from '../layouts/Landing'
import Footer from '../components/Footer/Footer'


const Profile: NextPage = () => {
  const router = useRouter()
  return (
    <Landing>

      <div className="profile-container">
        <div className = "profile-info-container">
          <img src="Images/cover.png" alt = "" className='cover-img' />
          <div className="profile-details">
            <div className="pd-left">
              <div className="pd-row">
                <img src = "Images/profile.png" alt = "" className = "pd-image"/>
                <div>
                  <h3>Jack Nicholson</h3>
                  <p>120 Friends - 20 mutual</p>
                  <img src = "Images/member-1.png" />
                  <img src = "Images/member-2.png" />
                  <img src = "Images/member-3.png" />
                  <img src = "Images/member-4.png" />
                </div>
              </div>
            </div>
            <div className="pd-right">
              <button type = "button"><img src = "Images/add-friends.png"/>Friend</button>
              <button type = "button"><img src = "Images/message.png"/>Message</button>
              <br />
              
            </div>
            
          </div>
          <hr />
          <div className = "pd-bottom">
            <button type = "button">Posts</button>
            <button type = "button">About</button>
            <button type = "button">Friends</button>
            <button type = "button">Photos</button>
            <button type = "button">Videos</button>
            <button type = "button">Check-ins</button>
            <button type = "button">More</button>
            <a href = "#"><img src="Images/more.png"/></a>
          </div>
          
        </div>
        
        <div className="profile-info">
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
          <div className="post-col">
        

          <div className="post-filter">
            <h3>Post</h3>
            <button type = "button"><img src = "Images/facebook-filter.png"/>Filter</button>
          </div>


          <div className="post-container">
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
            <hr />
            <div className="post-row">
              <div className="activity-icons">
                <div><img src="Images/like-blue.png"/> 120</div>
                <div><img src="Images/comments.png"/> 45</div>
                <div><img src="Images/share.png"/> 20</div>
              </div>
              <div className="post-profile-icon">
                <img src="Images/profile-pic.png"/>
              </div>
            </div>
          </div>

      
          <div className="post-container">
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
              <div className="post-profile-icon">
                <img src="Images/profile-pic.png"/>
              </div>
            </div>
          </div>

          <div className="post-container">
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
              <div className="post-profile-icon">
                <img src="Images/profile-pic.png"/>
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>
      <Footer />
    </Landing>
  )
}

export default Profile
