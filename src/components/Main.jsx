import React from "react";

import styled from "styled-components";

const Main = () => {
  return (
    <Layout>
      <NavBox>
        <Logo>Hell🚫 world...</Logo>
        <NavBtnBox>
          <Login></Login>
        </NavBtnBox>
      </NavBox>
      <BtnGroup>
        <Btn>
          <span>JAVASCRIPT</span>
        </Btn>
        <Btn>
          <span>C</span>
        </Btn>
        <Btn>
          <span>PYTHON</span>
        </Btn>
        <Btn>
          <span>C++</span>
        </Btn>
        <Btn>
          <span>JAVA</span>
        </Btn>
        <Btn>
          <span>react</span>
        </Btn>
      </BtnGroup>
      <Board>
        <Box>
          <p>게시글제목...</p>
          <div>
            <p>❤️</p>
            <p>몇분전</p>
          </div>
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Board>
    </Layout>
  );
};

export default Main;

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

const BtnGroup = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Btn = styled.div`
  text-align: center;
  width: 150px;
  height: 40px;
  color: #ffffff;
  font-weight: bold;
  border-radius: 30px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 4px 4px 4px 0px rgba(255, 255, 255, 0.819),
    5px 5px 5px 0px rgba(232, 232, 232, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  line-height: 42px;
  padding: 0;
  border: none;
  background: #6ccdd2;
  font-family: "Jua", sans-serif;
  font-family: "Silkscreen", cursive;

  :hover {
    color: #03e9f4;
    background: transparent;
    box-shadow: none;
    box-shadow: 0 0 5px #b3e5fc, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #b3e5fc;
  }
`;

const Board = styled.div`
  border: solid white 1px;
  border-radius: 15px;
  width: 700px;
  height: 480px;
  margin: 20px auto;
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
  div {
    display: flex;
    p {
      margin-left: 5px;
    }
  }
`;
