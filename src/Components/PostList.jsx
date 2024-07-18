import React from 'react'
import {useSelector} from 'react-redux';
import { selectAllPosts } from '../slices/postSlice';

const PostList = () => {
  const posts = useSelector(selectAllPosts); // now we don't have to worry if in future if the shape of state changes we can make change in only in its slice

  const renderedPosts = posts.map((post)=>{
     return <div className='post-item'>
       <h3>{post.title}</h3>
       <p>{post.content}</p>
     </div>
  })

  return (
    <div className='posts-container'>
      <h2>Posts</h2>
      {renderedPosts} 
    </div>
  )
}

export default PostList