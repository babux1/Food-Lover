import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpForm from "./components/SignupForm";
import Meal from "./Meal";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
      setUser(null);
      }
    });
  }

  console.log(user);

  return (

    <div className="App">
      <header className="header">
        <div className="header-left">
          <a href="/">
            <h1>Food Lover</h1>
          </a>
        </div>

        <div className="header-right">
          <div className="btn-wrapper">
            <Link to="/loginpage">
              <button className="login-btn">Login</button>
            </Link>

            <Link to="/loginpage">
              <button className="login-btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>

            <Link to="/signupform">
              <button className="login-btn">Signup</button>
            </Link>
          </div>

          <span className="user-profile">
            {user ? (
              <span>
                <p>
                  Welcome, <strong>{user.username}</strong>!
                </p>
              </span>
            ) : (
              <p>text</p>
            )}
          </span>
          

        </div>
      </header>
      <div>
        <Routes>
          <Route path="loginpage" element={<LoginPage onLogin={setUser} />} />
          <Route path="signupform" element={<SignUpForm onLogin={setUser}/>} />
        </Routes>
      </div>
      <Meal/>
    </div>
  )
}

export default App