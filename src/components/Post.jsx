import { React, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addPost } from '../redux/modules/postsSlice';

import './Post.css'

function Post() {

const dispatch=useDispatch();

const [inputs, SetInputs]=useState(
  {
    category:'',
    title:'',
    content:'',
    img:''
  }
);

const {title, content, img}=inputs;


//iput값 변하면 setInput에 값 추가
const onChange=(e)=>{
  const {name, value}=e.target
  SetInputs({
    ...inputs,
    [name]:value
  });
};

const onClick=(e)=>{
  e.preventDefault()
  console.log(inputs)
  dispatch(addPost(inputs));
}


  return (
    <div className='warp'>
      <div className='post_container'>
        <div className='post_top'>
          <select name='category' onChange={onChange}>
          <option disabled selected>카테고리 선택</option>
            <option value='1'>선택1</option>
            <option value='2'>선택2</option>
            <option value='3'>선택3</option>
            <option value='4'>선택4</option>
            <option value='5'>선택5</option>
            <option value='6'>선택6</option>
          </select>
          <input name='title' value={title} onChange={onChange} placeholder='제목'></input>
          <textarea name='content' value={content} onChange={onChange} placeholder='내용작성....'></textarea>
          <div className='post_bottom'>
          <input type='file' accept='.gif, .jpg, .png'/>
          <button onClick={onClick}>작성</button>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Post;