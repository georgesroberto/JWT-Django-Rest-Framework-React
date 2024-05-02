import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "../box.css";

function Registerpage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(email, username, password, password2);
  };

  const [isSignUpActive, setIsSignUpActive] = useState(true);

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div>
      <>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div
              className={`form-container ${
                isSignUpActive ? "sign-up-container" : "right-panel-active"
              }`}
            >
              <form
                onSubmit={handleSubmit}
                style={{ backgroundColor: "#9A616D" }}
              >
                <h1>Create Account</h1>
                <div className="social-container">
                  <a href="/" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="/" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your email for registration</span>
                <span style={{ Color: "#00000" }}>Username</span>
                <input
                  type="text"
                  id="form2Example17"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span style={{ Color: "#00000" }}>Email</span>
                <input
                  type="email"
                  id="form2Example17"
                  className="form-control"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span style={{ Color: "#00000" }}>Passweord</span>
                <input
                  type="password"
                  id="form2Example17"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span style={{ Color: "#00000" }}>Password</span>
                <input
                  type="password"
                  id="form2Example27"
                  className="form-control"
                  placeholder="Confirm Password"
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <button>Sign Up</button>
              </form>
            </div>

            <div className="overlay-container">
              <div className="overlay">
                <div
                  className={`overlay-panel overlay-left right-panel-active ${
                    !isSignUpActive ? "active" : ""
                  }`}
                >
                  <h1>Welcome Back to Premiere Peak!</h1>
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
                  className={`overlay-panel overlay-right right-panel-active ${
                    isSignUpActive ? "active" : ""
                  }`}
                >
                  <h1>Hello, Movie Buff!</h1>
                  <p>
                    Enter your details to embark on an epic cinematic adventure
                    with us.
                  </p>
                  <Link to="/register" style={{ color: "#393f81" }}>
                    <button className="ghost" id="signUp">
                      Sign Up
                    </button>
                  </Link>
                  <br />
                  <button
                    className="ghost"
                    id=""
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

export default Registerpage;
