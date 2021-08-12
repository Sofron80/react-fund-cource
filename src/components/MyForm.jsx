import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const MyForm = ({ props }) => {
  const { post, addNewPost, setPost } = props;
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
  );
};

export default MyForm;
