import { useState } from "react";

function Testimonials() {

  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "Amazing quality! Clothes feel premium and stylish.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Amit Verma",
      text: "Fast delivery and perfect fitting. Loved it!",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Karan Mehta",
      text: "Best men's fashion store online. Highly recommend!",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  const styles = {
    container: {
      padding: "80px 20px",
      background: "linear-gradient(to right, #0f0f0f, #1c1c1c)",
      textAlign: "center",
      color: "#fff",
      minHeight: "60vh"
    },

    title: {
      fontSize: "32px",
      marginBottom: "40px",
      letterSpacing: "1px"
    },

    card: {
      maxWidth: "600px",
      margin: "auto",
      background: "#1a1a1a",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
      transition: "0.5s"
    },

    text: {
      fontSize: "18px",
      marginBottom: "15px",
      lineHeight: "1.6"
    },

    name: {
      fontWeight: "bold",
      marginTop: "10px",
      color: "#ff0066"
    },

    buttons: {
      marginTop: "30px"
    },

    btn: {
      margin: "0 10px",
      padding: "10px 20px",
      borderRadius: "25px",
      border: "none",
      background: "linear-gradient(90deg, #ff6a00, #ff0066)",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "0.3s"
    }
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>What Our Customers Say</h2>

      <div style={styles.card}>
        <p style={styles.text}>
          "{testimonials[index].text}"
        </p>

        <p>{testimonials[index].rating}</p>

        <p style={styles.name}>
          - {testimonials[index].name}
        </p>
      </div>

      <div style={styles.buttons}>
        <button
          style={styles.btn}
          onClick={prev}
          onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          ⬅ Prev
        </button>

        <button
          style={styles.btn}
          onClick={next}
          onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default Testimonials;