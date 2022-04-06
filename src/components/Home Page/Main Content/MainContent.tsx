import React from 'react';
import PostButtons from '../../Profile Page/Posts Section/components/PostButtons';
import CreateRoom from './components/CreateRoom';
import Stories from './components/Stories';
import WritePostContainer from './components/WritePostContainer';
import { PostArray } from './components/PostArray';


const MainContent = () => {
    return(
        <div className="main-content">
        <Stories />
        <WritePostContainer />
        <CreateRoom />
        <PostArray />
        <button type="button" className="load-more-btn">Load More</button>
      </div>
    )
}

export default MainContent