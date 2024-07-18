import React from 'react'
import {useSelector} from 'react-redux';


const PostList = () => {
  const posts = useSelector(state => state.posts);

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