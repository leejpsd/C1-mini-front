import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link, useLocation, Navigate } from "react-router-dom";
import { editPost } from "../redux/modules/postsSlice";

function Edit() {
  const dispatch = useDispatch();
  const { state } = useLocation();

  //location sate로 받아온 값에서 value추출
  let id = Object.values(state.id).toString();
  let title = Object.values(state.title).toString();
  let content = Object.values(state.content).toString();
  let imgURL = Object.values(state.imgURL).toString();
  let category = Object.values(state.category).toString();

  //위 value로 default값 설정
  const [editImgUrl, SetImgUrl] = useState(imgURL);
  const [editTitle, SetTitle] = useState(title);
  const [editContent, SetContent] = useState(content);
  const [editCategory, SetCategory] = useState(category);

  const inputs = {
    postId: id,
    title: editTitle,
    content: editContent,
  };

  //title, contet만 request 요청가능해서 파일 부분 코드 다 삭제 & input disabled처리

  const onClick = (e) => {
    e.preventDefault();
    dispatch(editPost(inputs));
  };

  //imgURL로 이미지부분만 띄워주세요ㅠ.ㅠ//

  return (
    <>
      <Layout>
        <NavBox>
          <Logo>Hell🚫 world...</Logo>
          <NavBtnBox>
            <Login></Login>
          </NavBtnBox>
        </NavBox>

        <Board>
          <Box>
            <input
              type="text"
              name="title"
              value={editTitle}
              onChange={(e) => SetTitle(e.target.value)}
            />
          </Box>
          <InputBtn>
            <div>
              <select
                name="category"
                onChange={(e) => SetCategory(e.target.value)}
              >
                <option disabled selected>
                  카테고리 선택
                </option>
                <option value="JavaScript">JavaScript</option>
                <option value="C">C</option>
                <option value="Python">Python</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="React">React</option>
                <option value="Ruby">Ruby</option>
              </select>
              <input type="file" disabled />
            </div>
            <div>
              <button onClick={onClick}>작성</button>
            </div>
          </InputBtn>
          <TextBox>
            <div
              className="img__box"
              style={{ backgroundSize: "cover", backgroundPosition: "50% 50%" }}
            ></div>
            <Text>
              <textarea
                name="content"
                value={editContent}
                onChange={(e) => SetContent(e.target.value)}
              ></textarea>
            </Text>
          </TextBox>
        </Board>
      </Layout>
    </>
  );
}

export default Edit;

const Layout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 800px;
  width: 1200px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const NavBox = styled.nav`
  margin-top: 50px;
  width: 100%;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  align-items: center;
  border: solid white 1px;
  border-radius: 15px;
  box-shadow: inset 3px 3px 3px 0px rgba(255, 255, 255, 0.819),
    5px 5px 5px 0px rgba(232, 232, 232, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.nav`
  width: 20%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 35px;
  margin-bottom: 5px;
  font-family: "Jua", sans-serif;
  font-family: "Silkscreen", cursive;
  font-size: 40px;
  color: white;
  line-height: 35px;
`;

const NavBtnBox = styled.div`
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 30px;
`;

const Login = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: red;
  box-shadow: 0 0 5px #b3e5fc, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #b3e5fc, inset 1px 1px 1px 0px rgba(255, 255, 255, 0.819);
  :hover {
    background: transparent;
  }
`;
const Board = styled.div`
  border: solid white 1px;
  border-radius: 15px;
  width: 700px;
  height: 580px;
  margin: 40px auto;
`;

const Box = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  color: white;
  border: solid white 1px;
  width: 98%;
  height: 10%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.819);
  :hover {
    color: #03e9f4;
    background: transparent;
    box-shadow: none;
    box-shadow: 0 0 5px #b3e5fc, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #b3e5fc;
  }
  input {
    background: transparent;
    width: 100%;
    border: none;
    outline: none;
    color: white;
    font-size: 25px;
  }
`;
const InputBtn = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 0 15px;
`;

const TextBox = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  color: white;
  border: solid white 1px;
  width: 98%;
  height: 400px;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;

  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.819);
  :hover {
    color: #03e9f4;
    background: transparent;
    box-shadow: none;
    box-shadow: 0 0 5px #b3e5fc, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #b3e5fc;
  }
  div {
    width: 300px;
    height: 300px;
    box-sizing: border-box;

    color: white;
    border: solid white 1px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
  }
`;

const BoardBox = styled.div`
  display: flex;
`;

const Text = styled.div`
  box-sizing: border-box;

  color: white;
  border: solid white 1px;
  width: 98%;
  height: 10%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;

  textarea {
    width: 100%;
    height: 85%;
    font-size: 20px;
    background: transparent;
    border: none;
    outline: none;
    padding: 10px;
    color: white;
  }
`;

const BoardComment = styled.div`
  border: solid white 1px;
  border-radius: 15px;
  width: 400px;
  height: 580px;
  margin: 40px 0 40px 20px;
  padding: 0 5px;
`;

const CommentInput = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  padding: 0 5px;
  ${Box} {
    width: 600px;
    height: 50px;
  }
  button {
    width: 80px;
    height: 50px;
    margin-left: 10px;
    border-radius: 15px;
  }
`;
