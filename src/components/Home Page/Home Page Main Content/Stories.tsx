import React from 'react';

const Stories = () => {
    return(
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
    )
}

export default Stories