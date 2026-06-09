function ProductCard() {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
      padding: "60px",
      background: "#0f0f0f",
    },

    card: {
      background: "#1a1a1a",
      borderRadius: "15px",
      overflow: "hidden",
      textAlign: "left",
      transition: "0.3s",
      cursor: "pointer",
      boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    },

    image: {
      width: "100%",
      height: "280px",
      objectFit: "cover",
      transition: "0.4s",
    },

    content: {
      padding: "15px",
    },

    name: {
      fontSize: "15px",
      color: "#eee",
      marginBottom: "10px",
      minHeight: "40px",
    },

    price: {
      color: "#d4af37", // GOLD
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },

    button: {
      width: "100%",
      padding: "10px",
      border: "none",
      borderRadius: "8px",
      background: "linear-gradient(90deg, #ff6a00, #ff0066)",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
    }
  };

  const products = [
    {
      id: 1,
      name: "DEELMO Men’s Stylish Cotton Blend Casual Shirt",
      price: 999,
      image: "https://m.media-amazon.com/images/I/61qMMGkDHfL._SY741_.jpg",
    },
    {
      id: 2,
      name: "T-Shirt for Men Zip Neck Texture Self Design Cotton Blend",
      price: 799,
      image: "https://m.media-amazon.com/images/I/51MZ55vbGaL._SX569_.jpg",
    },
    {
      id: 3,
      name: "DEELMO Men’s Stylish Cotton Blend Casual Check Shirt",
      price: 299,
      image: "https://m.media-amazon.com/images/I/512E5+kftKL.jpg",
    },
    {
      id: 4,
      name: "Graphic Print Round Neck Pure Cotton Black T-Shirt",
      price: 899,
      image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/t-shirt/h/f/t/m-blc-tsrt-red-spider-0070-choicehub-original-imahks94zphwwkvh.jpeg?q=90",
    },
    {
      id: 5,
      name: "BARKEYO Oversized Graphic Print Tshirt for Men",
      price: 799,
      image: "https://m.media-amazon.com/images/I/61lsSUJhf0L._SY741_.jpg",
    },
    {
      id: 6,
      name: "FalconWear Checkered Casual Shirt",
      price: 699,
      image: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/shirt/o/h/a/l-99-brown-527-dm-fashion-original-imahhdvf8h98mepg.jpeg?q=90",
    },
  ];

  return (
    <div style={styles.container}>
      {products.map((item) => (
        <div
          key={item.id}
          style={styles.card}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={styles.image}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />

          <div style={styles.content}>
            <h3 style={styles.name}>{item.name}</h3>
            <p style={styles.price}>₹{item.price}</p>

            <button
              style={styles.button}
              onMouseOver={(e) => {
                e.target.style.opacity = "0.8";
              }}
              onMouseOut={(e) => {
                e.target.style.opacity = "1";
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;