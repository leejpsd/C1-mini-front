import React from "react";

import "./css/login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __postUsers } from "../redux/modules/users";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = {
    username: username,
    password: password,
  };

  const userInfoHandler = () => {
    if (username === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
    }
    dispatch(__postUsers(userInfo));
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div class="login-box">
        <h2>𝐋𝐨𝐠𝐢𝐧</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            userInfoHandler();
          }}
        >
          <div class="user-box">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <a onClick={() => userInfoHandler()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          <a
            className="btn"
            type="button"
            onClick={() => {
              navigate("/Signup");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Signup
          </a>
        </form>
      </div>
    </>
  );
};

export default Login;
