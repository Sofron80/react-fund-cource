import React, { useMemo, useState } from 'react';
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

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const [selectedSort, setSelectedSort] = useState('title')
  const sortedPost = useMemo(()=>{
    console.log('Отработала функция getSelectedSort');
    if (selectedSort){
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  },[selectedSort, posts])

  const [search, setSearch] = useState('')

  const sortedAndSearchedPost = useMemo(()=>{
    return sortedPost.filter(post=>post.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, sortedPost])



  return (
    <div className="App">
      <MyForm callback={addPost} />
      <div>
        <hr style={{margin: '15px'}}/>
        <MyInput value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search' />
        <MySelect
          value={selectedSort}
          onChange={(e)=>setSelectedSort(e)}
          defaultValue="сортировка по"
          options={[
            { name: 'По названию', value: 'title' },
            { name: 'По описанию', value: 'body' }
          ]}
        />
      </div>
      {sortedAndSearchedPost.length !== 0
        ?  <PostList posts={sortedAndSearchedPost} remove={removePost} title="Список постов JS" />
        :  <h1 style={{textAlign: 'center'}}>Посты отсутствуют</h1>
      }
    </div>
  )
}

export default App
