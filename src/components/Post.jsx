import React from 'react'
import './Post.css'

function Post() {
  return (
    <div className='warp'>
      <div className='post_container'>
        <div className='post_top'>
          <select>
          <option value='' disabled selected>카테고리 선택</option>
            <option value=''>선택1</option>
            <option value=''>선택2</option>
            <option value=''>선택3</option>
            <option value=''>선택4</option>
            <option value=''>선택5</option>
            <option value=''>선택6</option>
          </select>
          <input placeholder='제목'></input>
          <textarea placeholder='내용작성....'></textarea>
          <div className='post_bottom'>
          <input type='file' accept='.gif, .jpg, .png' />
          <button>작성</button>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Post;