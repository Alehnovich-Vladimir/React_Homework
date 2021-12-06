import React, { useState } from "react";
import './index.css'

const Login = () => {
  const [isSignIn, setSignIn] = useState("false");

  const loginIn = () => {
    setSignIn(!isSignIn);
  };

  const onClickButton = () => {
    setTimeout(loginIn, 3000);
  };

  return (
    <div className="container">
      {!isSignIn ? (
        <p className="text"> Hello user!!!</p>
      ) : (
        <button className="btn" onClick={onClickButton}>Sing In</button>
      )}
    </div>
  );
};

export default Login;