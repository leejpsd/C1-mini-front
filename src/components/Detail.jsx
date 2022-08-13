import { React, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addComment } from '../redux/modules/commentsSlice';
import './Detail.css';

function Detail() {

  const dispatch=useDispatch();

  const [commentInput, commentSetInput]=useState(
    {
      postid:'',
      comment:''
    }
  );

  const {comment}=commentInput;

  const onChange=(e)=>{
    const {name, value}=e.target
    commentSetInput({
      ...commentInput,
      [name]:value
    });
  };

  
const onClick=(e)=>{
  e.preventDefault()
  console.log(commentInput)
  dispatch(addComment(commentInput));
}


  return (
    <div className="warp">
      <div className="detail_container">
        <div className="detail_top">
          <div className="detail_title">
            <h1>제목제목제목제목</h1>
          </div>
          <div className="title_writer">
            <p>작성자명 | 날짜날짜날짜</p>
            <div>
              <button>수정</button> <button>삭제</button>
            </div>
          </div>
        </div>
        <div className="img"></div>
        <div className="content">
          <p>텍스트 내용</p>
        </div>
      </div>
      <div className="comment_container">
        <div className="comment_input">
          <input placeholder="내용" name='comment' value={comment} onChange={onChange}></input>
          <button onClick={onClick}>등록</button>
        </div>
        <div className="comment_box">
          <div className="comment">
            <div>
              <p>작성자명</p>
            </div>
            <div className="comment_text">
              <p> 댓글내용 댓글내용</p>
            </div>
          </div>
          <div className="comment_button">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
