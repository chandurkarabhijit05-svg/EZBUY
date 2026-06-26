import { useState } from "react";
import { supabase } from "../supabase";

function AddProductModel({ close, refresh }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async () => {
    if (
      !form.title ||
      !form.description ||
      !form.price ||
      !form.image
    ) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase
      .from("EZBUY")
      .insert([
        {
          title: form.title,
          description: form.description,
          price: Number(form.price),
          image: form.image,
        },
      ]);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("Product Added Successfully");

    if (refresh) refresh();

    close();
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2 style={heading}>Add Product</h2>

        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={form.title}
          onChange={handleChange}
          style={input}
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
          style={textarea}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          style={input}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          style={input}
        />

        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            style={preview}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}

        <div style={buttonContainer}>
          <button
            style={addButton}
            onClick={addProduct}
          >
            Add Product
          </button>

          <button
            style={cancelButton}
            onClick={close}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.8)",
  backdropFilter: "blur(8px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modal = {
  width: "420px",
  background: "#161616",
  borderRadius: "20px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
};

const heading = {
  color: "#fff",
  textAlign: "center",
  marginBottom: "10px",
};

const input = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#0f0f0f",
  color: "#fff",
  outline: "none",
  fontSize: "14px",
};

const textarea = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#0f0f0f",
  color: "#fff",
  outline: "none",
  fontSize: "14px",
  resize: "none",
  height: "100px",
};

const preview = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
};

const buttonContainer = {
  display: "flex",
  gap: "10px",
};

const addButton = {
  flex: 1,
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(90deg,#ff6a00,#ff0066)",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};

const cancelButton = {
  flex: 1,
  padding: "12px",
  border: "1px solid #444",
  borderRadius: "10px",
  background: "transparent",
  color: "#fff",
  cursor: "pointer",
};

export default AddProductModel;