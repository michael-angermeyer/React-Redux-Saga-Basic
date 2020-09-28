import React from 'react';

import PostsComponent from './components/PostsComponent';

import './App.css';
import { useSelector } from 'react-redux';



const App = () => {
  const posts = useSelector(state => state.postsReducer.posts);

  console.log("here are your posts: ",posts)
  return (
    <div>
      <h1>Test Site</h1>
      <PostsComponent />
    </div>
  );
};

export default App;
