import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabase";
import { useAuth } from "../context/AuthContext";
import AddProductModel from "./AddProductModel";
import "./Navbar.css";

function Navbar() {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  async function handleLogout() {
    await supabase.auth.signOut();
    alert("Logged Out Successfully");
  }

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="logo">
          EZBUY
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="auth-links">

          {/* Always Visible */}
          <button
            className="login-btn"
            onClick={() => setShowModal(true)}
          >
            Add Product
          </button>

          {user ? (
            <>
              <span className="user-email">
                {user.email}
              </span>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="login-btn">
                Sign In
              </Link>

              <Link to="/signup" className="signup-btn">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Popup */}
      {showModal && (
        <AddProductModel
          close={() => setShowModal(false)}
          refresh={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Navbar;