import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import "../styles/Auth.css";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account Created Successfully!");
      navigate("/signin");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="left-side">
          <div>
            <h1>Join Us 🚀</h1>
            <p>
              Create your account and start shopping
              from thousands of amazing products.
            </p>
          </div>
        </div>

        <div className="right-side">

          <h2>Create Account</h2>

          <form onSubmit={handleSignup}>

            <input
              className="input-box"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label style={{ marginBottom: "20px", display: "block" }}>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />{" "}
              Show Password
            </label>

            <button className="auth-btn">
              Create Account
            </button>

          </form>

          <div className="link">
            Already have an account?
            <br />
            <Link to="/signin">Sign In</Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SignUp;