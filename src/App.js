import React, { useState } from 'react'
import MyForm from './components/MyForm'
import PostList from './components/PostList'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript1', body: 'Описание поста' },
    { id: 2, title: 'JavaScript2', body: 'Описание поста' },
  ])

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }])
  }

  return (
    <div className="App">
      <MyForm callback={addPost} />
      <PostList posts={posts} title="Список постов JS" />
    </div>
  )
}

export default App
