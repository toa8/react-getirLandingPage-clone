import React from "react";
// STYLE
import styles from "../styles/mainsection.module.css";

const MainSection = () => {
  return (
    <main className={styles.container}>
      <div className={styles.leftSide}>
        <img
          src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
          alt=""
          className={styles.img}
        />
        <div className={styles.textBox}>
          <p className={styles.text}>Dakikalar içinde</p>
          <p className={styles.text}>kapınızda</p>
        </div>
      </div>
      <div className={styles.inputSide}>
        <form className={styles.form}>
          <p style={{ color: "#5d3ebc", fontWeight: 600, marginBottom: "8px" }}>
            Giriş yap veya kayıt ol
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5rem",
            }}
          >
            <input
              type="number"
              style={{ width: "110px", textAlign: "center" }}
              placeholder="+90"
            />
            <input
              type="text"
              placeholder="Telefon numarası"
              style={{ width: "220px" }}
            />
          </div>

          <button>Telefon numarası ile devam et</button>
        </form>
      </div>
    </main>
  );
};

export default MainSection;
