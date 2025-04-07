import React, { useState } from "react";
import "./../styles/App.css";
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <h2>You are Logged in!</h2>
      )}
    </div>
  );
};

export default App;
