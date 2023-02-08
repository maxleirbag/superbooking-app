import "./login.css";
import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    const res = await axios.post("//localhost:8800/auth/login", credentials);
    try {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input type="text" id="username" onChange={handleChange} className="lInput" placeholder="username" />
        <input type="password" id="password" onChange={handleChange} className="lInput" placeholder="password" />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Log in
        </button>
        {error && <span>{error.mesage}</span>}
      </div>
    </div>
  );
};

export default Login;
