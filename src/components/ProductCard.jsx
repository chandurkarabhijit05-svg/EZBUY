import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function ProductCard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("EZBUY")
      .select("*")
      .order("id", { ascending: false });

    console.log("Products:", data);
    console.log("Error:", error);

    if (error) {
      console.error(error);
      return;
    }

    setProducts(data || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        padding: "40px",
      }}
    >
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "15px" }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>₹{item.price}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;