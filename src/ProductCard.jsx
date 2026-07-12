import headphones from "./assets/headphones.jpg";
import styles from "./ProductCard.module.css";

function ProductCard({ name, price, description }) {
  return (
    <div className={styles.card}>
      <img
        src={headphones}
        alt={name}
        className={styles.image}
      />

      <h2 className={styles.title}>{name}</h2>

      <p className={styles.description}>{description}</p>

      <h3 className={styles.price}>₹{price}</h3>

      <button className={styles.buyButton}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;