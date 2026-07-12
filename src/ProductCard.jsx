import headphones from "./assets/headphones.jpg";

function ProductCard() {
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
        backgroundColor: "#fff",
      }}
    >
      <img
        src={headphones}
        alt="Wireless Headphones"
        style={{
          width: "250px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h2>Wireless Headphones</h2>

      <p>
        High-quality Bluetooth headphones with noise cancellation.
      </p>

      <h3 style={{ color: "green" }}>₹2999</h3>

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;