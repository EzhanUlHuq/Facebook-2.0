import React from 'react';

const BottomButtons = () => {
    return(
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
    )
}

export default BottomButtons