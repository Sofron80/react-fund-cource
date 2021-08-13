import React, { useState } from 'react'
import MyForm from './components/MyForm'
import PostList from './components/PostList'
import './styles/App.css'
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: '1J1avaScript1', body: '2Описание поста' },
    { id: 2, title: '2Python', body: '1Описание поста' },
  ])

  const [selectedSort, setSelectedSort] = useState('title')
  const [sortValue, setSortValue] = useState('')


  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort)=>{
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  }

  const searchPosts=(text)=>{
    setSortValue(text)
  }

  return (
    <div className="App">
      <MyForm callback={addPost} />
      <div>
        <hr style={{margin: '15px'}}/>
        <MyInput value={sortValue} onChange={e=>searchPosts(e.target.value)}/>
        <MySelect
          value={selectedSort}
          onChange={(e)=>sortPosts(e)}
          defaultValue="сортировка по"
          options={[
            { name: 'По названию', value: 'title' },
            { name: 'По описанию', value: 'body' }
          ]}
        />
      </div>
      {posts.length !== 0
        ?  <PostList posts={posts} remove={removePost} title="Список постов JS" />
        :  <h1 style={{textAlign: 'center'}}>Посты отсутствуют</h1>
      }
    </div>
  )
}

export default App
