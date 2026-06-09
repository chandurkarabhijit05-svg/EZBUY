function Footer() {
  const styles = {
    container: {
      background: "#0a0a0a",
      color: "#ccc",
      padding: "50px 20px 20px",
      fontFamily: "Segoe UI, sans-serif",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
    },

    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#d4af37",
      marginBottom: "10px",
      letterSpacing: "2px",
    },

    heading: {
      color: "#fff",
      marginBottom: "10px",
      fontSize: "16px",
    },

    link: {
      display: "block",
      textDecoration: "none",
      color: "#aaa",
      marginBottom: "8px",
      fontSize: "14px",
      transition: "0.3s",
      cursor: "pointer"
    },

    bottom: {
      borderTop: "1px solid #222",
      marginTop: "30px",
      paddingTop: "15px",
      textAlign: "center",
      fontSize: "14px",
      color: "#777"
    }
  };

  return (
    <div style={styles.container}>

      {/* TOP GRID */}
      <div style={styles.grid}>

        {/* BRAND */}
        <div>
          <div style={styles.logo}>EZBUY</div>
          <p>
            Premium men’s fashion designed for confidence and style.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 style={styles.heading}>Quick Links</h4>
          <span style={styles.link}>Home</span>
          <span style={styles.link}>Shop</span>
          <span style={styles.link}>About</span>
          <span style={styles.link}>Contact</span>
        </div>

        {/* HELP */}
        <div>
          <h4 style={styles.heading}>Customer Care</h4>
          <span style={styles.link}>FAQ</span>
          <span style={styles.link}>Returns</span>
          <span style={styles.link}>Shipping</span>
          <span style={styles.link}>Support</span>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 style={styles.heading}>Newsletter</h4>
          <p>Subscribe for latest offers</p>
          <input
            type="email"
            placeholder="Enter email"
            style={{
              padding: "8px",
              width: "100%",
              borderRadius: "5px",
              border: "none",
              marginTop: "5px",
              outline: "none"
            }}
          />
        </div>

      </div>

      {/* BOTTOM */}
      <div style={styles.bottom}>
        © 2026 EZBUY. All Rights Reserved.
      </div>

    </div>
  );
}

export default Footer;