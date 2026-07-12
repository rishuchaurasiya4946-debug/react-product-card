import ProductCard from "../ProductCard";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Home Page</h1>

      <ProductCard
        name="Wireless Headphones"
        price={2999}
        description="High-quality Bluetooth headphones with noise cancellation."
      />
    </div>
  );
}

export default Home;