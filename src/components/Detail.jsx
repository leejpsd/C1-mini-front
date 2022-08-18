import styled from "styled-components";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { timeForToday } from "./Time";
import { useNavigate } from "react-router-dom";
import { addPost } from "../redux/modules/postsSlice";
import { deletePost } from "../redux/modules/postsSlice";
import { editPost } from "../redux/modules/postsSlice";
import { addComment } from "../redux/modules/comment";
import { getComment } from "../redux/modules/comment";
import { deleteComment } from "../redux/modules/comment";

function Detail() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { success } = useSelector((state) => state.success);
  const { comments } = useSelector((state) => state.comments);
  const [cmt, setCmt] = useState("");
  const { state } = useLocation();

  const { category, content, id, user, imgURL, title } = state;

  useEffect(() => {
    dispatch(getComment(id));
  }, []);

  const commentInput = {
    postId: id,
    content: cmt,
  };

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(addComment(commentInput));
  };

  return (
    <Layout>
      <NavBox>
        <Logo>
          <Error>
            <p>Hell</p>
            <span
              class="material-symbols-outlined"
              style={{
                color: "red",
                fontSize: "35px",
                fontWeight: "bold",
                position: "absolute",
                left: "125px",
                top: "4px",
              }}
            >
              error
            </span>
          </Error>
          <div>world...</div>
        </Logo>
        <NavBtnBox>
          {success === true ? (
            <Login style={{ backgroundColor: "green" }}></Login>
          ) : (
            <Login
              onClick={() => {
                navigate(`/login`);
              }}
            ></Login>
          )}
        </NavBtnBox>
      </NavBox>
      <BoardBox>
        <Board>
          <TitleBox>
            <p style={{ color: "red" }}>{location.state.category}</p>
            <p style={{ marginLeft: "10px" }}>{location.state.title}</p>
          </TitleBox>
          <InputBtn>
            <p>
              {user} | {timeForToday(location.state.time)}
            </p>
            <div>
              <button
                onClick={() => {
                  navigate(`/edit/${id}`, {
                    state: {
                      id: { id },
                      user: { user },
                      category: { category },
                      title: { title },
                      content: { content },
                      imgURL: { imgURL },
                    },
                  });
                }}
              >
                수정
              </button>
              <button
                onClick={() => {
                  dispatch(deletePost(id));
                  navigate(-1);
                }}
              >
                삭제
              </button>
            </div>
          </InputBtn>
          <TextBox>
            <Imgbox></Imgbox>
            <Text>{content}</Text>
          </TextBox>
          <CommentInput>
            <Box>
              <input
                type="text"
                name="comment"
                value={cmt}
                onChange={(e) => setCmt(e.target.value)}
              />
            </Box>
            <button onClick={clickHandler}>ADD</button>
          </CommentInput>
        </Board>

        <BoardComment>
          {comments.map((item) => (
            <CommentBox key={item.id}>
              <p>
                {item.nickname} | {item.comment}
              </p>
              <button
                onClick={() => {
                  dispatch(deleteComment(item.id));
                }}
              >
                삭제
              </button>
            </CommentBox>
          ))}
        </BoardComment>
      </BoardBox>
    </Layout>
  );
}

export default Detail;

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
  margin-left: 35px;
  margin-bottom: 5px;
  font-family: "Jua", sans-serif;
  font-family: "Silkscreen", cursive;
  font-size: 40px;
  color: white;
  line-height: 35px;
`;
const Error = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  height: 40px;
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
const TitleBox = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  color: white;
  border: solid white 1px;
  width: 98%;
  height: 10%;
  margin: 10px auto;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 0 15px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.819);
  :hover {
    color: #03e9f4;
    background: transparent;
    box-shadow: none;
    box-shadow: 0 0 5px #b3e5fc, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #b3e5fc;
  }
  p {
    font-size: 25px;
  }
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
  text-align: center;
  align-items: center;

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

const CommentBox = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  color: white;
  border: solid white 1px;
  width: 98%;
  height: 10%;
  margin: 10px auto;
  display: flex;
  text-align: center;
  align-items: center;

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
`;
const InputBtn = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 0 15px;
  p {
    color: white;
  }
`;

const TextBox = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  color: white;
  border: solid white 1px;
  width: 98%;
  height: 350px;
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
  }
`;

const BoardBox = styled.div`
  display: flex;
`;
const Imgbox = styled.div`
  box-sizing: border-box;
  border: solid white 1px;
  margin-left: 10px;
  padding: 10px;
`;

const Text = styled.div`
  box-sizing: border-box;
  border: solid white 1px;

  margin-left: 10px;
  padding: 10px;
`;

const BoardComment = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
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
