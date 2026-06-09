function Categories() {

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "25px",
      padding: "60px",
      background: "#0f0f0f",
    },

    card: {
      height: "300px",
      borderRadius: "15px",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "flex-end",
      transition: "0.4s",
    },

    overlay: {
      width: "100%",
      padding: "20px",
      background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
      color: "#fff",
      fontSize: "22px",
      fontWeight: "bold",
      letterSpacing: "1px",
    }
  };

  const data = [
    {
      name: "MEN",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
    },
    {
      name: "WOMEN",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" // ✅ FIXED
    },
    {
      name: "SHOES",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" // ✅ FIXED
    },
    {
      name: "ELECTRONICS",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    }
  ];

  return (
    <div style={styles.container}>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            ...styles.card,
            backgroundImage: `url(${item.img})`
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <div style={styles.overlay}>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Categories;