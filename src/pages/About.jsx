function About() {
  const styles = {
    container: {
      padding: "60px 20px",
      fontFamily: "Segoe UI, sans-serif",
      background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
      color: "#eee",
      lineHeight: "1.7",
      minHeight: "100vh"
    },

    header: {
      textAlign: "center",
      marginBottom: "50px",
    },

    title: {
      fontSize: "42px",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #ff6a00, #ff0066)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    subtitle: {
      color: "#aaa",
      marginTop: "10px",
      fontSize: "16px"
    },

    section: {
      maxWidth: "900px",
      margin: "0 auto 30px auto",
      background: "#1e1e1e",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
      border: "1px solid #2a2a2a",
      transition: "0.3s",
    },

    heading: {
      fontSize: "24px",
      marginBottom: "10px",
      color: "#ff4d6d",
    },

    text: {
      fontSize: "16px",
      color: "#ccc",
    },

    highlight: {
      color: "#ff6a00",
      fontWeight: "bold",
    },

    divider: {
      width: "60px",
      height: "3px",
      background: "linear-gradient(90deg, #ff6a00, #ff0066)",
      margin: "10px 0 20px 0",
      borderRadius: "10px",
    }
  };

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>About EZBuy</h1>
        <p style={styles.subtitle}>
          Redefining fashion with style, simplicity & confidence
        </p>
      </div>

      {/* SECTION 1 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Who We Are</h2>
        <div style={styles.divider}></div>
        <p style={styles.text}>
          Welcome to <span style={styles.highlight}>EZBuy</span>, your ultimate destination for 
          trendy, affordable, and high-quality fashion. We believe that style should be 
          effortless, accessible, and expressive for everyone.
        </p>
      </div>

      {/* SECTION 2 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Our Story</h2>
        <div style={styles.divider}></div>
        <p style={styles.text}>
          Founded with a passion for fashion, EZBuy was created to simplify online shopping 
          while delivering the latest trends. From everyday essentials to bold statement pieces, 
          we bring you a carefully curated collection for every mood and occasion.
        </p>
      </div>

      {/* SECTION 3 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Our Mission</h2>
        <div style={styles.divider}></div>
        <p style={styles.text}>
          Our mission is simple: to make fashion{" "}
          <span style={styles.highlight}>easy, enjoyable, and affordable</span>. 
          We empower you to express your unique identity without compromising on quality.
        </p>
      </div>

      {/* SECTION 4 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Why Choose EZBuy?</h2>
        <div style={styles.divider}></div>
        <p style={styles.text}>
          At EZBuy, customer satisfaction is our priority. We deliver not just products, 
          but a complete shopping experience — fast, reliable, and enjoyable.
          <br /><br />
          Join our community and redefine your style with confidence. 
          Because at EZBuy, fashion isn’t just clothing — 
          <span style={styles.highlight}> it’s your identity.</span>
        </p>
      </div>

    </div>
  );
}

export default About;