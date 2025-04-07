import React from "react";

const LoginForm = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username: </label>
        <input type="text" /> <br /> <br />
        <label htmlFor="">Password: </label>
        <input type="password" /> <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
