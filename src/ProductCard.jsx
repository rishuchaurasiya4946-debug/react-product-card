import { useState } from "react";
import headphones from "./assets/headphones.jpg";

function ProductCard({ name, price, description }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      style={{
        width: "320px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={headphones}
        alt={name}
        style={{
          width: "250px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h2>{name}</h2>

      <p>{description}</p>

      <h3 style={{ color: "green" }}>₹{price}</h3>

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Buy Now
      </button>

      <button
        onClick={() => setLiked(!liked)}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default ProductCard;