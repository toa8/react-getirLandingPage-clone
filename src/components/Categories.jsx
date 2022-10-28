import React from "react";
// STYLES
import styles from "../styles/categories.module.css";
import { products } from "../assets/products";

const Categories = () => {
  return (
    <div className={styles.container}>
      <p
        style={{
          fontSize: "14px",
          color: "#191919",
          width: "90%",
          margin: "1rem auto",
          fontWeight: "600",
        }}
      >
        Kategoriler
      </p>
      <div className={styles.cards}>
        {products.map((product, id) => (
          <div className={styles.card} key={id}>
            <img
              src={product.src}
              alt="aa"
              style={{ width: "46px", heigth: "46px", borderRadius: "8px" }}
            />
            <p
              style={{ fontSize: "14px", fontWeight: "600" }}
              className={styles.productName}
            >
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
