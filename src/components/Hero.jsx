function Hero() {
  const styles = {
    container: {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start", // LEFT ALIGN = MORE PREMIUM
      textAlign: "left",
      padding: "60px",
      boxSizing: "border-box",
      color: "#fff",

      background: `
        linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4)),
        url("https://images.unsplash.com/photo-1516826957135-700dedea698c")
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    content: {
      maxWidth: "600px",
      zIndex: "1",
    },

    title: {
      fontSize: "clamp(35px, 6vw, 75px)",
      fontWeight: "900",
      lineHeight: "1.2",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "20px",
    },

    highlight: {
      color: "#d4af37", // GOLD COLOR 💎
    },

    subtitle: {
      fontSize: "clamp(16px, 2.5vw, 20px)",
      color: "#ddd",
      marginBottom: "30px",
    },

    button: {
      padding: "14px 40px",
      fontSize: "15px",
      borderRadius: "30px",
      border: "2px solid #d4af37",
      cursor: "pointer",
      fontWeight: "bold",
      color: "#d4af37",
      background: "transparent",
      transition: "all 0.3s ease",
      letterSpacing: "1px",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        <h1 style={styles.title}>
          Elevate Your <span style={styles.highlight}>Style</span>
        </h1>

        <p style={styles.subtitle}>
          Discover premium men’s fashion — from timeless classics to modern trends. 
          Designed for confidence, built for style.
        </p>

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
          SHOP COLLECTION
        </button>

      </div>
    </div>
  );
}

export default Hero;