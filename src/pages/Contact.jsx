function Contact() {

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
      padding: "20px",
      fontFamily: "Segoe UI, sans-serif",
    },

    box: {
      width: "100%",
      maxWidth: "500px",
      background: "#1c1c1c",
      padding: "40px",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
    },

    title: {
      textAlign: "center",
      color: "#fff",
      marginBottom: "25px",
      fontSize: "28px",
      letterSpacing: "1px",
    },

    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #333",
      background: "#0f0f0f",
      color: "#fff",
      outline: "none",
      fontSize: "14px",
    },

    textarea: {
      width: "100%",
      padding: "12px",
      height: "120px",
      borderRadius: "8px",
      border: "1px solid #333",
      background: "#0f0f0f",
      color: "#fff",
      outline: "none",
      fontSize: "14px",
      resize: "none",
      marginBottom: "15px",
    },

    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "30px",
      border: "none",
      background: "linear-gradient(90deg, #ff6a00, #ff0066)",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
      fontSize: "15px",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>

        <h2 style={styles.title}>Contact EZBUY</h2>

        <input
          type="text"
          placeholder="Your Name"
          style={styles.input}
          onFocus={(e) => e.target.style.border = "1px solid #ff0066"}
          onBlur={(e) => e.target.style.border = "1px solid #333"}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={styles.input}
          onFocus={(e) => e.target.style.border = "1px solid #ff0066"}
          onBlur={(e) => e.target.style.border = "1px solid #333"}
        />

        <textarea
          placeholder="Your Message"
          style={styles.textarea}
          onFocus={(e) => e.target.style.border = "1px solid #ff0066"}
          onBlur={(e) => e.target.style.border = "1px solid #333"}
        ></textarea>

        <button
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 0 25px rgba(255,0,102,0.8)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          SEND MESSAGE
        </button>

      </div>
    </div>
  );
}

export default Contact;