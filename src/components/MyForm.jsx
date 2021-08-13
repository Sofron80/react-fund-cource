import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const MyForm = ({ callback }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    if (!post.title.trim() || !post.body.trim()) return
    callback(post)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      {/*Управляемый компонент*/}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="заголовок"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание"
      />
      <MyButton onClick={addNewPost}>Добавить пост</MyButton>
    </form>
  )
}

export default MyForm
