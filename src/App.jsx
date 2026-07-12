import ProductCard from "./ProductCard";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Product Card</h1>

      <ProductCard
        name="Wireless Headphones"
        price={2999}
        description="High-quality Bluetooth headphones with noise cancellation."
      />
    </div>
  );
}

export default App;