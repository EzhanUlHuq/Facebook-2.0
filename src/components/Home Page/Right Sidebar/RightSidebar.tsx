import React from 'react';

const RightSideBar = () => {
    return(
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
    )
}

export default RightSideBar