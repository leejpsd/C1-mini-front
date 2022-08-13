import React from 'react';
import './Detail.css';

function Detail() {
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
          <input placeholder="닉네임"></input>
          <input placeholder="내용"></input>
          <button>등록</button>
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
