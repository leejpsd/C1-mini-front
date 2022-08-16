import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __postSignup } from "../redux/modules/signup";
import { __getSignup } from "../redux/modules/signup";
import "./css/signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const userInfo = {
    username: username,
    password: password,
    nickname: nickname,
  };

  const submitHandler = () => {
    userInfoHandler();
    // navigate("/Login");
  };

  const userInfoHandler = () => {
    dispatch(__postSignup(userInfo));
  };

  return (
    <div class="login-box">
      <h2>Signup</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
        <div class="user-box">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <label>nickname</label>
        </div>
        <a
          onClick={() => {
            submitHandler();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};

export default Signup;
