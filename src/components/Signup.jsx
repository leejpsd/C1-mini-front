import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __postSignup } from "../redux/modules/signup";
import { __getSignup } from "../redux/modules/signup";
import "./css/signup.css";

const Signup = () => {
  const { success } = useSelector((state) => state.success);
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

  //유효성검사(input은 영어,숫자만 입력되게함)
  const isValidId = username.length >= 4 && username.length <= 12;
  const isValidpw = password.length >= 4 && password.length <= 32;
  const isValidname = nickname.length >= 1;

  const submitHandler = () => {
    if (isValidId && isValidpw && isValidname == true) {
      userInfoHandler();
    } else {
      alert("입력란을 확인해주세요");
    }

    navigate("/Login");
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
            onChange={(e) =>
              setUsername(e.target.value.replace(/[^A-Za-z0-9]/gi, ""))
            }
          />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value.replace(/[^A-Za-z0-9]/gi, ""))
            }
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
