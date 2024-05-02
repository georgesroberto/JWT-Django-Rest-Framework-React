import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "../box.css";

function Loginpage() {
  const { loginUser } = useContext(AuthContext);

  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    email.length > 0 && loginUser(email, password);
  };

  return (
    <div>
      <>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div
              className={`form-container ${
                isSignUpActive ? "sign-up-container" : ""
              }`}
            >
              <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="signup.html?provider=facebook" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="signup.html?provider=google" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="signup.html?provider=linkedin" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your account</span>
                <input
                  type="email"
                  id="form2Example17"
                  className="form-control form-control-lg"
                  name="email"
                />
                <input
                  type="password"
                  id="form2Example27"
                  className="form-control form-control-lg"
                  name="password"
                />
                <a href="#!">Forgot your password?</a>
                <button>Sign In</button>
              </form>
            </div>

            <div className="overlay-container">
              <div className="overlay">
                <div
                  className={`overlay-panel overlay-left ${
                    !isSignUpActive ? "active" : ""
                  }`}
                >
                  <h1>Welcome Back to Premiere Peak! 👋</h1>
                  <p>
                    Reconnect with your favorite movies by logging in with your
                    personal info.
                  </p>
                  <Link to="/login" style={{ color: "#393f81" }}>
                    <button className="ghost" onClick={handleSignInClick}>
                      Sign In
                    </button>
                  </Link>
                  <br />
                  <button
                    className="ghost"
                    onClick={() => (window.location.href = "pre-loader.html")}
                  >
                    Maybe Later
                  </button>
                </div>
                <div
                  className={`overlay-panel overlay-right ${
                    isSignUpActive ? "active" : ""
                  }`}
                >
                  <h1>Hello, Movie Buff!</h1>
                  <p>
                    Enter your details to embark on an epic cinematic adventure
                    with us.
                  </p>
                  <Link to="/register" style={{ color: "#393f81" }}>
                    <button className="ghost" onClick={handleSignUpClick}>
                      Sign Up
                    </button>
                  </Link>
                  <br />
                  <button
                    className="ghost"
                    onClick={() => (window.location.href = "pre-loader.html")}
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Loginpage;
