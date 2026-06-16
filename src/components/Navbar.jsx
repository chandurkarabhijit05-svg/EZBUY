import { Link } from "react-router-dom";
import { useState } from "react";
import AddProductModel from "./AddProductModel";

function Navbar() {
  const [showModel, setShowModel] = useState(false);

  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 50px",
      background: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(12px)",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    },

    logo: {
      fontSize: "26px",
      fontWeight: "bold",
      letterSpacing: "2px",
      color: "#d4af37",
      cursor: "pointer",
    },

    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
    },

    link: {
      color: "#ccc",
      textDecoration: "none",
      fontSize: "15px",
      letterSpacing: "1px",
      transition: "0.3s",
    },

    button: {
      padding: "8px 18px",
      borderRadius: "20px",
      border: "1px solid #d4af37",
      color: "#d4af37",
      background: "transparent",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold"
    }
  };

  return (
    <>
      <div style={styles.nav}>
        <h2 style={styles.logo}>EZBUY</h2>

        <div style={styles.navLinks}>
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={styles.link}
              onMouseOver={(e) => {
                e.target.style.color = "#fff";
                e.target.style.borderBottom = "2px solid #d4af37";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#ccc";
                e.target.style.borderBottom = "none";
              }}
            >
              {item.toUpperCase()}
            </Link>
          ))}

          {/* ADD PRODUCT */}
          <button
            style={styles.button}
            onClick={() => setShowModel(true)}
          >
            ADD PRODUCT
          </button>

          {/* LOGIN */}
          <button
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.background = "#d4af37";
              e.target.style.color = "#000";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#d4af37";
            }}
          >
            LOGIN
          </button>
        </div>
      </div>

      {/* MODEL POPUP */}
      {showModel && (
        <AddProductModel
          close={() => setShowModel(false)}
          refresh={() => console.log("refresh products")}
        />
      )}
    </>
  );
}

export default Navbar;