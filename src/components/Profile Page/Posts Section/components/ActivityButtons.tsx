import React from 'react';

const ActivityButtons = () => {
    return(
        <div className="post-row">
            <div className="activity-icons">
            <div className="activity-icons-right"><img src="Images/like.png"/> 20</div>
            </div>
            <div className = "activity-shares-comments">
                <p>13 comments</p>
                <p>3 shares</p>
            </div>
        </div>
    )
}

export default ActivityButtons