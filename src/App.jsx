import React from "react";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Username: ${username} && Password: ${password}`);
    if (username === "user" && password === "password") {
      setIsLogin(true);
      setMessage("Welcome, user");
    } else {
      setIsLogin(false);
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {message && (
        <div>
          {message} <br />
          <br />
        </div>
      )}

      {!isLogin && (
        <form action="" onSubmit={submitHandler}>
          <label>Username: </label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="username"
            value={username}
            placeholder="username"
            required
          />
          <label>Password: </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
            placeholder="password"
            required
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default App;
