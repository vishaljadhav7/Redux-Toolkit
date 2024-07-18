import { useState } from 'react'
import './App.css'
import PostList from './Components/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux</h1>
      <PostList/>
    </>
  )
}

export default App
