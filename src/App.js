import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import MyForm from './components/MyForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript1', body: 'Описание поста' },
    { id: 2, title: 'JavaScript2', body: 'Описание поста' },
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    if (!post.title.trim() || !post.body.trim()) return;

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  };

  return (
    <div className="App">
      <MyForm props={{ post, setPost, addNewPost }} />
      <PostList posts={posts} title="Список постов JS" />
    </div>
  );
}

export default App;
