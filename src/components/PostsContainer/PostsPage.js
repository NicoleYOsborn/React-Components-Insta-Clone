//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post.js";
import "./Posts.css";
// import data 
import postData from '../../dummy-data';
import PostHeader from "./PostHeader.js";
const PostsPage = () => {
  // set up state for your data
  const [post] = useState(postData)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {post.map(postObj => <Post key={postObj.timestamp} post = {postObj}/>)}
    </div>
  );
};

export default PostsPage;
