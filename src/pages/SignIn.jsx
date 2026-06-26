import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import "../styles/Auth.css";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login Successful!");
      navigate("/");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* Left Side */}
        <div className="left-side">
          <div>
            <span className="brand">EZBUY</span>

            <h1>Welcome Back</h1>

            <p>
              Login to explore the latest fashion trends,
              exclusive collections, and premium deals.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side">

          <h2>Sign In</h2>

          <form onSubmit={handleLogin}>

            <input
              className="input-box"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="input-box"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="show-password">
              <input
                type="checkbox"
                id="show"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />

              <label htmlFor="show">
                Show Password
              </label>
            </div>

            <button
              type="submit"
              className="auth-btn"
            >
              Sign In
            </button>

          </form>

          <div className="link">
            Don't have an account?

            <Link to="/signup">
              Create Account
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SignIn;